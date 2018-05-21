var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var mainBackground = document.getElementById("background");
var currentBackground = document.getElementById("gradient");
var randomButton = document.getElementById('button--random');

function generateRandomColor(){
   var colorString = "0123456789abcdef";
   var randomColor = "#";
   for (var i = 0; i <= 5; i++) {
     randomColor += colorString[Math.floor(Math.random() * 16)];
   }
   return randomColor;
}

function generateRandomBackground(event){
     var random1 = generateRandomColor();
     var random2 = generateRandomColor();
     color1.value = random1;
     color2.value = random2;
     generateGradient(event, random1, random2);
}

function generateGradient(event, col1, col2){
    col1 = typeof col1 !== 'undefined' ? col1 : color1.value;
    col2 = typeof col2 !== 'undefined' ? col2 : color2.value;
    var backgroundValue = "linear-gradient(to right, " + col1 + ", " + col2 + ")"; 
    mainBackground.style.background = backgroundValue;
    currentBackground.innerText = "background: " + backgroundValue + ";";
}

color1.addEventListener("input", generateGradient);
color2.addEventListener("input", generateGradient);
document.addEventListener("DOMContentLoaded", generateGradient);
randomButton.addEventListener("click", generateRandomBackground);
