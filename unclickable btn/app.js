function init(){
    const movingBtn = document.querySelector(".moving-btn")
    console.log(movingBtn.clientWidth)
    let randomx = gsap.utils.random(0 - (movingBtn.clientWidth / 2), window.innerWidth - (movingBtn.clientWidth / 2), true)
    let randomy = gsap.utils.random(0 - (movingBtn.clientHeight / 2), window.innerHeight - (movingBtn.clientHeight / 2), true)
    
    gsap.set(movingBtn, {x: randomx, y: randomy})

    movingBtn.addEventListener("mouseover", () => {
        gsap.to(movingBtn, 0.5, {
            x: randomx,
            y: randomy,
            ease: Power3.ease
        })
    })
}

window.addEventListener("load", () => {
    init()
})