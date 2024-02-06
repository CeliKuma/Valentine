"use strict";

//gets gifs
let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");
let gif3 = document.getElementById("gif3");
let gif4 = document.getElementById("gif4");
let gif5 = document.getElementById("gif5");
//gets buttons
let button1 = document.getElementById("yesButton");//gets button 1 id
let button2 = document.getElementById("noButton");//gets button 2 id
let button3 = document.getElementById("yes2Button");
let button4 = document.getElementById("nvmButton");

function gifSwitcher(element){
    let gif = document.querySelector("#switcher .currentGif");//gets the current item in the switcher section
    gif.classList.remove("currentGif");//class "currentItem" is removed from the current product matching the id
    gif.classList.add("hiddenGif");//"hiddenItem" class is added, hiding the recent "currentItem" product
    //displays item
    element.classList.remove("hiddenGif");
    element.classList.add("currentGif"); //product that is passed has the "currentItem" id added, displaying the item
    //hides both buttons if either yes or no is selected
    button1.classList.add("hiddenGif");
    button2.classList.add("hiddenGif");

    if(element == gif3){
        button3.classList.add("currentGif");
        button4.classList.add("currentGif");
    }
    if(element == gif4){
        button3.classList.remove("currentGif");
        button3.classList.add("hiddenGif");
    }
    if(element == gif5){
        button3.classList.remove("currentGif");
        button3.classList.add("hiddenGif");
        button4.classList.remove("currentGif");
        button4.classList.add("hiddenGif");
    }
}


button1.addEventListener("click", function() { //when button is clicked, function "productSwitcher" is called and passes the "product1" element
    gifSwitcher(gif2);
});
button2.addEventListener("click", function() { //when button is clicked, function "gifSwitcher" is called and passes the "gif3" element
    gifSwitcher(gif3);
});
button3.addEventListener("click", function() { 
    gifSwitcher(gif4);
});
button4.addEventListener("click", function() { 
    gifSwitcher(gif5);
});