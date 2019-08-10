export var adfgvx = (function () {

    function adfgvx() {
    }
    
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let myarr = [];
    adfgvx.generateKey = function (str, key) {
        var x = str.length;
        for (var i = 0;; i++) {
            {
                if (x === i)
                    i = 0;
                if (key.length === str.length)
                    break;
                key += (key.charAt(i));
            }
            ;
        }
        return key;
    };


var x;
var y;
var target;
adfgvx.search = function(search)
{
  target = search;
  adfgvx.createThings("hello");
  if (search[1] === 'A')
  {
    x = 0;
  }
  else if (search[1] === 'D')
  {
    x = 1;
  }
  else if (search[1] === 'F')
  {
    x = 2;
  }
  else if (search[1] === 'G')
  {
    x = 3;
  }
  else if (search[1] === 'V')
  {
    x = 4;
  }
  else if (search[1] === 'X')
  {
    x = 5;
  }



  if (search[0] === 'A')
  {
    y = 0;
  }
  else if (search[0] === 'D')
  {
    y = 1;
  }
  else if (search[0] === 'F')
  {
    y = 2;
  }
  else if (search[0] === 'G')
  {
    y = 3;
  }
  else if (search[0] === 'V')
  {
    y = 4;
  }
  else if (search[0] === 'X')
  {
    y = 5;
  }

  return(myarr[x][y])
}

var kword;
adfgvx.keyword = function(){
return kword;
}

adfgvx.searchValue = function(){
return target;
}



adfgvx.createThings = function(keyword){
//var myarr = tSquare.generateMatrix(6,6);
kword = keyword;
var temp1 = 0;
var temp2 = 0;
var temp3 = 0;
var truth = 0;

for(let a=0; a <= 6; a++){
  let row = []
  for(let b=0; b <= 6; b++){
      var col;
      truth = 0;
      if (temp1 < keyword.length)
      {
        truth = 0;
        col = keyword[temp1];
        for(let i=0; i < temp1 && truth === 0; ++i)
        {
         if (keyword[temp1] === keyword[i] || keyword[temp1] === 'i')
          {
            while (keyword[temp1] === keyword[i] || keyword[temp1] === 'i' || keyword[temp1] === keyword[temp1-1])
            {
              ++temp1;
            }
            col = keyword[temp1];
            truth = 1;
          }
        }
        ++temp1;
      }
      else if (temp2 <= alphabet.length)
      {
        col = alphabet[temp2];
        truth = 0;
        for(let i=0; i < keyword.length && truth === 0; ++i){
          if (alphabet[temp2] === keyword[i] && temp2 < 26)
          {
            ++temp2;
            col = alphabet[temp2];
            truth = 1;
          }
        }
        ++temp2;
      }
      else
      {
        col = numbers[temp3]
        ++temp3;
      }
      row.push(col);
    }
    myarr.push(row);
  }
  return myarr;
}



  adfgvx.generateMatrix = function(rowCount, colCount){
  let myarr = []
  for(let i=0; i < rowCount; i++){
    let row = []
    let col = 1;
    for(let j=0; j < colCount; j++){
      row.push(col);
    }
    myarr.push(row);
  }
  return myarr;
}




    adfgvx.main = function (args) {
    };
    return adfgvx;
}());

adfgvx["__class"] = "adfgvx";
adfgvx.main(null);