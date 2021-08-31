
const svg = document.querySelector(".svgs")
var randomPosx = gsap.utils.random(-svg.clientWidth/2, svg.clientWidth/2, true);
var randomPosy = gsap.utils.random(-svg.clientHeight/2, svg.clientHeight/2, true);
var randomRotate = gsap.utils.random(0, 180, true);

gsap.registerPlugin(MotionPathPlugin)

gsap.set(".moving-path1", {x: 220, y:-30, rotate: 60})
gsap.set(".moving-path2", {x: 40, y:100, rotate: 180})
gsap.set(".moving-path3", {x: -21, y:0, rotate: 45})
gsap.set(".moving-path4", {x: 0, y:0, rotate: -23})
gsap.set(".moving-path5", {x: -125, y:105, rotate: 170})
gsap.set(".moving-path6", {x: 160, y: -65, rotate: -120})
gsap.set(".moving-path7", {x: -40, y: 40, rotate: 90})
gsap.set(".moving-path8", {x: 90, y: 85, rotate: -90})
gsap.set(".moving-path9", {x: -25, y: -30, rotate: 0})


const tl = new TimelineLite({repeat: -1, repeatDelay: 0})
gsap.to(".c1", 4, {ease: Back.easeInOut, repeat: -1, motionPath: {
  path: "#moving-path1",
  align: "#moving-path1",
}})
gsap.to(".c2", 5, {ease: Circ.easeOut, repeat: -1,  motionPath: {
  path: "#moving-path2",
  align: "#moving-path2",
}})
gsap.to(".c3", 7, {ease: Bounce.easeInOut, repeat: -1,  motionPath: {
  path: "#moving-path3",
  align: "#moving-path3",
}})
gsap.to(".t1", 4, {ease: Circ.easeOut, repeat: -1, rotate: 360, motionPath: {
  path: "#moving-path4",
  align: "#moving-path4",
}})
gsap.to(".t2",5, {ease: Circ.easeOut, repeat: -1, scale: 2,  motionPath: {
  path: "#moving-path5",
  align: "#moving-path5",
}})
gsap.to(".t3", 7, {ease: Circ.easeOut, repeat: -1,  motionPath: {
  path: "#moving-path6",
  align: "#moving-path6",
}})
gsap.to(".s1", 4, {ease: Circ.easeOut, repeat: -1,scale: 3, rotate: 360, motionPath: {
  path: "#moving-path7",
  align: "#moving-path7",
}})
gsap.to(".s2", 5, {ease: Circ.easeOut, repeat: -1,  motionPath: {
  path: "#moving-path8",
  align: "#moving-path8",
}})
gsap.to(".cy1", 7, {ease:Circ.easeOut, repeat: -1,  motionPath: {
  path: "#moving-path9",
  align: "#moving-path9",
}})


