var text = 21 + "Rachell";   // returns "21Rachell"
var text1 = "Rachell" + 21;  // returns "Rachell21"      
var text2 = 10 + 11 + "Rachell";   // returns "21Rachell"
var text3 = "Rachell" + 10 + 11;   // returns "Rachell1011"

document.getElementById("demo").innerHTML =
text + "<br>" + text1 + "<br>" + text2+ "<br>" + text3;
