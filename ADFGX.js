//ADFGX.js file (Incomplete)

  //Declartion of class
  export var adfgx = (function () {

    function adfgx() {
    }
    
    //Alphabet array we use in our matrix, i is omitted
    var alphabet = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Our 5x5 matrix
    let myarr = [];
    //Our x variable in our matrix
    var x;
    //Our y variable in our matrix
    var y;
    //The word that we are trying to search for
    var target;
    //Our keyword
    var kword;

    //Searches through our matrix using coordinates
    adfgx.search = function(search)
    {
      //Sets our 2 letter search input from user
      target = search;
      //Creates a matrix with keyword "hello"
      adfgx.createThings("hello");
      //Checks for the x coordinate of the user input
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
      else if (search[1] === 'X')
      {
        x = 4;
      }
      //Checks for the y coordinate of the user input
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
      else if (search[0] === 'X')
      {
        y = 4;
      }
    //Returns the character at the desired location
    return(myarr[x][y])
}

//Returns the keyword used in the matrix
adfgx.keyword = function(){
return kword;
}

//Returns the input search searchValue
adfgx.searchValue = function(){
return target;
}

//Generates our 5x5 matrix
adfgx.createThings = function(keyword){
//Sets our keyword for global use
kword = keyword;
var temp1 = 0;
var temp2 = 0;
var truth = 0;
//Outer loop
for(let a=0; a <= 5; a++){
  //Declares an array called row
  let row = []
  //Inner loop
  for(let b=0; b <= 5; b++){
      var col;
      truth = 0;
      //Sets the keyword in our matrix
      if (temp1 < keyword.length)
      {
        col = keyword[temp1];
        truth = 0;
        for(let i=0; i < temp1 && truth === 0; ++i)
        {
          //Checks for any duplicates
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
      //Sets the alphabet in our matrix
      else
      {
        col = alphabet[temp2];
        truth = 0;
        for(let i=0; i < keyword.length && truth === 0; ++i){
          //Checks for duplicates between the alphabet and the keyword
          if (alphabet[temp2] === keyword[i] && temp2 < 25)
          {
            ++temp2;
            col = alphabet[temp2];
            truth = 1;
          }
        }
        ++temp2;
      }
      //adds the desired value into the array
      row.push(col);
    }
    //adds the array into an array of arrays/matrix
    myarr.push(row);
  }
  //Returns the matrix
  return myarr;
}


  //Not used, example on how to generate a matrix
  adfgx.generateMatrix = function(rowCount, colCount){
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


    adfgx.main = function (args) {
    };
    return adfgx;
}());

adfgx["__class"] = "adfgx";
adfgx.main(null);