//TwoSquare.js file

//twosquare class declaration
export var foursquare = (function () {

    function foursquare() {
    }

    //Our alphabet for setting our matricies, i is omitted    
    var alphabet = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Our 2 matricies used for 2 tSquare
    let myarr1 = [];
    let myarr2 = [];
    let myarr3 = [];
    let myarr4 = [];
    let codedArray = [];
    let decodedArray = [];
    let outputPair = [2];

    //Calculated x coordinate of first matrix
    var x1;
    //Calculated y coordinate of first matrix
    var y1;
    //Calculated x coordinate of second matrix
    var x3;
    //Calculated x coordinated of second matrix
    var y3;
    //Desired search value
    var target;
    //The keyword in our first matrix
    var keyword1 = 'math';
    //The keyword in our second matrix
    var keyword2 = 'cid';
    var kword;

    //Returns the keyword of our first matrix
    foursquare.keyword1f = function(){
    return keyword1;
    }
    //Returns the keyword of our second matrix
    foursquare.keyword2f = function(){
    return keyword2;
    }
    var encryptionWord;
    foursquare.eWord = function(){
      return encryptionWord;
    }
    var decryptionWord;
    foursquare.dWord = function(){
      return decryptionWord;
    }


  //Function for decrypting a word
  foursquare.decrypt = function(word){
  let searchPair = [];

  if(word.length % 2 != 0)
  {
    word = word + 'x';
  }
  decryptionWord = word;
  for(let i = 0; i < word.length; ++i, ++i)
  {
      searchPair[0] = word[i];
      searchPair[1] = word[i+1];
      foursquare.reverseCoord(searchPair);
      var temp = foursquare.reversePair();
      decodedArray.push(temp);
  }

    return decodedArray;
  }


  //Function for encrypting a word
  foursquare.encrypt = function(word){
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
      foursquare.coord(searchPair);
      var temp = foursquare.letterPair();
      codedArray.push(temp);
  }

    return codedArray;
  }

    //Creates our matricies
    foursquare.start = function(){
      foursquare.setMatrix1(keyword1);
      foursquare.setMatrix2();
      foursquare.setMatrix3(keyword2);
      foursquare.setMatrix4();
      foursquare.coord("st")
      var temp = foursquare.letterPair();
      //return temp;
    }



    //Determines coordinates based on the input 2 letters from the message
    foursquare.coord = function(pair)
    {
      for(let i=0; i < 5; ++i)
        {
          for(let j=0; j < 5; ++j)
          {
            if (myarr1[i][j] === pair[0])
            {
              x1=i;
              y1=j;
            }
            if (myarr3[i][j] === pair[1])
            {
              x3=i;
              y3=j;
            }
          }
        }
      }



    //Gets the coordinates from our non keyword based matrix
    foursquare.reverseCoord = function(pair)
    {
      for(let i=0; i < 5; ++i)
        {
          for(let j=0; j < 5; ++j)
          {
            if (myarr2[i][j] === pair[0])
            {
              x1=i;
              y1=j;
            }
            if (myarr4[i][j] === pair[1])
            {
              x3=i;
              y3=j;
            }
          }
        }
      }



    foursquare.reversePair = function(){
      let pair = [2];
      pair[0] = myarr1[x1][y3];
      pair[1] = myarr3[x3][y1];
      return pair;
    }


    //Returns the input search pair
    foursquare.letterPair = function(){
      let pair = [2];
      pair[0] = myarr2[x1][y3];
      pair[1] = myarr4[x3][y1];
      return pair;
    }


    //Returns our first matrix
    foursquare.first = function()
    {
      return myarr1;
    }
    //Returns our second matrix
    foursquare.second = function()
    {
      return myarr2;
    }
     //Returns our third matrix
    foursquare.third = function()
    {
      return myarr3;
    }
     //Returns our fourth matrix
    foursquare.fourth = function()
    {
      return myarr4;
    }


  //Filters through for i
  foursquare.filter = function(word){
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


  //Removes the keyword from the first matrix
  foursquare.newArray1 = function(word){
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




  //Creates our first Matrix
  foursquare.setMatrix1 = function(){
  //Sets our keyword value
  var keyword = foursquare.filter(keyword1);
  kword = keyword;
  var tempArr1 = foursquare.newArray1();
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
    myarr1.push(row);
  }
  //Returns the matrix
  return myarr1;
}

//Creates our second Matrix
foursquare.setMatrix2 = function(){
  var i = 0;
  for (let a=0; a < 5; ++a)
  {
    let row = []
    for (let b=0; b < 5; ++b)
    {
      row.push(alphabet[i]);
      ++i;
    }
    myarr2.push(row);
  }
  return myarr2;
}




  //Creates our third matrix
  foursquare.setMatrix3 = function(){
    //Sets our keyword value
  var keyword = foursquare.filter(keyword2);
  kword = keyword;
  var tempArr2 = foursquare.newArray1();
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
      else if (temp2 < tempArr2.length){
        col = tempArr2[temp2];
        ++temp2;
      }
      //Else we input our numbers 0-9
      else
      {
        col = tempArr2[temp3]
        ++temp3;
      }
      //Insert our value into our array
      row.push(col);
    }
    //Insert that array into an array of arrays
    myarr3.push(row);
  }
  //Returns the matrix
  return myarr3;
  }


  //Creates our fourth Matrix
  foursquare.setMatrix4 = function(){
  var i = 0;
  for (let a=0; a < 5; ++a)
  {
    let row = []
    for (let b=0; b < 5; ++b)
    {
      row.push(alphabet[i]);
      ++i;
    }
    myarr4.push(row);
  }
  return myarr4;
}


    foursquare.main = function (args) {
    };
    return foursquare;
}());

foursquare["__class"] = "foursquare";
foursquare.main(null);