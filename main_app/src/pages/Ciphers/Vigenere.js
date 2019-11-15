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

    //Returns the word input for encryption
    var encryptionWord;
    vigenere.eWord = function(){
      return encryptionWord;
    }

    //Encrypts a word
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


    //Begins the vigenere process
    vigenere.start = function(){
      vigenere.setMatrix();
      var temp = vigenere.search(19,7);
      //return temp;
    }



  //Calculates the coordinates for input word
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

  //Searches through the array and retursn what's at the desired point
  vigenere.search = function(x, y){
    return myarr[x][y];
  }


  //Creates the matrix
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