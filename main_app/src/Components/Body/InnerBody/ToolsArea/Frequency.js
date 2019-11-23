//frequencyAlphaSub.js file

export var frequency = (function () {
    function frequency() {
    }




    //Takes in message, the alphabet as an array, and the ciphertext as an array
    frequency.combineMessage = function(message1, message2, amount1, amount2){
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
    frequency.parse2 = function(message){
      //Creates an array using our standard english alphabet
      //var output2 = output.toString();
      let buff = [];
      buff[0] = message;
      buff[1] = "\na b c d e f g h i j k l m n o p q r s t u v w x y z";
      return buff;
    }


    //Takes in message, the alphabet as an array, and the ciphertext as an array
    frequency.parse = function(message){
      let buff = [];
      for (let i = 0; i < 26; ++i){
        buff[i] = 0
      }
      for (let i = 0; i < message.length; ++i){
        switch(message[i]){
          case 'a':
            ++buff[0];
          break;
          case 'b':
            ++buff[1];
          break;
          case 'c':
            ++buff[2];
          break;
          case 'd':
            ++buff[3];
          break;
          case 'e':
            ++buff[4];
          break;
          case 'f':
            ++buff[5];
          break;
          case 'g':
            ++buff[6];
          break;
          case 'h':
            ++buff[7];
          break;
          case 'i':
            ++buff[8];
          break;
          case 'j':
            ++buff[9];
          break;
          case 'k':
            ++buff[10];
          break;
          case 'l':
            ++buff[11];
          break;
          case 'm':
            ++buff[12];
          break;
          case 'n':
            ++buff[13];
          break;
          case 'o':
            ++buff[14];
          break;
          case 'p':
            ++buff[15];
          break;
          case 'q':
            ++buff[16];
          break;
          case 'r':
            ++buff[17];
          break;
          case 's':
            ++buff[18];
          break;
          case 't':
            ++buff[19];
          break;
          case 'u':
            ++buff[20];
          break;
          case 'v':
            ++buff[21];
          break;
          case 'w':
            ++buff[22];
          break;
          case 'x':
            ++buff[23];
          break;
          case 'y':
            ++buff[24];
          break;
          case 'z':
            ++buff[25];
          break;
        }
      }
      //Returns the entire decrypted message
      var output = frequency.parse2(buff.toString());
      return output;
    }



    frequency.main = function (args) {
    };
    return frequency;
}());

frequency["__class"] = "frequency";
frequency.main(null);
