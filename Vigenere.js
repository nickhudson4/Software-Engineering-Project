export var GFG = (function () {

    function GFG() {
    }
    
    GFG.generateKey = function (str, key) {
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

    GFG.cipherText = function (str, key) {
        var cipher_text = "";
        for (var i = 0; i < str.length; i++) {
            {
                var x = ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i)) + (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(key.charAt(i))) % 26;
                x += ('A').charCodeAt(0);
                cipher_text += String.fromCharCode((x));
            }
            ;
        }
        return cipher_text;
    };


    GFG.originalText = function (cipher_text, key) {
        var orig_text = "";
        for (var i = 0; i < cipher_text.length && i < key.length; i++) {
            {
                var x = ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(cipher_text.charAt(i)) - (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(key.charAt(i)) + 26) % 26;
                x += ('A').charCodeAt(0);
                orig_text += String.fromCharCode((x));
            }
            ;
        }
        return orig_text;
    };


     GFG.ciText = function (str) {
        var keyword = "AYUSH";
        var key = GFG.generateKey(str, keyword);
        var ctext = GFG.cipherText(str, key);
        return ctext;
      };


      GFG.ciKey = function (str) {
        var keyword = "AYUSH";
        var key = GFG.generateKey(str, keyword);
        return key;
      };

       GFG.ciKeyword = function (str) {
        var keyword = "AYUSH";
        return keyword;
      };




    GFG.main = function (args) {
        var str = "GEEKSFORGEEKS";
        var keyword = "AYUSH";
        var key = GFG.generateKey(str, keyword);
        var cipher_text = GFG.cipherText(str, key);
        console.info("Ciphertext : " + cipher_text + "\n");
        console.info("Original/Decrypted Text : " + GFG.originalText(cipher_text, key));
    };
    return GFG;
}());

GFG["__class"] = "GFG";
GFG.main(null);