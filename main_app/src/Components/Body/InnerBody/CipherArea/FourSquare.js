//Encryption works
//Need comments
//foursquare.js

//Reformat to not store values, only executable functions except for some
export var foursquare = (function () {

    function foursquare() {
    }

    //Our encryption function for foursquare
    foursquare.encrypt = function(message, keysquare1, keysquare2){
      //Returns our keysquare once we filter out j
      var newKeysquare1 = foursquare.jFilter(keysquare1);
      var newKeysquare2 = foursquare.jFilter(keysquare2);
      var encryptionMessage = foursquare.messageEqualizer(message);
      //Error checking
      if (newKeysquare1.length == 35){
        return "There was a problem with the Keysquare, cannot Encrypt"
      }
      if (newKeysquare2.length == 35){
        return "There was a problem with the Keysquar2, cannot Encrypt"
      }
      else {
        //Checks for duplicate letters in our keysquare
        var truth1 = foursquare.duplicateChecker(newKeysquare1);
        var truth2 = foursquare.duplicateChecker(newKeysquare2);
        //Error Checking
        if (truth1 == 1){
          return "There was a duplicate letter somewhere in your keysquare1"
        }
        if (truth2 == 1){
          return "There was a duplicate letter somewhere in your keysquare2"
        }
        else {
          //We replace all j's with i's in our encryption message
          var newMessage = foursquare.iAdder(encryptionMessage);
          //We remove any duplicate letters by replacing them with x, in our encryption message
          newMessage = foursquare.duplicateRemover(newMessage);
          //We generate our 5x5 matrix used for encryption
          var quad1 = foursquare.generateMatrix(newKeysquare1);
          //We generate our 5x5 matrix used for encryption
          var quad3 = foursquare.generateMatrix(newKeysquare2);
          //We recieve back the full set of coordinates for ever letter cooresponding to our matricies
          var quad2 = foursquare.generateMatrix("abcdefghiklmnopqrstuvwxyz");
          var quad4 = foursquare.generateMatrix("abcdefghiklmnopqrstuvwxyz");

          var fullCoordinates = foursquare.coordinates(newMessage, quad2, quad4);
          //We recieve the diagonal letter in our matrix for every letter in our encryption word
          var diagonals = foursquare.getDiagonals(fullCoordinates, quad1, quad3);
          return diagonals;
        }
      }
  }



  //Evens out an odd encryption message by adding x to the end
  foursquare.messageEqualizer = function(message){
    if(message.length % 2 != 0)
    {
      message = message + 'x';
    }
    return message;
  }



  //Our encryption function for foursquare
  foursquare.decrypt = function(encryptionMessage, keysquare1, keysquare2){
    //Returns our keysquare once we filter out j
    var newKeysquare1 = foursquare.jFilter(keysquare1);
    var newKeysquare2 = foursquare.jFilter(keysquare2);
    //Error checking
    if (newKeysquare1.length == 35){
      return "There was a problem with the Keysquare, cannot Encrypt"
    }
    if (newKeysquare2.length == 35){
      return "There was a problem with the Keysquar2, cannot Encrypt"
    }
    else {
      //Checks for duplicate letters in our keysquare
      var truth1 = foursquare.duplicateChecker(newKeysquare1);
      var truth2 = foursquare.duplicateChecker(newKeysquare2);
      //Error Checking
      if (truth1 == 1){
        return "There was a duplicate letter somewhere in your keysquare1"
      }
      if (truth2 == 1){
        return "There was a duplicate letter somewhere in your keysquare2"
      }
      else {
        //We replace all j's with i's in our encryption message
        var newMessage = foursquare.iAdder(encryptionMessage);
        //We remove any duplicate letters by replacing them with x, in our encryption message
        newMessage = foursquare.duplicateRemover(newMessage);
        //We generate our 5x5 matrix used for encryption
        var quad1 = foursquare.generateMatrix(keysquare1);
        //We generate our 5x5 matrix used for encryption
        var quad3 = foursquare.generateMatrix(keysquare2);
        //We recieve back the full set of coordinates for ever letter cooresponding to our matricies
        var quad2 = foursquare.generateMatrix("abcdefghiklmnopqrstuvwxyz");
        var quad4 = foursquare.generateMatrix("abcdefghiklmnopqrstuvwxyz");

        var fullCoordinates = foursquare.coordinates(newMessage, quad1, quad3);
        //We recieve the diagonal letter in our matrix for every letter in our encryption word
        var diagonals = foursquare.getDiagonals(fullCoordinates, quad2, quad4);
        return diagonals;
      }
    }
}




    //Takes in the full set of coordinates for our message, and the matrix
    foursquare.getDiagonals = function(fullCoordinates, quad1, quad3){
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
          var revLets = foursquare.diagonal(coordinates, quad1, quad3);
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
  foursquare.diagonal = function(coordinates, quad1, quad3){
    var x1 = coordinates[0];
    var y1 = coordinates[1];
    var x2 = coordinates[2];
    var y2 = coordinates[3];

    var letters = [];
    letters[1] = quad3[y2][x1];
    letters[0] = quad1[y1][x2];

    return letters;
  }


  //Rreturns a full list of coordinates for every letter in our encryption message
  foursquare.coordinates = function(message, quad2, quad4){
    var fullCoordinates = [];
    var coordinates = [];
    var n = 0;

    //Gets the x and y coordinate for every letter in our message
    for (let i = 0; i < message.length; ++i){
      //Search function which returns the x y coordinates for a letter
      if (i % 2 == 0){
        coordinates = foursquare.coordinateSearch(message[i], quad2);
      }
      //Odd letters in the message has their coordinates searched in  the bottom matrix
      else {
        coordinates = foursquare.coordinateSearch(message[i], quad4);
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
    foursquare.coordinateSearch = function(letter, matrix){
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
    foursquare.messageEqualizer = function(message){
      if(message.length % 2 != 0)
      {
        message = message + 'x';
      }
      return message;
    }


    //Replaces any duplicates that are next to each other with x
    foursquare.duplicateRemover = function (word){

      for (let i = 0; i < word.length-1; ++i){
        if (word[i] == word[i+1] && word[i+1] != 'x'){
            word[i+1] = 'x';
        }
      }
      return word;
    }


    //Checks for duplicate letters in our keysquare and returns 1 if it finds one
    foursquare.duplicateChecker = function (keysquare){
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
    foursquare.iAdder = function (input){
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
    foursquare.jRemover = function(square){
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
    foursquare.jFilter = function(keysquare){
      var newKeysquare = foursquare.jRemover(keysquare);

      if (newKeysquare.length != 25){
        return "Invalid Amount of Keysquare Letters";
      }
      else{
        return newKeysquare;
      }
    }



  //Parses through the alphabet array, and removes all letters that are in our keyword
  foursquare.keywordRemover = function(keyword){
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
  foursquare.generateMatrix = function(keysquare)
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
  foursquare.generateMatrix2 = function(keysquare)
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




      foursquare.main = function (args) {
      };
      return foursquare;
  }());

  foursquare["__class"] = "foursquare";
  foursquare.main(null);
