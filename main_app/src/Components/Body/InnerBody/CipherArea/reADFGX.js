//reADFGVX.js file (Not Completed)
//Encryption is done
//Need to add filter function for I for plaintext
//Need to make sure to convert to to to lower case
//Need to add a length checker for plaintext

//Declaring our class
export var readfgx = (function () {
    function readfgx() {
    }

    //Generate a keysquare matrix
    readfgx.generateMatrix = function(keysquare)
    {
      //Generates 5 rows into a temp matrix
      var tempArray = [];
      for (var i = 0; i < 5; i++){
        tempArray[i] = [];
      }
      //Fills our 5x5 matrix with our keysquare
      var i = 0;
      for (let a = 0; a < 5; a++)
      {
        for (let b = 0; b < 5; b++)
        {
            tempArray[a][b] = keysquare[i];
            ++i;
        }
      }
      //Returns a 5x5 matrix formed by our keysquare
      return tempArray;
    }


    //Correctly Sorts and returns new column locations
    //The input is the keyword and our Columnar sorted matrix
    readfgx.columnar = function(keyword, tempArray){
      //Start of our Columnar Process
      //turns our keyword to lowercase
      var lower = keyword.toLowerCase();
      //ASCII number array
      let asciikeyword = [];
      //This is our target return with the small number ascii array
      for (let i = 0; i < keyword.length; ++i){
        asciikeyword[i] = keyword.charCodeAt(i);
      }
      //Selection Sort using the keyword, but as ASCII Values
      //We do all the same moves the rows in our Columnar Matrix
      for (let i = 0; i <= keyword.length; ++i){
        for (let j = i; j <= keyword.length; ++j){
          var temp;
          if (asciikeyword[i] > asciikeyword[j])
          {
            temp = asciikeyword[j];
            asciikeyword[j] = asciikeyword[i];
            asciikeyword[i] = temp;
            var temp2 = tempArray[0][j];
            var temp4 = tempArray[1][j];
            tempArray[0][j] = tempArray[0][i];
            tempArray[1][j] = tempArray[1][i];
            tempArray[0][i] = temp2;
            tempArray[1][i] = temp4;
          }
        }
      }
        //Returns a matrix after being run through columnar
        return tempArray;
    }


    //Takes in plaintext word and keysquare
    readfgx.encryptionWordCoordinates = function(word, keysquare){
      //We create a 5x5 matrix using our keysquare
      var matrix = readfgx.generateMatrix(keysquare);
      var truth = 0;
      let pairs = [];
      var counter = 0;
      var temp;
      //Runs for the length of our plaintext input
      //We're getting the x and y numbered coordinates of each letter in our message
      for (let a = 0; a < word.length; ++a){
        var target = word[a];
        truth = 0;
        temp = a;
        //Current j then i combo works j is the y and i is the x
        for(let i = 0; i < 5 && truth == 0; ++i)
        {
          for(let j = 0; j < 5 && truth == 0; ++j)
          {
            if (target == matrix[j][i])
            {
              pairs[counter] = j;
              pairs[counter + 1] = i;
              counter = counter + 2;
              truth = 1;
            }
        }
      }
    }
      //Returns the numbered x and y locations of each letter in the message coressponding to our ADFGX matrix
      return pairs;
  }


    //Converts xy coordinates 0-4 into ADFGX
    //Takes in either the x or y coordinate, doesn't matter, it's a number 0-4
    readfgx.translate = function(targetLetter){
      var temp;

      if (targetLetter == 0){
        temp = 'A';
      }
      else if (targetLetter == 1){
        temp = 'D';
      }
      else if (targetLetter == 2){
        temp = 'F';
      }
      else if (targetLetter == 3){
        temp = 'G';
      }
      else if (targetLetter == 4){
        temp = 'X';
      }

      return temp;
    }


    //Loops through our translate Function
    //Recieves an array of numbers which coorespond to xy coordinates
    readfgx.translationLoop = function(numberedArray){
      let translated = []
      for (let i = 0; i < numberedArray.length; ++i){
        translated[i] = readfgx.translate(numberedArray[i]);
      }
      //Returns an array of letters ADFGX corresponding to the input numbers
      return translated;
    }


    //This Generates a matrix and processes it through columnar
    readfgx.generateEncryptionMatrix = function(keyword, letterArray, length){
      var tempArray = [];
      //The amount of Rows for our columnar matrix is the ADFGX coordinate length / our keyword's length
      var rows = length / keyword.length;
      //Creating another matrix
      for (var i = 0; i < rows; i++){
        tempArray[i] = [];
      }
      var i = 0;
      //Here we insert our coordinates into a columnar matrix and put - in the blank spots
      for (let a = 0; a < rows; a++){
        for (let b = 0; b < keyword.length; b++){
          if (i < letterArray.length){
            tempArray[a][b] = letterArray[i];
          }
          //Denotes blanks
          else {
            tempArray[a][b] = '-';
          }
            ++i;
        }
      }
      //We run our translated coordinates thorugh columnar
      tempArray = readfgx.columnar(keyword, tempArray);
      //Returns our entire encryped matrix after Columnar
      return tempArray;
    }


    //These are the final pairs that the program spits out from running Columnar
    //Takes the sorted Columnar matrix, it's x length, and y length
    readfgx.encryptionPairs = function(tempArray, xLength, yLength){
      let newPairings = [];
      var n = 0;
      //Runs through the Columnar matrix, and puts those values into one readable array of encrypted pairs
      for (let i = 0; i < xLength; ++i){
        for (let j = 0; j < yLength; ++j){
            newPairings[n] = tempArray[j][i];
            ++n;
        }
      }
      //Returns final list of encrypted pairs
      return newPairings;
    }


    //Our encryption function which runs all other functions
    readfgx.encryption = function(word, keysquare, keyword){
      var temparray = readfgx.encryptionWordCoordinates(word, keysquare);
      var encryptedWord1 = readfgx.translationLoop(temparray);
      var temp = readfgx.generateEncryptionMatrix(keyword, encryptedWord1, word.length*2);
      var temp2 = readfgx.encryptionPairs(temp, keyword.length, ((word.length * 2)/(keyword.length)));
      return temp2;
    }


    readfgx.main = function (args) {
    };
    return readfgx;
}());

readfgx["__class"] = "readfgx";
readfgx.main(null);
