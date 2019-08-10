export var adfgx = (function () {

    function adfgx() {
    }
    
    var alphabet = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let myarr = [];

var x;
var y;
var target;
adfgx.search = function(search)
{
  target = search;
  adfgx.createThings("hello");
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
adfgx.keyword = function(){
return kword;
}

adfgx.searchValue = function(){
return target;
}



adfgx.createThings = function(keyword){
//var myarr = tSquare.generateMatrix(6,6);
kword = keyword;
var temp1 = 0;
var temp2 = 0;
var truth = 0;

for(let a=0; a <= 5; a++){
  let row = []
  for(let b=0; b <= 5; b++){
      var col;
      truth = 0;
      if (temp1 < keyword.length)
      {
        col = keyword[temp1];
        truth = 0;
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
      else
      {
        col = alphabet[temp2];
        truth = 0;
        for(let i=0; i < keyword.length && truth === 0; ++i){
          if (alphabet[temp2] === keyword[i] && temp2 < 25)
          {
            ++temp2;
            col = alphabet[temp2];
            truth = 1;
          }
        }
        ++temp2;
      }
      row.push(col);
    }
    myarr.push(row);
  }
  return myarr;
}



  adfgx.generateMatrix = function(rowCount, colCount){
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


    adfgx.main = function (args) {
    };
    return adfgx;
}());

adfgx["__class"] = "adfgx";
adfgx.main(null);