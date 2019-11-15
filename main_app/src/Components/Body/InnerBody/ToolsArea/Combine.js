//combineAlphaSub.js file

export var combine = (function () {
    function combine() {
    }




    //Takes in message, the alphabet as an array, and the ciphertext as an array
    combine.combineMessage = function(message1, message2, amount1, amount2){
      let buff = [];
      var a = 0;
      var b = 0;
      var n = 0;

      for (let i = 0; a < message1.length || b < message2.length; ++i){

          //Extrapolates the message1
        for (let j = 0; j < amount1 && a < message1.length; ++j, ++i){
          buff[n] = message1[a];
          ++n;
          ++a;
        }
          //Extrapolates the message2
        for (let j = 0; j < amount2 && b < message2.length; ++j, ++i){
          buff[n] = message2[b];
          ++n;
          ++b;
        }
      }
      //Returns the entire decrypted message
      return buff;
    }



    //combine Encryption Function
    combine.parse = function(message1, message2, message1Amount, message2Amount){
      //Creates an array using our standard english alphabet
      var output = combine.combineMessage(message1, message2, message1Amount, message2Amount);

      return output;
    }



    combine.main = function (args) {
    };
    return combine;
}());

combine["__class"] = "combine";
combine.main(null);
