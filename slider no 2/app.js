
// inital settings
function init(){

  // welcome to the projects gallery
  gsap.set(".slide02, .slide03", {autoAlpha: 0})

  let currentStep = 1
  const totalSlides = document.querySelectorAll(".slide").length
  const wrapper = gsap.utils.wrap(1, totalSlides + 1)



  
  function createTimelineIn(direction, index){
      const goPrev = direction === "prev"
      console.log('in', index)

      const element = document.querySelector(".slide0"+ index)

      const tlIn = gsap.timeline()
      tlIn.fromTo(element,
          {
              autoAlpha: 0, x: 250
          },
          {
              duration: 0.7, autoAlpha:1, x: 0,
              ease: Power4.easeInOut,
              modifiers: {
                  x: gsap.utils.unitize(function(x){
                      return goPrev ? -x : x
                  })
              }, clearProps: "all"
          })
      
  }

  function createTimelineOut(direction, index){
    console.log('out', index)
    const element = document.querySelector(".slide0"+ index)
    console.log("element", element)

      const tlOut = gsap.timeline()
      tlOut.to(element, 0.7, 
          {
              autoAlpha: 0,
          })
      return tlOut
  }


  function updateCurrentStep(goToIndex){
      currentStep = goToIndex
      document.querySelectorAll(".dot").forEach((dot, index) => {
          dot.setAttribute("class", "dot")
          if(index + 1 === currentStep){
              dot.classList.add("active")
          }
      })

  }
  
  function transition(direction, toIndex){

      const tlTransition = gsap.timeline({
          onStart: function(){
              updateCurrentStep(toIndex)
          }
      })
      const tlIn = createTimelineIn(direction, toIndex)
      const tlOut = createTimelineOut(direction, currentStep)
      tlTransition
          .add(tlOut)
          .add(tlIn, "-=0.5")
      
      return tlTransition
  }


  function isTweening(){
      return gsap.isTweening('.slide')
  }

  document.querySelector(".next").addEventListener("click", (e) => {
      e.preventDefault()
      const nextStep = wrapper(currentStep + 1)


      !isTweening() && transition("next", nextStep)
  })

  document.querySelector(".prev").addEventListener("click", (e) => {
      e.preventDefault()
      const prevStep =  wrapper(currentStep - 1)
      console.log(prevStep)

      !isTweening() && transition("prev", prevStep)
  })

  function createNavigation() {
      const dots = document.querySelector(".dots")


      for (let index = 1; index < totalSlides + 1; index++){
          const element = document.createElement("button")
          const text = document.createTextNode(index)
          element.appendChild(text)
          element.setAttribute("class", "dot")
          if(currentStep === index){
              element.classList.add("active")
          }
          element.addEventListener("click", function(){
              if(!isTweening() && currentStep !== index){
                  const direction = index > currentStep ? "next" : "prev"
                  transition(direction, index)
              }
              
          })
          dots.appendChild(element)
      }
  }


  createNavigation()

}

window.onload = () => {
    init()
}

