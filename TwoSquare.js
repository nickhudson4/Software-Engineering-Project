//TwoSquare.js file

//twosquare class declaration
export var twosquare = (function () {

    function twosquare() {
    }

    //Our alphabet for setting our matricies, i is omitted    
    var alphabet = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Our 2 matricies used for 2 tSquare
    let myarr1 = [];
    let myarr2 = [];

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
    var keyword1 = 'math';
    //The keyword in our second matrix
    var keyword2 = 'cid';

    //Returns the keyword of our first matrix
    twosquare.keyword1f = function(){
    return keyword1;
    }
    //Returns the keyword of our second matrix
    twosquare.keyword2f = function(){
    return keyword2;
    }
    //Creates both of our matricies
    twosquare.encryptMessage = function(){
      twosquare.setMatrix1(keyword1);
      twosquare.setMatrix2(keyword2);
    //Returns the second matrix
    return myarr2;
    }


    //Determines coordinates based on the input 2 letters from the message
    twosquare.coord = function(pair)
    {
      for(let i=0; i<=5; ++i)
        {
          for(let j=0; j<=5; ++j)
          {
            if (myarr1[i][j] === pair[0])
            {
              x1=i;
              y1=j;
            }
            if (myarr2[i][j] === pair[1])
            {
              x2=i;
              y2=j;
            }
          }
        }
      }


    //Returns the input search pair
    twosquare.letterPair = function(){
      let pair = [2];
      pair[0] = myarr1[x1][y2];
      pair[1] = myarr2[x2][y1];
      return pair;
    }
    //Returns our first matrix
    twosquare.first = function()
    {
      return myarr1[x1][y2];
    }
    //Returns our second matrix
    twosquare.second = function()
    {
      return myarr2[x2][y1];
    }



    //Creates our first matrix
    twosquare.setMatrix1 = function(keyword){
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
      myarr1.push(row);
    }
    //Returns matrix
    return myarr1;
  }

    //Generates second matrix
    twosquare.setMatrix2 = function(keyword){
    var temp1 = 0;
    var temp2 = 0;
    var truth = 0;

    //Outer loop
    for(let a=0; a <= 5; a++){
      //Creates an array
      let row = []
      //Inner loop
      for(let b=0; b <= 5; b++){
        var col;
        truth = 0;
        //Inserts keyword
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
        //Inserts alphabet
        else
        {
          col = alphabet[temp2];
          truth = 0;
          for(let i=0; i < keyword.length && truth === 0; ++i){
            //Checks for duplicates
            if (alphabet[temp2] === keyword[i] && temp2 < 25)
            {
              ++temp2;
              col = alphabet[temp2];
              truth = 1;
            }
          }
          ++temp2;
        }
        row.push(col);
      }
      myarr2.push(row);
    }
    return myarr2;
  }


    twosquare.main = function (args) {
    };
    return twosquare;
}());

twosquare["__class"] = "twosquare";
twosquare.main(null);