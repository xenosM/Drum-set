export function playAudio(audio,volume){
    audio.currentTime = 0
    audio.volume = volume
    audio.play()
}