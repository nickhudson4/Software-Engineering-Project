//extractAlphaSub.js file

export var extract = (function () {
    function extract() {
    }




    //Takes in message, the alphabet as an array, and the ciphertext as an array
    extract.extractMessage = function(message, extractAmount, skip, start){
      let buff = [];
      var n = 0;
      var k;
      var endHit = 0;
      for (let i = start; i < message.length && endHit == 0; ++i){

        //Extrapolates the message
        for (let j = 0; j < extractAmount; ++j, ++i){
          //Case for hitting end of message
          if (i > message.length){
            i = 0;
            endHit = 1;
          }
          buff[n] = message[i];
          ++n;
        }
        //Skips ahead
        for (let j = 0; j < skip; ++j){
          ++i;
        }
      }
      //Returns the entire decrypted message
      return buff;
    }



    //extract Encryption Function
    extract.parse = function(message, extractAmount, skip, start){
      //Creates an array using our standard english alphabet
      var output = extract.extractMessage(message, extractAmount, skip-1, start-1);

      return output;
    }



    extract.main = function (args) {
    };
    return extract;
}());

extract["__class"] = "extract";
extract.main(null);
