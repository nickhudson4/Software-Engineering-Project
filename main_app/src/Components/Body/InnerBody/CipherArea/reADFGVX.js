//reADFGVX.js file (Not Completed)
//More Comments
//Need a null value checker

//Declaring our class
export var readfgvx = (function () {
    function readfgvx() {
    }
    //This is a function to check for duplicates within a keysquare
    //Accepts keysquare as input
    readfgvx.duplicateChecker = function (keysquare){
      var truth = 0;
      //Parses through the keysquare array and cecks for any duplicate letters
      for (let i = 0; i < keysquare.length && truth == 0; ++i){
        for (let j = i+1; j < keysquare.length && truth == 0; ++j){
          if (keysquare[i] == keysquare[j]){
              truth = 1;
          }
        }
      }
      //Returns 1 upon duplicate and 0 if none
      return truth;
    }


    //This function removes j from a keysquare
    readfgvx.jRemover = function(square){
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
      //Returns the keysquare without any j's
      return buff;
    }


    //This function replaces i with j in any encryption message
    readfgvx.iAdder = function (input){
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
      //Returns the message, but with i's in place of the j's in the encryption message
      return buff;
    }


    //This functions runs other functions to filter out anything that might cause errors
    readfgvx.filter = function(keysquare){
      //var newKeysquare = readfgvx.jRemover(keysquare);

      if (keysquare.length != 36){
        //Returns error message
        return "Invalid Amount of Keysquare Letters";
      }
      else{
        //Else return that the keysquare is now incorrect
        return keysquare;
      }
    }




    //Generate a keysquare matrix
    readfgvx.generateMatrix = function(keysquare)
    {
      //Generates 5 rows into a temp matrix
      var tempArray = [];
      for (var i = 0; i < 6; i++){
        tempArray[i] = [];
      }
      //Fills our 5x5 matrix with our keysquare
      var i = 0;
      for (let a = 0; a < 6; a++)
      {
        for (let b = 0; b < 6; b++)
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
    readfgvx.columnar = function(keyword, tempArray, yValue){
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


    //Takes in plaintext word and keysquare
    readfgvx.encryptionWordCoordinates = function(word, keysquare){
      //We create a 5x5 matrix using our keysquare
      var matrix = readfgvx.generateMatrix(keysquare);
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
        for(let i = 0; i < 6 && truth == 0; ++i)
        {
          for(let j = 0; j < 6 && truth == 0; ++j)
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
    readfgvx.translate = function(targetLetter){
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
        temp = 'V';
      }
      else if (targetLetter == 5){
        temp = 'X';
      }
      //Returns whatever the number to letter translation is
      return temp;
    }

    //Converts xy coordinates 0-4 into ADFGX
    //Takes in either the x or y coordinate, doesn't matter, it's a number 0-4
    readfgvx.reverseTranslate = function(targetLetter){
      var temp;

      if (targetLetter == "A"){
        temp = 0;
      }
      else if (targetLetter == "D"){
        temp = 1;
      }
      else if (targetLetter == "F"){
        temp = 2;
      }
      else if (targetLetter == "G"){
        temp = 3;
      }
      else if (targetLetter == "V"){
        temp = 4;
      }
      else if (targetLetter == "X"){
        temp = 5;
      }
      //Returns letter to number translation
      return temp;
    }



    //Loops through our translate Function
    //Recieves an array of numbers which coorespond to xy coordinates
    readfgvx.translationLoop = function(numberedArray){
      let translated = []
      for (let i = 0; i < numberedArray.length; ++i){
        translated[i] = readfgvx.translate(numberedArray[i]);
      }
      //Returns an array of letters ADFGX corresponding to the input numbers
      return translated;
    }

    //Loops through our translate Function
    //Recieves an array of numbers which coorespond to xy coordinates
    readfgvx.reverseTranslationLoop = function(characterArray){
      let translated = []
      for (let i = 0; i < characterArray.length; ++i){
        translated[i] = readfgvx.reverseTranslate(characterArray[i]);
      }
      //Returns an array of letters ADFGX corresponding to the input numbers
      return translated;
    }


    //This Generates a matrix and processes it through columnar
    readfgvx.generateEncryptionMatrix = function(keyword, letterArray, length){
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
      tempArray = readfgvx.columnar(keyword, tempArray, rows);
      //Returns our entire encryped matrix after Columnar
      return tempArray;
    }


    //These are the final pairs that the program spits out from running Columnar
    //Takes the sorted Columnar matrix, it's x length, and y length
    readfgvx.encryptionPairs = function(tempArray, xLength, yLength){
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
    readfgvx.encryption = function(word, keysquare, keyword){
      var filterCheck = readfgvx.filter(keysquare);
      if (filterCheck.length == 35){
        //Returns error message
        return "There was a problem with the Keysquare, cannot Encrypt"
      }
      else {
        var truth = readfgvx.duplicateChecker(filterCheck);
        if (truth == 1){
          //Returns error message
          return "There was a duplicate letter somewhere in your keysquare"
        }
        else {
          //var newMessage = readfgvx.iAdder(word);
          var newMessage = word;
          var temparray = readfgvx.encryptionWordCoordinates(newMessage, filterCheck);
          var encryptedWord1 = readfgvx.translationLoop(temparray);
          var temp = readfgvx.generateEncryptionMatrix(keyword, encryptedWord1, newMessage.length*2);
          var temp2 = readfgvx.encryptionPairs(temp, keyword.length, ((newMessage.length * 2)/(keyword.length)));
          //Returns encrypted message
          return temp2;
        }
      }
    }


    //This is a sort function which sorts our input decryption matrix into correct form
    readfgvx.sortFunction = function(numberArray, characters, yValue){
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



    //Takes in plaintext word and keysquare
    readfgvx.decryptionWord = function(numberArray, keysquare){
      //We create a 5x5 matrix using our keysquare
      var matrix = readfgvx.generateMatrix(keysquare);
      var n = 0;
      let word = [];
      //Runs for the length of our plaintext input
      //We're getting the x and y numbered coordinates of each letter in our message
      for (let i = 0; i < numberArray.length; i = i + 2){
        var a = parseFloat(numberArray[i]);
        var b = parseFloat(numberArray[i+1]);
        word[n] = a;
        ++n;
    }
      //Returns the numbered x and y locations of each letter in the message coressponding to our ADFGX matrix
      return word;
  }



    //Performs columnar operation again using keyword to know how to set up our matrix
    readfgvx.decryptionColumnar = function(keyword, tempArray, yValue){
      //Start of our Columnar Process
      //turns our keyword to lowercase
      var lower = keyword.toLowerCase();
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
        var output = readfgvx.sortFunction(numberArray, tempArray, yValue);
        //Returns the preEncryption columnar matrix
        return output;
    }



    //This function generates our post columnar matrix
    readfgvx.generateDecryptionMatrix = function(keyword, letterArray, length){
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
            tempArray[b][a] = '-';
          }
            ++i;
        }
      }
      //Returns our what post Columnar matrix looked like
      return tempArray;
    }


    //This function converts our number coordinates into understandble text
    readfgvx.matrixToString = function(matrix, row, length){
      var word = [];
      var num = 0;

      for (let i = 0; i < row; ++i){
        for (let j = 0; j < length; ++j){
          word[num] = matrix[i][j];
          ++num;
        }
      }
      //Returns fully translated word
      return word;
    }



    //Our Decryption Function
    readfgvx.decryption = function(word, keysquare, keyword){
      var filterCheck = readfgvx.filter(keysquare);
      if (filterCheck.length == 35){
        //Return error message
        return "There was a problem with the Keysquare, cannot Decrypt"
      }
      else {
        var truth = readfgvx.duplicateChecker(filterCheck);
        if (truth == 1){
          //Return error message
          return "There was a duplicate letter somewhere in your keysquare"
        }
        else {
          var message = word.toUpperCase();
          var temp1 = readfgvx.generateDecryptionMatrix(keyword, message, message.length);
          var temp2 = readfgvx.decryptionColumnar(keyword, temp1, word.length/keyword.length);
          var temp3 = readfgvx.matrixToString(temp2, word.length/keyword.length, keyword.length);
          var output1 = temp3.toString();
          output1 = output1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
          var temp4 = readfgvx.reverseTranslationLoop(output1);
          var output2 = temp4.toString();
          output2 = output2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
          var temp5 = readfgvx.decryptionWord(output2, keysquare);
        }
      }
        //Returns fully decrypted word
        return temp5;
    }



    readfgvx.main = function (args) {
    };
    return readfgvx;
}());

readfgvx["__class"] = "readfgvx";
readfgvx.main(null);
