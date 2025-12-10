const topLeft = document.querySelector(".red");
const topRight = document.querySelector(".green");
const bottomLeft = document.querySelector(".blue");
const bottomRight = document.querySelector(".yellow");


function animateSquares() {
  let master = gsap.timeline();
  
  master.to(topLeft, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  }, 0)
  .to(topRight, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  }, 0)
  .to(bottomLeft, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  }, 0)
  .to(bottomRight, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  }, 0)
  .to(topLeft, {
    x: "-100%",
    left: "100vw",
    duration: 1.2,
    backgroundColor: "green",
    borderRadius: "50%",
  }, 1.2)
  .to(topRight, {
    y: "-100%",
    top: "100vh",
    duration: 1.2,
    backgroundColor: "blue",
    borderRadius: "50%",
  }, 1.2)
  .to(bottomLeft, {
    x: 0,
    left: 0,
    backgroundColor: "yellow",
    borderRadius: "50%",
    duration: 1.2,
  }, 1.2)
  .to(bottomRight, {
    y: 0,
    top: 0,
    backgroundColor: "red",
    borderRadius: "50%",
    duration: 1.2,
  }, 1.2)
  .to(topLeft, {
    x: 0,
    left: "100vw",
    duration: 1.2,
  }, 2.4)
  .to(topRight, {
    x: 0,
    left: "100vw",
    duration: 1.2,
  }, 2.4)
  .to(bottomLeft, {
    x: "-100%",
    left: 0,
    duration: 1.2,
  }, 2.4)
  .to(bottomRight, {
    x: "-100%",
    top: 0,
    duration: 1.2,
  }, 2.4);
}

animateSquares();