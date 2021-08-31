function init(){
    gsap.set(".slide", {autoAlpha: 0})
    gsap.set(".slide.active", {autoAlpha: 1})
    gsap.set(".fading-heading h1", {autoAlpha: 0})
    gsap.set(".fading-heading h1.active", {autoAlpha: 1})

}

init()


// variables

let navBtns = $(".nav-circles button"),
    slides = $(".slide")



navBtns.on("click", e =>{
    let sectionFrom = $(".slide.active"),
        sectionToID = $(e.target).attr("id"),
        sectionTo = $("div" + sectionToID),
        btnTo = $(e.target).index()


    changeSlide(sectionFrom, sectionTo, btnTo)

})

function changeSlide(sectionFrom, sectionTo, btnTo){
    let fadeInOut = gsap.timeline({onComplete: changeActive(sectionFrom, sectionTo, btnTo)})
    fadeInOut
        .add("fade")
        .to(sectionFrom, 1, {autoAlpha: 0}, "fade")
        .to(sectionTo, 1, {autoAlpha:1}, "fade")



    function changeActive(sectionFrom, sectionTo, btnTo){

        let btnFrom = $(".nav-circles button.active")
        let h1From = $(".fading-heading h1.active")
        let h1To = $(".fading-heading").find("h1." + btnTo)
        console.log(h1To)

        let h1Tween = gsap.timeline({onComplete: changeh1Active(h1From, h1To)})
        h1Tween
            .to(h1From, 1, {autoAlpha: 0}, "0")
            .to(h1To, 1, {autoAlpha: 1}, "0")
            

        sectionFrom.removeClass("active")
        sectionTo.addClass("active")
        btnFrom.removeClass("active")
        navBtns.eq(btnTo).addClass("active")

        function changeh1Active(h1From, h1To){
            h1From.removeClass("active")
            h1To.addClass("active")
        }

    }
}