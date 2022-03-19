var x = document.querySelectorAll(".box").length;

for (let i = 0; i < x; i++) {
var click = document.querySelectorAll(".box")[i].addEventListener("click",playsong);  
}
for (let i = 0; i < x; i++) {
    var click = document.querySelectorAll(".box")[i].addEventListener("dblclick",pausesong);  
    }

var song1 = new Audio();
song1.src = "Music01.mp3"

var song2 = new Audio();
song2.src = "Music02.mp3"

var song3 = new Audio();
song3.src = "Music03.mp3"

var song4 = new Audio();
song4.src = "Music04.mp3"

var song5 = new Audio();
song5.src = "Music05.mp3"

var song6 = new Audio();
song6.src = "Music06.mp3"

var song7 = new Audio();
song7.src = "Music07.mp3"

var song8 = new Audio();
song8.src = "Music08.mp3"

var song9 = new Audio();
song9.src = "Music09.mp3"

var songnumber = this.innerHTML;


function playsong(){
    var songnumber = this.innerHTML;

    switch (songnumber) {
        case "a":
            song1.play();
            break;
        case "b":
            song2.play();
            break;
        case "c":
            song3.play();
            break;
        case "d":
            song4.play();
            break;
        case "e":
            song5.play();
            break;
        case "f":
            song6.play();
            break;
        case "g":
            song7.play();
            break;
        case "h":
            song8.play();
            break;
        case "i":
            song8.play();
            break;
            
    }
}

function pausesong(){
    var songnumber = this.innerHTML;

    switch (songnumber) {
        case "a":
            song1.pause();
            break;
        case "b":
            song2.pause();
            break;
        case "c":
            song3.pause();
            break;
        case "d":
            song4.pause();
            break;
        case "e":
            song5.pause();
            break;
        case "f":
            song6.pause();
            break;
        case "g":
            song7.pause();
            break;
        case "h":
            song8.pause();
            break;
        case "i":
            song8.pause();
            break;
            
    }
}