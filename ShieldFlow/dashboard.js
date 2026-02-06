gsap.registerPlugin(ScrollTrigger);


gsap.from(".metrics .card", {
  y:50,
  opacity:0,
  duration:0.8,
  stagger:0.2,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".metrics",
    start:"top 80%",
    toggleActions:"play reverse play reverse"
  }
});


gsap.from(".charts .chart-card", {
  y:50,
  opacity:0,
  duration:0.8,
  stagger:0.2,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".charts",
    start:"top 80%",
    toggleActions:"play reverse play reverse"
  }
});


function animateValue(id, end, duration) {
  let start = 0;
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);

  let timer = setInterval(function () {
    current += increment;
    obj.textContent = current + (id === "uptime" ? "%" : "");
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("uptime", 99, 2000);
animateValue("alerts", 12, 2000);
animateValue("risk", 7, 2000);
