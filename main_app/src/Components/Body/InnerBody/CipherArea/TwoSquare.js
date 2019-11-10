//Encryption works
//Need comments
//twosquare.js
//Look at the same column condition

//Reformat to not store values, only executable functions except for some
export var twosquare = (function () {

    function twosquare() {
    }

    //Our encryption function for twosquare
    twosquare.encrypt = function(message, keysquare1, keysquare2){
      //Returns our keysquare once we filter out j
      var newKeysquare1 = twosquare.jFilter(keysquare1);
      var newKeysquare2 = twosquare.jFilter(keysquare2);
      var encryptionMessage = twosquare.messageEqualizer(message);
      //Error checking
      if (newKeysquare1.length == 35){
        return "There was a problem with the Keysquare, cannot Encrypt"
      }
      if (newKeysquare2.length == 35){
        return "There was a problem with the Keysquare2, cannot Encrypt"
      }
      else {
        //Checks for duplicate letters in our keysquare
        var truth1 = twosquare.duplicateChecker(newKeysquare1);
        var truth2 = twosquare.duplicateChecker(newKeysquare2);
        //Error Checking
        if (truth1 == 1){
          return "There was a duplicate letter somewhere in your keysquare1"
        }
        if (truth2 == 1){
          return "There was a duplicate letter somewhere in your keysquare2"
        }
        else {
          //We replace all j's with i's in our encryption message
          var newMessage = twosquare.iAdder(encryptionMessage);
          //We remove any duplicate letters by replacing them with x, in our encryption message
          newMessage = twosquare.duplicateRemover(newMessage);
          //We generate our 5x5 matrix used for encryption
          var matrix1 = twosquare.generateMatrix(newKeysquare1);
          //We generate our 5x5 matrix used for encryption
          var matrix2 = twosquare.generateMatrix(newKeysquare2);
          //We recieve back the full set of coordinates for ever letter cooresponding to our matricies
          var fullCoordinates = twosquare.coordinates(newMessage, matrix1, matrix2);
          //Errors start here
          //We recieve the diagonal letter in our matrix for every letter in our encryption word
          var diagonals = twosquare.getDiagonals(fullCoordinates, matrix1, matrix2);

          return diagonals;
        }
      }
  }

  //Evens out an odd encryption message by adding x to the end
  twosquare.messageEqualizer = function(message){
    if(message.length % 2 != 0)
    {
      message = message + 'x';
    }
    return message;
  }


    //Takes in the full set of coordinates for our message, and the matrix
    twosquare.getDiagonals = function(fullCoordinates, topMatrix, bottomMatrix){
        var coordinates = [];
        var fullCounter = [];
        var i = 0;
        var n = 0;

        //Runs for the length of our coordinate list
        for (; n < fullCoordinates.length;){
          //Start by setting our 2 xy values into a list
          coordinates[0] = fullCoordinates[n];
          ++n;
          coordinates[1] = fullCoordinates[n];
          ++n;
          coordinates[2] = fullCoordinates[n];
          ++n;
          coordinates[3] = fullCoordinates[n];
          ++n;

          //Sends that list to a diagonal function
          //Returns the 2 letters at the diagonal points
          var revLets = twosquare.diagonal(coordinates, topMatrix, bottomMatrix);
          //Stores the 2 letters into a full array
          fullCounter[i] = revLets[0];
          ++i;
          fullCounter[i] = revLets[1];
          ++i;
        }

        return fullCounter;
    }


  //Returns whatever character is at the diagonal of the 2 xy points given
  //Takes in 2 xy coordinates and our matrix
  twosquare.diagonal = function(coordinates, topMatrix, bottomMatrix){
    var x1 = coordinates[0];
    var y1 = coordinates[1];
    var x2 = coordinates[2];
    var y2 = coordinates[3];
    var letters = [];
//    if (y1 != y2) {
//      letters[0] = bottomMatrix[y2][x1];
//      letters[1] = topMatrix[y1][x2];
//    }
//    else {
      letters[1] = bottomMatrix[y2][x1];
      letters[0] = topMatrix[y1][x2];
  //  }

    return letters;
  }


  //Rreturns a full list of coordinates for every letter in our encryption message
  twosquare.coordinates = function(message, topMatrix, bottomMatrix){
    var fullCoordinates = [];
    var coordinates = [];
    var n = 0;

    //Gets the x and y coordinate for every letter in our message
    for (let i = 0; i < message.length; ++i){
      //Search function which returns the x y coordinates for a letter
      if (i % 2 == 0){
        coordinates = twosquare.coordinateSearch(message[i], topMatrix);
      }
      //Odd letters in the message has their coordinates searched in  the bottom matrix
      else {
        coordinates = twosquare.coordinateSearch(message[i], bottomMatrix);
      }
      fullCoordinates[n] = coordinates[0];
      ++n;
      fullCoordinates[n] = coordinates[1];
      ++n;
    }
    //Returns a full list of coordinates
    return fullCoordinates;
  }




    //Takes in plaintext word and keysquare
    twosquare.coordinateSearch = function(letter, matrix){
      let coordinates = [];
      var truth = 0;

      //Search funchtion which stores x and y into an array
      for (let i = 0; i < 5 && truth == 0; ++i){
        for (let j = 0; j < 5 && truth == 0; ++j){
          if (matrix[i][j] == letter){
            coordinates[0] = j;
            coordinates[1] = i;
            truth = 1;
          }
        }
      }
      return coordinates;
  }




    //Evens out an odd encryption message by adding x to the end
    twosquare.messageEqualizer = function(message){
      if(message.length % 2 != 0)
      {
        message = message + 'x';
      }
      return message;
    }


    //Replaces any duplicates that are next to each other with x
    twosquare.duplicateRemover = function (word){

      for (let i = 0; i < word.length-1; ++i){
        if (word[i] == word[i+1] && word[i+1] != 'x'){
            word[i+1] = 'x';
        }
      }
      return word;
    }


    //Checks for duplicate letters in our keysquare and returns 1 if it finds one
    twosquare.duplicateChecker = function (keysquare){
      var truth = 0;

      for (let i = 0; i < keysquare.length && truth == 0; ++i){
        for (let j = i+1; j < keysquare.length && truth == 0; ++j){
          if (keysquare[i] == keysquare[j]){
              truth = 1;
          }
        }
      }
      return truth;
    }



    //This function replaces i with j in any encryption message
    twosquare.iAdder = function (input){
      var message = input.toLowerCase();
      let buff = [];
      for (let i = 0; i < message.length; ++i){
        if (message[i] == 'j'){
          buff[i] = 'i';
        }
        else{
          buff[i] = message[i];
        }
      }

      return buff;
    }



    //This function removes j from a keysquare
    twosquare.jRemover = function(square){
      var keysquare = square.toLowerCase();
      let buff = []
      var truth = 0;

      //This part checks the keysquare for j
      for (let i = 0; i < keysquare.length && truth != 2; ++i){
        if (keysquare[i] == 'j'){
              truth = 1;
        }
        if (truth == 0){
            buff[i] = keysquare[i];
        }
        if (truth == 1){
            buff[i] = keysquare[i+1];
            if (i == 24){
              truth = 2;
            }
        }
      }
      return buff;
    }

    //Filters for length and removes j
    twosquare.jFilter = function(keysquare){
      var newKeysquare = twosquare.jRemover(keysquare);

      if (newKeysquare.length != 25){
        return "Invalid Amount of Keysquare Letters";
      }
      else{
        return newKeysquare;
      }
    }



  //Parses through the alphabet array, and removes all letters that are in our keyword
  twosquare.keywordRemover = function(keyword){
      var kword = keyword;
      let array = [];
      var truth;

    for (let t=0; t < kword.length; ++t){
      truth = 0;
      for (let j=0; j < kword.length; ++j){
          if (kword[t] === kword[j]){
            truth = 1;
          }
      }
      if (truth != 1){
        array.push(kword[t]);
      }
    }
    //Returns an alphabet array with the keyword removed
    return array;
  }



  //Generate a keysquare matrix
  twosquare.generateMatrix = function(keysquare)
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


  //Generate a keysquare matrix
  twosquare.generateMatrix2 = function(keysquare)
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




      twosquare.main = function (args) {
      };
      return twosquare;
  }());

  twosquare["__class"] = "twosquare";
  twosquare.main(null);
