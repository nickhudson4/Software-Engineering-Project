//Vigenere.js

export var vigenere = (function () {
    function vigenere() {
    }

    //Generates an array based on the input keysquare
    vigenere.generateArray = function(keyword){
      let temp = [];
      for(let i = 0; i < 26; ++i){
          temp[i] = keyword[i];
      }
      //Returns keysquare as an array
      return temp;
    }


    //Searches the input keysquare array, for the desired letter
    vigenere.arraySearch = function(letter, array){
      var truth = 0;
      var location;
      //Searches the array for the desired letter's location
      for (let i = 0; i < 26 && truth == 0; ++i){
          if (array[i] == letter){
            ++truth;
            location = i;
          }
      }
      //Returns the location of the letter in the array
      return location;
    }


    //Encrypts the input message, also takes in the alphabet as an array, and the keyword as an array
    vigenere.encryptMessage = function(message, alphabetArray, keywordArray){
      let encryption = [];
      //For every letter in the message it encrypts
      for (let i = 0; i < message.length; ++i){
        //Searches for the location of the letter in the alphabet array
        var location = vigenere.arraySearch(message[i], alphabetArray);
        encryption[i] = keywordArray[location];
      }
      //Returns fully encrypted message
      return encryption;
    }



    //Decrypts the input message, also takes in the alphabet as an array, and the keyword as an array
    vigenere.decryptMessage = function(message, alphabetArray, keywordArray){
      let decryption = [];
      //For every letter in the message it decrypts
      for (let i = 0; i < message.length; ++i){
        //Searches for hte location of the letter in the keyword array
        var location = vigenere.arraySearch(message[i], keywordArray);
        decryption[i] = alphabetArray[location];
      }
      //Returns fully decrypted message
      return decryption;
    }



    //Creates a keystream using the desired keyword
    vigenere.formKeystream = function(keyword, length){
      //If the keyword length is less than the length of the message
      if (keyword.length < length)
      {
        var keystream = [];
        var n = 0;
        //Keeps repeating the keyword into a keystream
        for (let i = 0; i < length; ++i){
          keystream[i] = keyword[n];
          ++n;
                //Everytime we hit the end of the keyword, we loop back
                if (n >= keyword.length){
                  n = 0;
                }
        }
        //Returns keystream
        return keystream;
      }
      //Just returns the keyword if it's longer or equal to the message
      else
      {
          return keyword;
      }
    }



    //By adding the locations together we encode
    vigenere.adder = function(keystream, newMessage, alphabet){
      let encryptedWord = [];
      //Encodes every letter of the message
      for (let i = 0; i < newMessage.length; ++i){
        //Calculates the location of the current keystream letter in the alphabet
        var num1 = vigenere.arraySearch(keystream[i], alphabet);
        //Calculates the location of the current message letter in the alphabet
        var num2 = vigenere.arraySearch(newMessage[i], alphabet);
        //Adds the 2 together and mod 26
        var num3 = (num2 + num1) % 26;
        //Inserts whatever location in the alphabet that is into the Encrypted Word
        encryptedWord[i] = alphabet[num3];
      }
      //Returns the fully encrypted word
      return encryptedWord;
    }




    //By subtracting the locations together we decode
    vigenere.subtractor = function(keystream, ciphertext, alphabet){
      let encryptedWord = [];
      //Decodes every letter of the message
      for (let i = 0; i < ciphertext.length; ++i){
        //Calculates the location of the current keystream letter in the alphabet
        var num1 = vigenere.arraySearch(keystream[i], alphabet);
        //Calculates the location of the current message letter in the alphabet
        var num2 = vigenere.arraySearch(ciphertext[i], alphabet);
        //Subtracts the 2
        var num3 = (num2 - num1);
        //If we get a negative number, we add 26
        if (num3 < 0){
          num3 = num3 + 26;
        }
        //We mod that result by 26
        num3 = num3 % 26;
        //Inserts whatever location in the alphabet that is into the decrypted word
        encryptedWord[i] = alphabet[num3];
      }
      //Returns the fully decrypted word
      return encryptedWord;
    }



    //Encrypts the desired message, takes in keyword and encryption message
    vigenere.encrypt = function(keyword, message){
      //Produces keystream, by sending the lowercase keyword, and the length of the message
      var keystream = vigenere.formKeystream(keyword.toLowerCase(), message.length);
      //Converts messaage to lowercase
      var newMessage = message.toLowerCase();
      //Creates an array out of the alphabet
      var alphabet = vigenere.generateArray("abcdefghijklmnopqrstuvwxyz");
      //Creates fully encrypted word, by sending the keystream, message, and alphabet as an array
      var fullEncryption = vigenere.adder(keystream, newMessage, alphabet);
      //Returns the fully encrypted message
      return fullEncryption;
    }


    //Decrypts the message
    vigenere.decrypt = function(keyword, message){
      //Stores keystream, sends keyword in lowercase form and the length of the message
      var keystream = vigenere.formKeystream(keyword.toLowerCase(), message.length);
      //Converts message to lowercase
      var newMessage = message.toLowerCase();
      //Converts the alphabet into an array
      var alphabet = vigenere.generateArray("abcdefghijklmnopqrstuvwxyz");
      //Creates the fully decrypted word, by sending the keystream, message, and alphabet as an array
      var fullDecryption = vigenere.subtractor(keystream, newMessage, alphabet);
      //Returns the fully decrypted array
      return fullDecryption;
    }



    vigenere.main = function (args) {
    };
    return vigenere;
}());

vigenere["__class"] = "vigenere";
vigenere.main(null);
