//Encryption works
//Need comments
//PLayfair.js

//Reformat to not store values, only executable functions except for some
export var playfair = (function () {

    function playfair() {
    }

    //Our encryption function for playfair
    playfair.encrypt = function(encryptionMessage, keysquare){
      //Returns our keysquare once we filter out j
      var filterCheck = playfair.jFilter(keysquare);
      //Error checking
      if (filterCheck.length == 35){
        return "There was a problem with the Keysquare, cannot Encrypt"
      }
      else {
        //Checks for duplicate letters in our keysquare
        var truth = playfair.duplicateChecker(filterCheck);
        //Error Checking
        if (truth == 1){
          return "There was a duplicate letter somewhere in your keysquare"
        }
        else {
          //We replace all j's with i's in our encryption message
          var newMessage = playfair.iAdder(encryptionMessage);
          //We remove any duplicate letters by replacing them with x, in our encryption message
          newMessage = playfair.duplicateRemover(newMessage);
          //We generate our 5x5 matrix used for encryption
          var matrix = playfair.generateMatrix(keysquare);
          //We recieve back the full set of coordinates for ever letter cooresponding to our matricies
          var fullCoordinates = playfair.coordinates(newMessage, matrix);
          //We recieve the diagonal letter in our matrix for every letter in our encryption word
          var diagonals = playfair.getDiagonals(fullCoordinates, matrix);
          return diagonals;
        }
      }
  }

    playfair.keysquareChecker = function(keysquare){
      //Check for j
      //Check for duplicates
      //Check for all Letters, no puntuation
      //Check for 25 characters

    }


    //Takes in the full set of coordinates for our message, and the matrix
    playfair.getDiagonals = function(fullCoordinates, matrix){
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
          var revLets = playfair.diagonal(coordinates, matrix);
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
  playfair.diagonal = function(coordinates, matrix){
    var x1 = coordinates[0];
    var y1 = coordinates[1];
    var x2 = coordinates[2];
    var y2 = coordinates[3];

    var letters = [];
    letters[1] = matrix[y2][x1];
    letters[0] = matrix[y1][x2];

    return letters;
  }


  //Rreturns a full list of coordinates for every letter in our encryption message
  playfair.coordinates = function(message, matrix){
    var fullCoordinates = [];
    var n = 0;

    //Gets the x and y coordinate for every letter in our message
    for (let i = 0; i < message.length; ++i){
      //Search function which returns the x y coordinates for a letter
      var coordinates = playfair.coordinateSearch(message[i], matrix);
      fullCoordinates[n] = coordinates[0];
      ++n;
      fullCoordinates[n] = coordinates[1];
      ++n;
    }
    //Returns a full list of coordinates
    return fullCoordinates;
  }




    //Takes in plaintext word and keysquare
    playfair.coordinateSearch = function(letter, matrix){
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
    playfair.messageEqualizer = function(message){
      if(message.length % 2 != 0)
      {
        message = message + 'x';
      }
      return message;
    }

    //Replaces any duplicates that are next to each other with x
    playfair.duplicateRemover = function (word){

      for (let i = 0; i < word.length-1; ++i){
        if (word[i] == word[i+1] && word[i+1] != 'x'){
            word[i+1] = 'x';
        }
      }
      return word;
    }

    //Checks for duplicate letters in our keysquare and returns 1 if it finds one
    playfair.duplicateChecker = function (keysquare){
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
    playfair.iAdder = function (input){
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
    playfair.jRemover = function(square){
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
    playfair.jFilter = function(keysquare){
      var newKeysquare = playfair.jRemover(keysquare);

      if (newKeysquare.length != 25){
        return "Invalid Amount of Keysquare Letters";
      }
      else{
        return newKeysquare;
      }
    }


  //Parses through the alphabet array, and removes all letters that are in our keyword
  playfair.keywordRemover = function(keyword){
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
  playfair.generateMatrix = function(keysquare)
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




      playfair.main = function (args) {
      };
      return playfair;
  }());

  playfair["__class"] = "playfair";
  playfair.main(null);
