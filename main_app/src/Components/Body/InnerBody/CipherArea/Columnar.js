
export var columnar = (function () {

    function columnar() {
    }

    columnar.encrypt = function(message, keyword){
      var newMessage = message.toLowerCase();
      var newKeyword = keyword.toLowerCase();
      var rows = newMessage.length / newKeyword.length;

      var matrix = columnar.generateEncryptionMatrix(newKeyword, newMessage, newMessage.length);
      var encryptedMatrix = columnar.columnarFunction(newKeyword, matrix, rows);
      var finalPairs = columnar.encryptionPairs(encryptedMatrix, keyword.length, rows);

      return finalPairs;
    }


    columnar.decrypt = function(message, keyword){
      var rows = message.length / keyword.length;
      var matrix = columnar.generateDecryptionMatrix(keyword, message, message.length);
      var output = columnar.decryptionColumnar(keyword, matrix, rows);

      return output;
    }


    //These are the final pairs that the program spits out from running Columnar
    //Takes the sorted Columnar matrix, it's x length, and y length
    columnar.encryptionPairs = function(tempArray, xLength, yLength){
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




    //Performs columnar operation again using keyword to know how to set up our matrix
    columnar.decryptionColumnar = function(keyword, tempArray, yValue){
      //Start of our Columnar Process
      //turns our keyword to lowercase
      //var lower = keyword.toLowerCase();
      //ASCII number array
      let asciikeyword = [];
      let numberArray = [];
      //This is our target return with the small number ascii array
      for (let i = 0; i < keyword.length; ++i){
        asciikeyword[i] = keyword.charCodeAt(i);
        numberArray[i] = i;
      }
      //Selection Sort using the keyword, but as ASCII Values
      //We do all the same moves the rows in our Columnar Matrix
      for (let a = 0; a <= keyword.length; ++a){
        for (let b = a; b <= keyword.length; ++b){
          var temp;
          var temp2;
          if (asciikeyword[a] > asciikeyword[b])
          {
            temp = asciikeyword[b];
            asciikeyword[b] = asciikeyword[a];
            asciikeyword[a] = temp;

            temp2 = numberArray[a];
            numberArray[a] = numberArray[b];
            numberArray[b] = temp2;
          }
        }
      }
        //Returns the properly set up matrix, before it was encrypted
        var output = columnar.sortFunction(numberArray, tempArray, yValue);
        //Returns the preEncryption columnar matrix
        return output;
    }




    //This is a sort function which sorts our input decryption matrix into correct form
    columnar.sortFunction = function(numberArray, characters, yValue){
      var numbers = numberArray;
      var tempArray = characters;

      for (let i = 0; i <= numberArray.length; ++i){
        for (let j = i; j <= numberArray.length; ++j){
          var temp;
          if (numbers[i] > numbers[j])
          {
            temp = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = temp;

            for (let a = 0; a < yValue; ++a){
              var temp2 = tempArray[a][j];
              tempArray[a][j] = tempArray[a][i];
              tempArray[a][i] = temp2;
            }

          }
        }
      }
      //Sorted Columnar array is returned
      //Example, the matrix we would have for german and not aegmnr
      return tempArray;
    }



    //This Generates a matrix and processes it through columnar
    columnar.generateEncryptionMatrix = function(keyword, letterArray, length){
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
            tempArray[a][b] = 'x';
          }
            ++i;
        }
      }
      //We run our translated coordinates thorugh columnar
      //tempArray = columnar.columnarFunction(keyword, tempArray, rows);
      //Returns our entire encryped matrix after Columnar
      return tempArray;
    }


    //This function generates our post columnar matrix
    columnar.generateDecryptionMatrix = function(keyword, letterArray, length){
      var tempArray = [];
      //The amount of Rows for our columnar matrix is the ADFGX coordinate length / our keyword's length
      var rows = length / keyword.length;
      //Creating another matrix
      for (var i = 0; i < rows; i++){
        tempArray[i] = [];
      }
      var i = 0;
      //Here we insert our coordinates into a columnar matrix and put - in the blank spots
      for (let a = 0; a < keyword.length; a++){
        for (let b = 0; b < rows; b++){
          if (i < letterArray.length){
            tempArray[b][a] = letterArray[i];
          }
          //Denotes blanks
          else {
            tempArray[b][a] = 'x';
          }
            ++i;
        }
      }
      //Returns our what post Columnar matrix looked like
      return tempArray;
    }




    //Correctly Sorts and returns new column locations
    //The input is the keyword and our Columnar sorted matrix
    columnar.columnarFunction = function(keyword, tempArray, yValue){
      //ASCII number array
      let asciikeyword = [];
      //This is our target return with the small number ascii array
      for (let i = 0; i < keyword.length; ++i){
        temp = keyword[i];
        asciikeyword[i] = temp.charCodeAt(0);
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

            for (let a = 0; a < yValue; ++a){
              var temp2 = tempArray[a][j];
              tempArray[a][j] = tempArray[a][i];
              tempArray[a][i] = temp2;
            }

          }
        }
      }
        //Returns a matrix after being run through columnar
        return tempArray;
    }



    columnar.main = function (args) {
    };
    return columnar;
}());

columnar["__class"] = "columnar";
columnar.main(null);
