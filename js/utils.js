// const leftDrumstick = document.querySelector('.drumstick-default-left')
// const rightDrumstick = document.querySelector('.drumstick-default-right')
const drumsticks = document.querySelectorAll('.drumsticks')

export function playAudio(audio,volume){
    audio.currentTime = 0
    audio.volume = volume
    audio.play()
}
export function animateDrumstick(element,partName){
    element.classList.remove(`${partName}-drumstick-animation`)
    element.classList.add(`${partName}-drumstick-animation`)
    setOpacity(element)
    setTimeout(()=>{
        element.classList.remove(`${partName}-drumstick-animation`);
    },100)
}
function setOpacity(element){
    drumsticks.forEach(drumstick=>{
        console.log("drumstick",drumstick)
        console.log(element)
        console.log(drumstick == element);
        drumstick == element
          ? (drumstick.style.opacity = 1)
          : (drumstick.style.opacity = 0);
    })
}