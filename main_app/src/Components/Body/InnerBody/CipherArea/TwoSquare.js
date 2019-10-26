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
    var keyword1 = 'math';
    //The keyword in our second matrix
    var keyword2 = 'cid';
    var kword;

    //Returns the keyword of our first matrix
    twosquare.keyword1f = function(){
    return keyword1;
    }
    //Returns the keyword of our second matrix
    twosquare.keyword2f = function(){
    return keyword2;
    }

    //Returns word put in for encryption
    var encryptionWord;
    twosquare.eWord = function(){
      return encryptionWord;
    }



  //Encrypts a word
  twosquare.encrypt = function(word){
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
        twosquare.coord(searchPair);
        var temp = twosquare.letterPair();
        codedArray.push(temp);
    }

      return codedArray;
  }

    //Beings our 2 square program
    twosquare.start = function(){
      twosquare.setMatrix1(keyword1);
      twosquare.setMatrix2(keyword2);
      twosquare.coord("cy")
      var temp = twosquare.letterPair();
      //return temp;
    }



    //Determines coordinates based on the input 2 letters from the message
    twosquare.coord = function(pair)
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
      pair[0] = myarr1[x2][y1];
      pair[1] = myarr2[x1][y2];
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


  //Filters through for i
  twosquare.filter = function(word){
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


  //Returns the first and second array without the keyword letters
  twosquare.newArray1 = function(word){
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




  //Creates the first matrix
  twosquare.setMatrix1 = function(){
  //Sets our keyword value
  var keyword = twosquare.filter(keyword1);
  kword = keyword;
  var tempArr1 = twosquare.newArray1();
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


  //Generates second matrix
  twosquare.setMatrix2 = function(){
    //Sets our keyword value
  var keyword = twosquare.filter(keyword2);
  kword = keyword;
  var tempArr2 = twosquare.newArray1();
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
    myarr2.push(row);
  }
  //Returns the matrix
  return myarr2;
  }


    twosquare.main = function (args) {
    };
    return twosquare;
}());

twosquare["__class"] = "twosquare";
twosquare.main(null);