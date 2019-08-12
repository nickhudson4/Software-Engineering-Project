//ADFGVX.js file (Not Completed)

//Declaring our class
export var adfgvx = (function () {

    function adfgvx() {
    }
    //We declare an array which is just the alphabet    
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
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


    //The function for searching through our matrix
    adfgvx.search = function(search){
      //Whatever is passed into this function is now our "target"
      target = search;
      //We create our 6x6 matrix, with the keyword "hello"
      adfgvx.createThings("hello");

      //(Both need error checking)

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

  //Returns the keyword used in the matrix
  adfgvx.keyword = function(){
  return kword;
  }
  //Returns the 2 target letters entered to search
  adfgvx.searchValue = function(){
  return target;
  }

  adfgvx.createThings = function(keyword){
  //Sets our keyword value
  kword = keyword;
  var temp1 = 0;
  var temp2 = 0;
  var temp3 = 0;
  var truth = 0;

  //Outer loop
  for(let a=0; a <= 6; a++){
    //Declares an array, named row
    let row = []
    //Inner loop
    for(let b=0; b <= 6; b++){
      var col;
      truth = 0;
      //Our first if statement inputs our keyword into our matrix
      if (temp1 < keyword.length)
      {
        truth = 0;
        col = keyword[temp1];
        for(let i=0; i < temp1 && truth === 0; ++i)
        {
         //Omits the letter i and checks for any duplicate letters in our keyword
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
      //Second if statement inputs our alphabet into our matrix
      else if (temp2 <= alphabet.length)
      {
        col = alphabet[temp2];
        truth = 0;
        for(let i=0; i < keyword.length && truth === 0; ++i){
          //We check to see if any of the letters match any that were input by the keyword.
          if (alphabet[temp2] === keyword[i] && temp2 < 26)
          {
            ++temp2;
            col = alphabet[temp2];
            truth = 1;
          }
        }
        ++temp2;
      }
      //Else we input our numbers 0-9
      else
      {
        col = numbers[temp3]
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