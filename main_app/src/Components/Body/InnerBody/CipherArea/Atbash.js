//atbashAlphaSub.js file

export var atbash = (function () {
    function atbash() {
    }

    //Creates an array using whatever string is input
    atbash.generateArray = function(alphabet){
      let temp = [];
      for(let i = 0; i < 26; ++i){
          temp[i] = alphabet[i];
      }
      return temp;
    }


    //Searches through the array for the matching letter
    atbash.arraySearch = function(letter, array){
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
    atbash.encryptMessage = function(message, alphabetArray, ciphertextArray){
      let encryption = [];
      //Encrypts every letter 1 by 1
      for (let i = 0; i < message.length; ++i){
        //Searches for the location of the letter in the alphabet array stores the location
        var location = atbash.arraySearch(message[i], alphabetArray);
        //Stores the encrypted character into an array
        encryption[i] = ciphertextArray[location];
      }
      //Returns the entire encrypted message
      return encryption;
    }



    //Takes in message, the alphabet as an array, and the ciphertext as an array
    atbash.decryptMessage = function(message, alphabetArray, ciphertextArray){
      let encryption = [];
      //Decrypts every letter 1 by 1
      for (let i = 0; i < message.length; ++i){
        //Searches for the location of the letter in the alphabet array stores the location
        var location = atbash.arraySearch(message[i], ciphertextArray);
        //Stores the encrypted character into an array
        encryption[i] = alphabetArray[location];
      }
      //Returns the entire decrypted message
      return encryption;
    }



    //atbash Encryption Function
    atbash.encrypt = function(message){
      //Creates an array using our standard english alphabet
      var alphabet = atbash.generateArray("abcdefghijklmnopqrstuvwxyz");
      var revAlphabet = atbash.generateArray("zyxwvutsrqponmlkjihgfedcba");
      //Encrypts message
      var fullMessage = atbash.encryptMessage(message, alphabet, revAlphabet);
      //Returns fully encrypted message
      return fullMessage;
    }



    atbash.main = function (args) {
    };
    return atbash;
}());

atbash["__class"] = "atbash";
atbash.main(null);
