const keys = document.querySelectorAll(".key")

function playnote(event) {
    const keyCode = getKeyCode(event)
    const key = document.querySelector(`div[data-key="${keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    if (audio == null) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")
    console.log(key.classList)
}

function getKeyCode(event) {
    const eventType = event.type
    const keyCode = eventType == "click" ? event.target.dataset.key : event.keyCode
    return keyCode
}

function removeClassPlaying(event) {
    const key = event.target
    key.classList.remove("playing")
}

keys.forEach(function (key) {
    key.addEventListener("click", playnote)
    key.addEventListener("transitionend", removeClassPlaying)
})

window.addEventListener("keydown", playnote)
