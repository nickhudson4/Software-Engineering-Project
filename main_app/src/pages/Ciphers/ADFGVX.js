//ADFGVX.js file (Not Completed)

//Declaring our class
export var adfgvx = (function () {

    function adfgvx() {
    }
    //We declare an array which is just the alphabet    
    var alphabet = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Declare an array of numbers 1-9
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    //This is our 2d matrix
    let myarr = [];
    //The x coordinate in the matrix
    var x;
    //The y coordinate in the matrix
    var y;
    //The 2 letters that the user puts in to search the matrix
    //Must be caps
    var target;
    //Our keyword used
    var kword;
    //Returns the word sent in for encryption
    var encryptionWord;
    adfgvx.eWord = function(){
      return encryptionWord;
    }
    //Returns the word sent in for decryption
    var decryptionWord;
    adfgvx.dWord = function(){
      return decryptionWord;
    }

    let inputPair = [2];
    let outputPair = [];
    let searchPair = [2];
    let codedArray = [];
    let decodedArray = [];
    var arraySize = 0;
    var arraySize2 = 0;


  //Returns the keyword used in the matrix
  adfgvx.keyword = function(){
    return kword;
  }

  //Returns the 2 target letters entered to search
  adfgvx.searchValue = function(){
    return target;
  }

  //Filters through for i
  adfgvx.filter = function(word){
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

  //Function for putting together the array of letters for the decoded word
  adfgvx.decryptMessage = function (){
      decodedArray[arraySize2] = adfgvx.search(inputPair);
      ++arraySize2;
  }
  //Function for decrypting a word
  adfgvx.decrypt = function(word){
    decryptionWord = word;
    for(let i = 0; i < word.length; i = i + 2){
      inputPair[0] = word[i];
      inputPair[1] = word[i+1];
      adfgvx.decryptMessage();
    }
    return decodedArray;
  }

    //Function for putting together the array of letters for an encoded word
    adfgvx.encryptMessage = function(){
    var truth = 0;

    for(let i = 0; i < 6; ++i)
    {
      for(let j = 0; j < 6; ++j)
      {
        if (searchPair[0] === myarr[j][i] && truth < 1)
        {
            x = i;
            y = j;
            adfgvx.pushMessage();
            ++truth;
        }
      }
    }
  }

  //Function for encrypting a word
  adfgvx.encrypt = function(word){
  if(word.length % 2 != 0)
  {
    word = word + 'x';
  }
  encryptionWord = word;
  for(let i = 0; i < word.length; ++i)
  {
      searchPair[0] = word[i];
      adfgvx.encryptMessage();
  }

    return codedArray;
  }


  //Starts the process by creating our matricies
  adfgvx.start = function(keyword, terms){
    adfgvx.createThings(keyword);
    var temp = adfgvx.search(terms);
   // return temp;
  }



    //The function for searching through our matrix
    adfgvx.search = function(search){
      //Whatever is passed into this function is now our "target"
      target = search;

      //We filter through the input and set our x value
      if (search[1] === 'A')
      {
        x = 0;
      }
      else if (search[1] === 'D')
      {
        x = 1;
      }
      else if (search[1] === 'F')
      {
        x = 2;
      }
      else if (search[1] === 'G')
      {
        x = 3;
      }
      else if (search[1] === 'V')
      {
        x = 4;
      }
      else if (search[1] === 'X')
      {
        x = 5;
      }

      //We filter through the input and set our y value
      if (search[0] === 'A')
      {
        y = 0;
      }
      else if (search[0] === 'D')
      {
        y = 1;
      }
      else if (search[0] === 'F')
      {
        y = 2;
      }
      else if (search[0] === 'G')
      {
        y = 3;
      }
      else if (search[0] === 'V')
      {
        y = 4;
      }
      else if (search[0] === 'X')
      {
        y = 5;
      }

    //We return the letter which cooresponds to our search coordinates
    return(myarr[x][y])
  }

  //Removes all letters that are in our keyword from the alphabet
  adfgvx.newArray1 = function(){
    let array = [];
    var truth = 0;

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

  //Removes all numbers that are in our keyword from the number list
  adfgvx.newArray2 = function(){
    let array = [];
    var truth = 0;

  for (let t=0; t < numbers.length; ++t){
    truth = 0;
    for (let j=0; j < kword.length; ++j){
        if (numbers[t] === kword[j]){
          truth = 1;
        }
    }
    
    if (truth != 1){
      array.push(numbers[t]);
    }
  }
  return array;
}


  //Creates our matrix
  adfgvx.createThings = function(keyword){
  //Sets our keyword value
  kword = adfgvx.filter(keyword);
  var tempArr1 = adfgvx.newArray1();
  var tempArr2 = adfgvx.newArray2();
  var temp1 = 0;
  var temp2 = 0;
  var temp3 = 0;
  var truth = 0;

  //Outer loop
  for(let a=0; a < 6; a++){
    //Declares an array, named row
    let row = []
    //Inner loop
    for(let b=0; b < 6; b++){
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
        col = tempArr2[temp3]
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
  //Searches for the output pair for each letter
  adfgvx.pushMessage = function(){
      if (x === 0)
      {
        outputPair[1] = 'A';
      }
      else if (x === 1)
      {
        outputPair[1] = 'D';
      }
      else if (x === 2)
      {
        outputPair[1] = 'F';
      }
      else if (x === 3)
      {
        outputPair[1] = 'G';
      }
      else if (x === 4)
      {
        outputPair[1] = 'V';
      }
      else if (x === 5)
      {
        outputPair[1] = 'X';
      }

      if (y === 0)
      {
        outputPair[0] = 'A';
      }
      else if (y === 1)
      {
        outputPair[0] = 'D';
      }
      else if (y === 2)
      {
        outputPair[0] = 'F';
      }
      else if (y === 3)
      {
        outputPair[0] = 'G';
      }
      else if (y === 4)
      {
        outputPair[0] = 'V';
      }
      else if (y === 5)
      {
        outputPair[0] = 'X';
      }


    codedArray[arraySize] = outputPair[0];
    ++arraySize;
    codedArray[arraySize] = outputPair[1];
    ++arraySize;
    codedArray[arraySize] = ' ';
    ++arraySize;
  }


  //Not used, just an example of how to create a matrix
  adfgvx.generateMatrix = function(rowCount, colCount){
  let myarr = []
  for(let i=0; i < rowCount; i++){
    let row = []
    let col = 1;
    for(let j=0; j < colCount; j++){
      row.push(col);
    }
    myarr.push(row);
  }
  return myarr;
}

    adfgvx.main = function (args) {
    };
    return adfgvx;    
}());

adfgvx["__class"] = "adfgvx";
adfgvx.main(null);