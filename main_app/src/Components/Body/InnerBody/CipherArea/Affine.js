//affineAlphaSub.js file

export var affine = (function () {
    function affine() {
    }

    //Creates an array using whatever string is input
    affine.generateArray = function(alphabet){
      let temp = [];
      for(let i = 0; i < 26; ++i){
          temp[i] = alphabet[i];
      }
      return temp;
    }


    //Searches through the array for the matching letter
    affine.arraySearch = function(letter, array){
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
    affine.encryptMessage = function(message, alphabetArray, ciphertextArray){
      let encryption = [];
      //Encrypts every letter 1 by 1
      for (let i = 0; i < message.length; ++i){
        //Searches for the location of the letter in the alphabet array stores the location
        var location = affine.arraySearch(message[i], alphabetArray);
        //Stores the encrypted character into an array
        encryption[i] = location;
      }
      //Returns the entire encrypted message
      return encryption;
    }



    //Takes in message, the alphabet as an array, and the ciphertext as an array
    affine.decryptMessage = function(message, alphabetArray, ciphertextArray){
      let encryption = [];
      //Decrypts every letter 1 by 1
      for (let i = 0; i < message.length; ++i){
        //Searches for the location of the letter in the alphabet array stores the location
        var location = affine.arraySearch(message[i], ciphertextArray);
        //Stores the encrypted character into an array
        encryption[i] = alphabetArray[location];
      }
      //Returns the entire decrypted message
      return encryption;
    }


    affine.modify = function(numberArray, a, b){
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      let buff = [];
      let buff2 = [];

      for (let i = 0; i < numberArray.length; ++i){
        buff[i] = 0;
      }

      for (let i = 0; i < numberArray.length; ++i){
        buff[i] = ((numberArray[i] * a) + b) % 26;
      }

      for (let i = 0; i < numberArray.length; ++i){
        buff2[i] = alphabet[buff[i]];
      }

      return buff2;
    }


    affine.deModify = function(numberArray, a, b){
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      let buff = [];
      let buff2 = [];

      for (let i = 0; i < numberArray.length; ++i){
        buff[i] = 0;
      }

      for (let i = 0; i < numberArray.length; ++i){
        var temp = (1 / a);
        buff[i] = (temp * (numberArray - b));
      }

      for (let i = 0; i < numberArray.length; ++i){
        buff2[i] = alphabet[buff[i]];
      }

      return buff;
    }



    //affine Encryption Function
    affine.encrypt = function(ciphertext, message, varA, varB){
      var a = parseInt(varA);
      var b = parseInt(varB);
      //Converts message to lowercase
      var newMessage = message.toLowerCase();
      //Converts keyword and message to lowercase
      var ciphertextAlphabet = "abcdefghijklmnopqrstuvwxyz"
      //Creates an array using ciphertext
      //ciphertextAlphabet = affine.generateArray(ciphertextAlphabet);
      //Creates an array using our standard english alphabet
      var alphabet = affine.generateArray("abcdefghijklmnopqrstuvwxyz");
      //Encrypts message
      var numberMessage = affine.encryptMessage(message, alphabet, ciphertextAlphabet);
      //Returns fully encrypted message
      var fullMessage = affine.modify(numberMessage, a, b);
      return fullMessage;
    }


    //affine Encryption Function
    affine.decrypt = function(ciphertext, message, varA, varB){
      var a = parseInt(varA);
      var b = parseInt(varB);
      //Converts message to lowercase
      var newMessage = message.toLowerCase();
      //Converts keyword and message to lowercase
      var ciphertextAlphabet = "abcdefghijklmnopqrstuvwxyz"
      //Creates an array using ciphertext
      //ciphertextAlphabet = affine.generateArray(ciphertextAlphabet);
      //Creates an array using our standard english alphabet
      var alphabet = affine.generateArray("abcdefghijklmnopqrstuvwxyz");
      //Encrypts message
      var numberMessage = affine.encryptMessage(message, alphabet, ciphertextAlphabet);
      //Returns fully encrypted message
      var fullMessage = affine.deModify(numberMessage, a, b);
      return fullMessage;
    }



    affine.main = function (args) {
    };
    return affine;
}());

affine["__class"] = "affine";
affine.main(null);
