function delay (n){
    n = n || 4000
    return new Promise(done => {
        setTimeout(()=>{
            done()
        }, n)
    })
}

const animatingDiv = document.querySelector(".animating-div")
const animatingContent = document.querySelector(".animating-content")

function leaveTransitionIndex(){
    const tl = gsap.timeline()
    tl.fromTo(animatingDiv, .7, {clipPath: "inset(0% 0% 0% 100%)"}, {clipPath: "inset(0% 0% 0% 0%)", ease: Power2.easeInOut})
        .to(animatingDiv, .7, {clipPath: "inset(0% 100% 0% 0%)", clearProps: "all", ease: Power2.easeInOut, onComplete: () => {
            animatingDiv.style.backgroundColor = "skyBlue"
            animatingContent.style.backgroundColor = "seaGreen"
        }}, "+=.7")
    return tl
}

function leaveTransitionAbout(){
    const tl = gsap.timeline()
    tl.fromTo(animatingDiv, .7, {clipPath: "inset(0% 100% 0% 0%)"}, {clipPath: "inset(0% 0% 0% 0%)", ease: Power2.easeInOut})
        .to(animatingDiv, .7, {clipPath: "inset(0% 0% 0% 100%)", clearProps: "all", ease: Power2.easeInOut, onComplete: () => {
            animatingDiv.style.backgroundColor = "seaGreen"
            animatingContent.style.backgroundColor = "skyBlue"
        }}, "+=.7")
    return tl
}


barba.init({
    transitions: [
        {
            to:{
                namespace: ["index"]
            },
            async leave(data){
                const done = this.async()
                    leaveTransitionAbout()
                
                await delay(700)
                done()
            }
        },{   
            to: {
                namespace: ["about"]
            },
            async leave(data){
                const done = this.async()
                    leaveTransitionIndex()
                await delay(700)
                done()
            }
        }
    ]
})