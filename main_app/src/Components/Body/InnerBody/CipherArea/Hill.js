//hill.js

export var hill = (function () {
    function hill() {
    }



    //Generate a keysquare matrix
    hill.generateMatrix = function(size)
    {
      //Generates rows into a temp matrix
      var tempArray = [];
      for (var i = 0; i < size; i++){
        tempArray[i] = [];
      }
      //Returns our n by n matrix
      return tempArray;
    }




    hill.numberParser = function(number){
      var temp = number.split(',').map(Number);
      return temp;
    }


    //Evens out an odd encryption message by adding x to the end
    hill.messageEqualizer = function(message){
      if(message.length % 3 != 0)
      {
        message = message + 'x';
      }
      return message;
    }



    hill.encrypt = function(message, number, size){
      var array = hill.numberParser(number);
      var newMessage = hill.messageEqualizer(message);
      var matrix = hill.generateMatrix(size);

      return array;
    }




    hill.main = function (args) {
    };
    return hill;
}());

hill["__class"] = "hill";
hill.main(null);
