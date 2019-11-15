//convertAlphaSub.js file

export var convert = (function () {
    function convert() {
    }


    //convert Encryption Function
    convert.remove = function(message, target){
      var output = message.split(target);
      return output;
    }

    //convert Encryption Function
    convert.removePunctuation = function(message){
      var output = message.split(".");
      output = message.split(";");
      output = message.split(",");
      output = message.split(":");
      output = message.split("!");
      output = message.split("?");
      output = message.split("-");
      output = message.split("_");
      output = message.split("$");
      output = message.split("#");
      output = message.split("*");
      return output;
    }

    //convert Encryption Function
    convert.convertCharacter = function(message, letterToChange, changeToLetter){
      var output = message.replace(letterToChange, changeToLetter);
      return output;
    }



    convert.main = function (args) {
    };
    return convert;
}());

convert["__class"] = "convert";
convert.main(null);
