//MonoAlphaSub.js file

export var mono = (function () {
    function mono() {
    }

    //Creates an array using whatever string is input
    mono.generateArray = function(alphabet){
      let temp = [];
      for(let i = 0; i < 26; ++i){
          temp[i] = alphabet[i];
      }
      return temp;
    }


    //Searches through the array for the matching letter
    mono.arraySearch = function(letter, array){
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
    mono.encryptMessage = function(message, alphabetArray, ciphertextArray){
      let encryption = [];
      //Encrypts every letter 1 by 1
      for (let i = 0; i < message.length; ++i){
        //Searches for the location of the letter in the alphabet array stores the location
        var location = mono.arraySearch(message[i], alphabetArray);
        //Stores the encrypted character into an array
        encryption[i] = ciphertextArray[location];
      }
      //Returns the entire encrypted message
      return encryption;
    }



    //Takes in message, the alphabet as an array, and the ciphertext as an array
    mono.decryptMessage = function(message, alphabetArray, ciphertextArray){
      let encryption = [];
      //Decrypts every letter 1 by 1
      for (let i = 0; i < message.length; ++i){
        //Searches for the location of the letter in the alphabet array stores the location
        var location = mono.arraySearch(message[i], ciphertextArray);
        //Stores the encrypted character into an array
        encryption[i] = alphabetArray[location];
      }
      //Returns the entire decrypted message
      return encryption;
    }



    //Mono Encryption Function
    mono.encrypt = function(ciphertext, message){
      //Converts message to lowercase
      var newMessage = message.toLowerCase();
      //Converts keyword and message to lowercase
      var ciphertextAlphabet = ciphertext.toLowerCase();
      //Creates an array using ciphertext
      ciphertextAlphabet = mono.generateArray(ciphertextAlphabet);
      //Creates an array using our standard english alphabet
      var alphabet = mono.generateArray("abcdefghijklmnopqrstuvwxyz");
      //Encrypts message
      var fullMessage = mono.encryptMessage(message, alphabet, ciphertextAlphabet);
      //Returns fully encrypted message
      return fullMessage;
    }



    //Mono Decryption Function
    mono.decrypt = function(ciphertext, message){
      //Converts message to lowercase
      var newMessage = message.toLowerCase();
      //Converts keyword and message to lowercase
      var ciphertextAlphabet = ciphertext.toLowerCase();
      //Creates an array using ciphertext
      ciphertextAlphabet = mono.generateArray(ciphertextAlphabet);
      //Creates an array using our standard english alphabet
      var alphabet = mono.generateArray("abcdefghijklmnopqrstuvwxyz");
      //Decrypts message
      var fullMessage = mono.decryptMessage(message, alphabet, ciphertextAlphabet);
      //Returns fully decrypted message
      return fullMessage;
    }



    mono.main = function (args) {
    };
    return mono;
}());

mono["__class"] = "mono";
mono.main(null);
