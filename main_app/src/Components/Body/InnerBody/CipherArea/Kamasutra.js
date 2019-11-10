//kamaAlphaSub.js file

export var kama = (function () {
    function kama() {
    }

    //Creates an array using whatever string is input
    kama.generateArray = function(alphabet){
      let temp = [];
      for(let i = 0; i < 13; ++i){
          temp[i] = alphabet[i];
      }
      return temp;
    }


    //Searches through the array for the matching letter
    kama.arraySearch = function(letter, array){
      var truth = 0;
      var location;
      //Searches through the array for desired letter location
      for (let i = 0; i < 13 && truth == 0; ++i){
          if (array[i] == letter){
            ++truth;
            location = i;
          }
      }
      //Returns whatever location it is in the array as an integer
      return location;
    }


    //Checks to see if the letter occurs in the first half of the alphabet
    kama.truthChecker = function(letter, array){
      var truth = 0;
      var location;
      //Searches through the array for desired letter location
      for (let i = 0; i < 13 && truth == 0; ++i){
          if (array[i] == letter){
            ++truth;
          }
      }
      //Returns whatever location it is in the array as an integer
      return truth;
    }



    //Takes in message, the alphabet as an array, and the ciphertext as an array
    kama.encryptMessage = function(message, first, second){
      let encryption = [];
      //Encrypts every letter 1 by 1
      for (let i = 0; i < message.length; ++i){
        //Checks to see if the letter occurs in the first half of the alphabet
        var truth = kama.truthChecker(message[i], first);

          if (truth == 1){
          //Searches for the location of the letter in the alphabet array stores the location
          var location = kama.arraySearch(message[i], first);
          //Stores the encrypted character into an array
          encryption[i] = second[location];
          }

          else {
            var location = kama.arraySearch(message[i], second);
            encryption[i] = first[location];
          }
      }

      //Returns the entire encrypted message
      return encryption;
    }



    //Takes in message, the alphabet as an array, and the ciphertext as an array
    kama.decryptMessage = function(message, alphabetArray, ciphertextArray){
      let encryption = [];
      //Decrypts every letter 1 by 1
      for (let i = 0; i < message.length; ++i){
        //Searches for the location of the letter in the alphabet array stores the location
        var location = kama.arraySearch(message[i], ciphertextArray);
        //Stores the encrypted character into an array
        encryption[i] = alphabetArray[location];
      }
      //Returns the entire decrypted message
      return encryption;
    }



    //kama Encryption Function
    kama.encrypt = function(ciphertext, message){
      //Converts message to lowercase
      var newMessage = message.toLowerCase();
      //Converts keyword and message to lowercase
      var ciphertextAlphabet = ciphertext.toLowerCase();

      var n = 0;
      //First half of the alphabet
      let first = [];
      //Second half of the alphabet
      let second = [];

      for(let i = 0; i < 26; ++i){
        //Sets first half of the alphabet
        if (i < 13){
          first[i] = ciphertextAlphabet[i];
        }
        //Sets second half of the alphabet
        else{
          second[n] = ciphertextAlphabet[i];
          ++n;
        }
      }

      var fullMessage = kama.encryptMessage(message, first, second);
      //Returns fully encrypted message
      return fullMessage;
    }



    //kama Decryption Function
    kama.decrypt = function(ciphertext, message){
      //Converts message to lowercase
      var newMessage = message.toLowerCase();
      //Converts keyword and message to lowercase
      var ciphertextAlphabet = ciphertext.toLowerCase();
      //Creates an array using ciphertext
      ciphertextAlphabet = kama.generateArray(ciphertextAlphabet);
      //Creates an array using our standard english alphabet
      var alphabet = kama.generateArray("abcdefghijklmnopqrstuvwxyz");
      //Decrypts message
      var fullMessage = kama.decryptMessage(message, alphabet, ciphertextAlphabet);
      //Returns fully decrypted message
      return fullMessage;
    }



    kama.main = function (args) {
    };
    return kama;
}());

kama["__class"] = "kama";
kama.main(null);
