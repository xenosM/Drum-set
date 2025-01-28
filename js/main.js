import * as sound from './sounds.js'
import { playAudio } from './utils.js'

//*VARIABLE DECLARATION
//*DOM elements
const volumeInput = document.querySelector('#volume-range')
const volumeIndicator = document.querySelector('#volume-indicator')

//*Variables
let volume=1;

//*Play sound on key press
document.addEventListener('keydown',e =>{
    const key = e.key.toLowerCase()
    e.stopPropagation()
    switch(key){
        case 'a':
            playAudio(sound.bass,volume)
        break;
        case 's':
            playAudio(sound.crash,volume)
        break;
        case 'd':
            playAudio(sound.floorTom,volume)
            break;
        case 'f':
            playAudio(sound.highTom,volume)
        break;
        case 'h':
            playAudio(sound.hihat,volume)
        break;
        case 'j':
            playAudio(sound.lowTom,volume)
        break;
        case 'k':
            sound.ride.currentTime =0.1
            playAudio(sound.ride,volume)
        break;
        case 'l':
            playAudio(sound.snare,volume)
    }
})
//*Change the volume
volumeInput.addEventListener('change',(e)=>{
    volume = e.target.value /10
    volumeIndicator.innerText = `${e.target.value*10}%`
})
