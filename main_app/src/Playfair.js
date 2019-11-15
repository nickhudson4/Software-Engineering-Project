//TwoSquare.js file

//twosquare class declaration
export var playfair = (function () {

    function playfair() {
    }

    //Our alphabet for setting our matricies, i is omitted    
    var alphabet = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Our 2 matricies used for 2 tSquare
    let myarr = [];
    let codedArray = [];
    let decodedArray = [];
    let outputPair = [2];

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
    var keyword = 'keyword';

    var kword;

    //Returns the keyword of our first matrix
    playfair.keywordf = function(){
    return keyword;
    }


    var encryptionWord;
    playfair.eWord = function(){
      return encryptionWord;
    }


    playfair.encrypt = function(word){
    let searchPair = [];

    if(word.length % 2 != 0)
    {
      word = word + 'x';
    }
    encryptionWord = word;
    for(let i = 0; i < word.length; ++i, ++i)
    {
      searchPair[0] = word[i];
      searchPair[1] = word[i+1];
      playfair.coord(searchPair);
      var temp = playfair.letterPair();
      codedArray.push(temp);
    }

    return codedArray;
  }


    playfair.start = function(){
      playfair.setMatrix(keyword);
      playfair.coord("cy")
      var temp = playfair.letterPair();
      //return temp;
    }



    //Determines coordinates based on the input 2 letters from the message
    playfair.coord = function(pair)
    {
      for(let i=0; i < 5; ++i)
        {
          for(let j=0; j < 5; ++j)
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
      pair[0] = myarr[x2][y1];
      pair[1] = myarr[x1][y2];
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


  //Filters through for i
  playfair.filter = function(word){
    let buff = []
    for (let i=0; i < word.length; ++i){
      if (word[i] === 'i'){
        buff[i] = 'j';
      }
      else{
        buff[i] = word[i];
      }
    }
      return buff;
  }



  playfair.newArray1 = function(word){
    let array = [];
    var truth;

  for (let t=0; t < alphabet.length; ++t){
    truth = 0;
    for (let j=0; j < kword.length; ++j){
        if (alphabet[t] === kword[j]){
          truth = 1;
        }
    }
    
    if (truth != 1){
      array.push(alphabet[t]);
    }
  }
  return array;
}





  playfair.setMatrix = function(){
  kword = playfair.filter(keyword);
  var tempArr1 = playfair.newArray1();
  var temp1 = 0;
  var temp2 = 0;
  var temp3 = 0;
  var truth = 0;

  //Outer loop
  for(let a=0; a < 5; a++){
    //Declares an array, named row
    let row = []
    //Inner loop
    for(let b=0; b < 5; b++){
      var col;
      truth = 0;
      //Our first if statement inputs our keyword into our matrix
      if (temp1 < keyword.length)
      {
        truth = 0;
        col = keyword[temp1];
        temp1++;
      }
      //Second if statement inputs our alphabet into our matrix
      else if (temp2 < tempArr1.length){
        col = tempArr1[temp2];
        ++temp2;
      }
      //Else we input our numbers 0-9
      else
      {
        col = tempArr1[temp3];
        ++temp3;
      }
      //Insert our value into our array
      row.push(col);
    }
    //Insert that array into an array of arrays
    myarr.push(row);
  }
  //Returns the matrix
  return myarr;
}


    playfair.main = function (args) {
    };
    return playfair;
}());

playfair["__class"] = "playfair";
playfair.main(null);