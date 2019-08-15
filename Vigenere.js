//TwoSquare.js file

//twosquare class declaration
export var vigenere = (function () {

    function vigenere() {
    }

    //Our alphabet for setting our matricies, i is omitted    
    var alphabet = ['a','b','c','d','e','f','g','h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Our 2 matricies used for 2 tSquare
    let myarr = [];
    let codedArray = [];
    let decodedArray = [];
    let tempArray = [];
    let outputPair = [2];

    //Calculated x coordinate of first matrix
    let xArray = [];
    let arrayX = [];
    let yArray = [];
    let arrayY = [];
    //Calculated y coordinate of first matrix
    var xx;
    var yy;
    //Desired search value
    var target;
    //The keyword in our first matrix
    var keyword = 'keyword';
    var keystream;

    //Returns the keyword of our first matrix
    vigenere.keywordf = function(){
    return keyword;
    }

    var encryptionWord;
    vigenere.eWord = function(){
      return encryptionWord;
    }


    vigenere.encrypt = function(word){
      vigenere.coordinate(word);
      encryptionWord = word;
      for(let i = 0; i < xArray.length; ++i)
      {
        var x = xArray[i];
        var y = yArray[i];
        codedArray.push(vigenere.search(x,y))
      }

    return codedArray;
  }



    vigenere.start = function(){
      vigenere.setMatrix();
      var temp = vigenere.search(19,7);
      //return temp;
    }




  vigenere.coordinate = function(word){
      if (keyword.length < word.length){
        keystream = keyword;
        var temp = 0;
        for (let i = keyword.length; i < word.length; ++i){
          keystream = keystream + keyword[temp];
          if (temp > keyword.length){
            temp = 0;
          }
          ++temp;
        }
      }
      else{
        keystream = keyword;
      }

      for(let i=0; i < word.length; ++i){
        xArray[i] = word[i].charCodeAt(0) - 97;
        yArray[i] = keystream[i].charCodeAt(0) - 97;
      }
  }


  vigenere.search = function(x, y){
    return myarr[x][y];
  }



    //Determines coordinates based on the input 2 letters from the message
    vigenere.coord = function(letter)
    {
      for(let i=0; i < 26; ++i)
        {
          for(let j=0; j < 26; ++j)
          {
            if (myarr[i][j] === letter)
            {
              //x=i;
              //y=j;
            }
          }
        }
      }





  vigenere.setMatrix = function(){
  //Outer loop
  var offset = 0;
  var temp;
  for(let a=0; a < 26; a++){
    //Declares an array, named row
    let row = []
    //Inner loop
    temp = 0;
    for(let b=0; b < 26; b++){
      //Insert our value into our array
      if (b + offset < 26){
        row.push(alphabet[b+offset]);
      }
      if (b + offset > 26){
        row.push(alphabet[temp])
        ++temp;
      }

    }
    ++offset;
    //Insert that array into an array of arrays
    myarr.push(row);
  }
  //Returns the matrix
  return myarr;
}


    vigenere.main = function (args) {
    };
    return vigenere;
}());

vigenere["__class"] = "vigenere";
vigenere.main(null);