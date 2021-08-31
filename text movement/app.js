// init controller
let controller = new ScrollMagic.Controller()

// tween
let textMovement = new TimelineMax()

textMovement
    .fromTo(".text-1" , 3, { x: window.innerWidth}, {x: -window.innerWidth, ease: Power0.easeNone}, 0)
    .fromTo(".text-2" , 3, { x: -window.innerWidth}, {x: window.innerWidth, ease: Power0.easeNone}, 0)


let textAnimation = new ScrollMagic.Scene({
    triggerElement: "#two",
    triggerHook: 0.8,
    duration: "100%"
})
.setTween(textMovement)
.addIndicators()
.addTo(controller)