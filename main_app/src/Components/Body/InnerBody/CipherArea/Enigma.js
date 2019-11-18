//enigma.js

export var enigma = (function () {
    function enigma() {
    }

    //Takes in 2 characters, and performs a swap, acts like a plugboard switch
    enigma.plugboardSwitch = function(message, letter1, letter2){

    }




        //Searches through the array for the matching letter
        enigma.arraySearch = function(letter, array){
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
        enigma.inverter = function(array1, array2){

            let asciikeyword = [];
            let alphabet = [];
            //This is our target return with the small number ascii array
            for (let i = 0; i < array1.length; ++i){
              asciikeyword[i] = array1.charCodeAt(i);
            }
            //This is our target return with the small number ascii array
            for (let i = 0; i < array1.length; ++i){
              alphabet[i] = array2[i];
            }

            for (let a = 0; a <= array1.length; ++a){
              for (let b = a; b <= array1.length; ++b){
                var temp;
                var temp2;
                if (asciikeyword[a] > asciikeyword[b])
                {
                  temp = asciikeyword[b];
                  asciikeyword[b] = asciikeyword[a];
                  asciikeyword[a] = temp;

                  temp2 = alphabet[a];
                  alphabet[a] = alphabet[b];
                  alphabet[b] = temp2;
                }
              }
            }


          //Returns an inverted rotor
          return alphabet;
        }



        //Takes in message, the alphabet as an array, and the ciphertext as an array
        enigma.reflector = function(letter, array1, array2){

            var location = enigma.arraySearch(letter, array1);
            //Stores the encrypted character into an array
            var encryption = array2[location];

          //Returns the entire encrypted message
          return encryption;
        }




    //This function should rotate a ring by 1 interval
    enigma.rotate = function(ring){
      let buff = [];
      //Sets a temp variable to last item in the array
      var last = ring[ring.length-1];
      for (let i = 0; i < ring.length-1; ++i){
          buff[i+1] = ring[i]
      }
      buff[0] = last;
      var output1 = buff.toString();
      output1 = output1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

      return output1;
    }


    enigma.translateLetter = function(letter, rotor1, rotor2, rotor3){
      let alphabet = "abcdefghijklmnopqrstuvwxyz";
      let reflector = "yruhqsldpxngokmiebfzcwvjat";

      //Setting my 3 rotors
      let right = rotor3;
      let middle = rotor2;
      let left = rotor1;

      //Setting my inverse rotors
      let inverseRight = enigma.inverter(right, alphabet);
      let inverseMiddle = enigma.inverter(middle, alphabet);
      let inverseLeft = enigma.inverter(left, alphabet);

      //Passes through the 3 rotors/
      var location1 = enigma.arraySearch(letter, alphabet);
      var rightLetter = right[location1];
      var location2 = enigma.arraySearch(rightLetter, alphabet);
      var middleLetter = middle[location2];
      var location3 = enigma.arraySearch(middleLetter, alphabet);
      var leftLetter = left[location3];

      //The pass through the reflector
      var reflectorLocation = enigma.arraySearch(leftLetter, alphabet);
      var reflectorLetter = reflector[reflectorLocation];


      //Passes through the 3 rotors/
      var newLocation1 = enigma.arraySearch(reflectorLetter, alphabet);
      var inverseLeftLetter = inverseLeft[newLocation1];
      var newLocation2 = enigma.arraySearch(inverseLeftLetter, alphabet);
      var inverseMiddleLetter = inverseMiddle[newLocation2];
      var newLocation3 = enigma.arraySearch(inverseMiddleLetter, alphabet);
      var inverseRightLetter = inverseRight[newLocation3];

      return inverseRightLetter;
    }


    enigma.translationLoop = function(message, rotor1, rotor2, rotor3){

      let buff = [];
      var leftTurns = 0;
      var middleTurns = 0;
      for (let i = 0; i < message.length; ++i){
          buff[i] = enigma.translateLetter(message[i], rotor1, rotor2, rotor3);
          //Rotates leftmost rotor after an encryption
          rotor1 = enigma.rotate(rotor1);
          ++leftTurns;
          if (leftTurns == 26){
            leftTurns = 0;
            rotor2 = enigma.rotate(rotor2);
            ++middleTurns;
            if (leftTurns == 26){
              middleTurns = 0;
              rotor3 = enigma.rotate(rotor3);
            }
          }
        }


      return buff;
    }


    enigma.encrypt = function(){
      let alphabet = "abcdefghijklmnopqrstuvwxyz";
      //let ring2 = "abcdefghijklmnopqrstuvwxyz";
      //let ring3 = "abcdefghijklmnopqrstuvwxyz";
      let rotor1 = "ekmflgdqvzntowyhxuspaibrcj";
      let rotor2 = "ajdksiruxblhwtmcqgznpyfvoe";
      let rotor3 = "bdfhjlcprtxvznyeiwgakmusqo";

      var output = enigma.translationLoop("good", rotor1, rotor2, rotor3);
      //Add Plugboard settings: Letter Swapping
      //Look into rotor rotation (After every letter encryption)
      //Add Key Settings: Rotating the alphabet letters



      //let inverseRight = enigma.inverter(right, alphabet);
      //let inverseMiddle = enigma.inverter(middle, alphabet);
      //let inverseLeft = enigma.inverter(left, alphabet);
      //var location1 = enigma.arraySearch("c", ring1);
      //var location2 = enigma.arraySearch(ring2[location1], ring2);
      //var location3 = enigma.arraySearch(ring3[location2], ring3);
      //var temp = enigma.inverter(left, "abcdefghijklmnopqrstuvwxyz");

      return output;
    }




    enigma.main = function (args) {
    };
    return enigma;
}());

enigma["__class"] = "enigma";
enigma.main(null);
