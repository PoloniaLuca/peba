let playIT = 0;
let playEN = 0;

var audio_introduzione_ita = new Audio("audio/introduzione_it.mp3");
var audio_introduzione_en = new Audio("audio/introduzione_en.mp3");

function AudioIT(){
    if(playIT % 2 == 0){
        audio_introduzione_ita.play();
    }else{
        audio_introduzione_ita.pause();
    }
    
    playIT++;
}

function AudioEN(){
    if(playEN % 2 == 0){
        audio_introduzione_en.play();
    }else{
        audio_introduzione_en.pause();
    }   

    playEN++;
}