
gsap.registerPlugin(ScrollTrigger)


const articles = document.querySelectorAll("article")
const number = document.querySelector(".number")
const numberBefore = document.querySelector(".number-before")
console.log(number)

function addTween(n){
    const tween = gsap.timeline()
    tween.fromTo(number, .5,  {x: "0%", rotate: 0},{x: "130%", rotate: 20,  ease: Power3.easeIn, onComplete: function(){
        number.setAttribute("data-chars", `${n}`)
        number.innerHTML = n
    }})
    .fromTo(numberBefore, .5,  {x: "0%", rotate: 0},{x: "130%", rotate: 20,  ease: Power3.easeIn, onComplete: function(){
        numberBefore.innerHTML = n
    }}, "-=0.45")

    .to(number, .5, {x: "0%", rotate: 0})
    .to(numberBefore, .5, {x: "0%", rotate: 0}, "-=0.45")
}


function sliderTween(){
    const sliderTween = gsap.timeline()
    sliderTween.to(".slider-container", 0.6, {clipPath: "inset(0% 0% 0% 0%)",  ease: Power3.easeInOut})
    .to(".moving-div", 0.6, {clipPath: "inset(0% 0% 0% 100%)",  ease: Power3.easeInOut})
    return sliderTween
}


articles.forEach((article, index) => {
    ScrollTrigger.create({
        trigger: article,
        start: "top 200px",
        onEnter(){
            addTween(index + 1)
        },
        onEnterBack(){
            addTween(index + 1)
        }
    })
})


ScrollTrigger.create({
    trigger: ".slider-section",
    markers: true,
    start: "top 200px",
    onEnter(){
        sliderTween()
    }

})

