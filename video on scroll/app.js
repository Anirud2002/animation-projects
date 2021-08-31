const video = document.querySelector("video")
const intro = document.querySelector("#intro")
const controller = new ScrollMagic.Controller()

gsap.set("#intro", {force3D: true})

const scene = new ScrollMagic.Scene({
    triggerElement: "#intro",
    triggerHook: 0,
    duration: "1600"

}).setPin("#intro")
.addTo(controller)


let scrollpos = 0


scene.on("update", e => {
    scrollpos = e.scrollPos / 500  
})


setInterval(() => {
        video.currentTime = scrollpos
}, 100)