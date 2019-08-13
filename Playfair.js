//Playfair.js file (Definately not done)

//twosquare class declaration
export var playfair = (function () {

    function playfair() {
    }

    //Our alphabet for setting our matricies, i is omitted    
    var alphabet = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Our 2 matricies used for 2 tSquare
    let myarr = [];

    //Calculated x coordinate of first matrix
    var x1;
    //Calculated y coordinate of first matrix
    var y1;
    //Calculated x coordinate of second matrix
    var x2;
    //Calculated x coordinated of second matrix
    var y2;
    //Desired search value
    var target;
    //The keyword in our first matrix
    var keyword = 'math';

    //Returns the keyword of our first matrix
    playfair.keywordf = function(){
    return keyword;
    }
    //Creates both of our matricies
    playfair.encryptMessage = function(){
      playfair.setMatrix1(keyword);
    return myarr;
    }


    //Determines coordinates based on the input 2 letters from the message
    playfair.coord = function(pair)
    {
      for(let i=0; i<=5; ++i)
        {
          for(let j=0; j<=5; ++j)
          {
            if (myarr[i][j] === pair[0])
            {
              x1=i;
              y1=j;
            }
            if (myarr[i][j] === pair[1])
            {
              x2=i;
              y2=j;
            }
          }
        }
      }




    //Returns the input search pair
    playfair.letterPair = function(){
      let pair = [2];
      pair[0] = myarr[x1][y2];
      pair[1] = myarr[x2][y1];
      return pair;
    }
    //Returns our first matrix
    playfair.first = function()
    {
      return myarr[x1][y2];
    }
    //Returns our second matrix
    playfair.second = function()
    {
      return myarr[x2][y1];
    }


    //Creates our first matrix
    playfair.setMatrix1 = function(keyword){
    var temp1 = 0;
    var temp2 = 0;
    var truth = 0;

    //Outer loop
    for(let a=0; a <= 5; a++){
      //Creates an array
      let row = []
      //Inner loop
      for(let b=0; b <= 5; b++){
        //Temp variable
        var col;
        truth = 0;
        //Inserts the keyword
        if (temp1 < keyword.length)
        {
          col = keyword[temp1];
          truth = 0;
          for(let i=0; i < temp1 && truth === 0; ++i)
          {
            //Checks for duplicates
            if (keyword[temp1] === keyword[i] || keyword[temp1] === 'i')
            {
              while (keyword[temp1] === keyword[i] || keyword[temp1] === 'i' || keyword[temp1] === keyword[temp1-1])
              {
                ++temp1;
              }
              col = keyword[temp1];
              truth = 1;
            }
          }
          ++temp1;
        }
        //Inserts the alphabet
        else
        {
          col = alphabet[temp2];
          truth = 0;
          for(let i=0; i < keyword.length && truth === 0; ++i){
            //Checks for duplicates between keyword 1 and alphabet
            if (alphabet[temp2] === keyword[i] && temp2 < 25)
            {
              ++temp2;
              col = alphabet[temp2];
              truth = 1;
            }
          }
          ++temp2;
        }
        //Insert desired value into array
        row.push(col);
      }
      //Inserts array into matrix
      myarr.push(row);
    }
    //Returns matrix
    return myarr;
  }


    playfair.main = function (args) {
    };
    return playfair;
}());

playfair["__class"] = "playfair";
playfair.main(null);