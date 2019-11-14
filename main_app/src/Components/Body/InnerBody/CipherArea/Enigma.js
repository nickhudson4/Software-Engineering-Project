//enigma.js

export var enigma = (function () {
    function enigma() {
    }


    //This function should rotate a ring by 1 interval
    enigma.rotate = function(ring){

      var temp = ring[ring.length-1];
      var temp2;
      for (let i = 0; i < ring.length; ++i){
        temp2 = ring[i];
        ring[i] = temp;
        temp2 = ring[i+1];
      }


    }


    enigma.encrypt = function(){
      let ring1 = "abcdefghijklmnopqrstuvwxyz";
      let ring2 = "abcdefghijklmnopqrstuvwxyz";
      let ring3 = "abcdefghijklmnopqrstuvwxyz";
      //var size = enigma.numberParser(n);
      //var array = enigma.numberParser(number);
      //var newMessage = enigma.messageEqualizer(message, size);
      //var matrix = enigma.generateMatrix(size);
      //var keyMatrix = enigma.setMatrix(size, array, matrix);
      //var output = enigma.messageEncrypt(newMessage, size, keyMatrix);
      //var vector = enigma.generateVector("bco", 3);
      //var outputVector = enigma.multiplier(size, vector, keyMatrix);
      //var translatedVector = enigma.encryptMessage(output,"abcdefghijklmnopqrstuvwxyz");

      //return translatedVector;
    }




    enigma.main = function (args) {
    };
    return enigma;
}());

enigma["__class"] = "enigma";
enigma.main(null);
