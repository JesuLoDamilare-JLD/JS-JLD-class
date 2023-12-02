document.querySelector("h1").innerHTML = "Most Popular Jude and Daniel";
document.getElementById("fourth").innerHTML = "JLD Aveo Plus Ventures";
document.getElementsByClassName("slytherin")[0].innerHTML = "Give me a name";
document.getElementsByTagName("li")[0].innerHTML =
  "What do I want to change it to?";
document.body.style.backgroundColor = "green";
document.querySelector("h1").style.fontFamily = "Roboto";

let newAdd = document.createElement("li");
newAdd.id = "vespa";
newAdd.innerHTML = "I love coding";
document.getElementById("italy-attractions").appendChild(newAdd);
