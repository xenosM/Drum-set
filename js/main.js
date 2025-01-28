import * as sound from "./sounds.js";
import { playAudio, animateDrumstick } from "./utils.js";

//*Vercel speed tester
import { injectSpeedInsights } from "@vercel/speed-insights";
injectSpeedInsights();

//*VARIABLE DECLARATION
//*DOM elements
const volumeInput = document.querySelector("#volume-range");
const volumeIndicator = document.querySelector("#volume-indicator");
//*Drumsticks
const drumstickHihat = document.querySelector(".drumstick-hihat");
const drumstickCrash = document.querySelector(".drumstick-crash");
const drumstickSnare = document.querySelector(".drumstick-snare");
const drumstickHighTom = document.querySelector(".drumstick-high-tom");
const drumstickLowTom = document.querySelector(".drumstick-low-tom");
const drumstickRide = document.querySelector(".drumstick-ride");
const drumstickFloorTom = document.querySelector(".drumstick-floor-tom");

//*Variables
let volume = 1;

//*Play sound on key press
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  e.stopPropagation();
  switch (key) {
    case "a":
      playAudio(sound.hihat, volume);
      animateDrumstick(drumstickHihat, "hihat");
      break;

    case "s":
      playAudio(sound.crash, volume);
      animateDrumstick(drumstickCrash, "crash");
      break;
    case "d":
      playAudio(sound.snare, volume);
      animateDrumstick(drumstickSnare, "snare");
      break;
    case "f":
      playAudio(sound.highTom, volume);
      animateDrumstick(drumstickHighTom, "high-tom");
      break;
    case "h":
      playAudio(sound.bass, volume);
      break;

    case "j":
      playAudio(sound.lowTom, volume);
      animateDrumstick(drumstickLowTom, "low-tom");
      break;
    case "k":
      sound.ride.currentTime = 0.1;
      playAudio(sound.ride, volume);
      animateDrumstick(drumstickRide, "ride");
      break;
    case "l":
      playAudio(sound.floorTom, volume);
      animateDrumstick(drumstickFloorTom, "floor-tom");
      break;
  }
});
//*Change the volume
volumeInput.addEventListener("change", (e) => {
  volume = e.target.value / 10;
  volumeIndicator.innerText = `${e.target.value * 10}%`;
});
