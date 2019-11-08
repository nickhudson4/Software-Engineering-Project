//hill.js

export var hill = (function () {
    function hill() {
    }



    //Generate a keysquare matrix
    hill.generateMatrix = function(size)
    {
      //Generates rows into a temp matrix
      var tempArray = [];
      for (var i = 0; i < size; i++){
        tempArray[i] = [];
      }
      //Returns our n by n matrix
      return tempArray;
    }

    //Generate a keysquare matrix
    hill.multiplier = function(size, inputVector, inputMatrix)
    {
      var outputVector = [];

      //Matrix Multiplication
      var tempArray = [];
      for (var i = 0; i < size; i++){

        for (var j = 0; j < size; j++){
          tempArray[j] = inputVector[j][0] * inputMatrix[i][j];
        }

        var sum = 0;
        for (var j = 0; j < size; j++){
          sum = sum + tempArray[j];
        }

        outputVector[i] = sum % 26;

      }
      //Returns our n by n matrix
      return outputVector;
    }



    //Searches through the array for the matching letter
    hill.alphabetSearch = function(letter, array){
      var truth = 0;
      var location;
      //Searches through the array for desired letter location
      for (let i = 0; i < 26 && truth == 0; ++i){
          if (array[i] == letter){
            ++truth;
            location = i;
          }
      }
      //Returns whatever location it is in the array as an integer
      return location;
    }


    //Takes in message, the alphabet as an array, and the ciphertext as an array
    hill.encryptMessage = function(vector, alphabetArray){
      let encryption = [];
      //Encrypts every letter 1 by 1
      for (let i = 0; i < vector.length; ++i){
        //Stores the encrypted character into an array
        encryption[i] = alphabetArray[vector[i]];
      }
      //Returns the entire encrypted message
      return encryption;
    }



    //Generate a keysquare matrix
    hill.setMatrix = function(size, numbers, matrix)
    {
      var n = 0;

      for(let i = 0; i < size; ++i){
        for (let j = 0; j < size; ++j){
          matrix[j][i] = numbers[n];
          ++n;
        }
      }
      //Returns our n by n matrix
      return matrix;
    }




    hill.generateVector = function(letters, size){
      //Generates a vector with the amount of rows equal to the size of key matrix
      var vector = hill.generateMatrix(size);

      for (let i = 0; i < size; ++i){
        vector[i][0] = hill.alphabetSearch(letters[i], "abcdefghijklmnopqrstuvwxyz");
      }

      return vector;
    }



    hill.numberParser = function(number){
      var temp = number.split(',').map(Number);
      return temp;
    }



    //Evens out an odd encryption message by adding x to the end
    hill.messageEqualizer = function(message){
      if(message.length % 3 != 0)
      {
        message = message + 'x';
      }
      return message;
    }



    hill.encrypt = function(message, number, size){
      var array = hill.numberParser(number);
      var newMessage = hill.messageEqualizer(message);
      var matrix = hill.generateMatrix(size);
      var keyMatrix = hill.setMatrix(size, array, matrix);
      var vector = hill.generateVector("bco", 3);
      var outputVector = hill.multiplier(size, vector, keyMatrix);
      var translatedVector = hill.encryptMessage(outputVector,"abcdefghijklmnopqrstuvwxyz");

      return translatedVector;
    }




    hill.main = function (args) {
    };
    return hill;
}());

hill["__class"] = "hill";
hill.main(null);
