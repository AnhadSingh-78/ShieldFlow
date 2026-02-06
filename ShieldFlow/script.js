gsap.registerPlugin(ScrollTrigger);


gsap.fromTo(".hero h1",{y:50, opacity:0},{y:0, opacity:1, duration:1, ease:"power3.out", scrollTrigger:{trigger:".hero", start:"top 80%", toggleActions:"play reverse play reverse"}});
gsap.fromTo(".hero h2",{y:50, opacity:0},{y:0, opacity:1, duration:1, delay:0.2, ease:"power3.out", scrollTrigger:{trigger:".hero", start:"top 80%", toggleActions:"play reverse play reverse"}});
gsap.fromTo(".hero h3",{y:50, opacity:0},{y:0, opacity:1, duration:1, delay:0.4, ease:"power3.out", scrollTrigger:{trigger:".hero", start:"top 80%", toggleActions:"play reverse play reverse"}});
gsap.fromTo(".cta-btn",{scale:0.8},{scale:1,duration:0.8,delay:0.6,ease:"back.out(1.7)", scrollTrigger:{trigger:".hero", start:"top 80%", toggleActions:"play reverse play reverse"}});


gsap.fromTo(".step-card",{y:50, opacity:0},{y:0, opacity:1, duration:1, stagger:0.2, ease:"power3.out", scrollTrigger:{trigger:".steps", start:"top 80%", toggleActions:"play reverse play reverse"}});


gsap.fromTo(".feature-card",{y:50, opacity:0},{y:0, opacity:1, duration:1, stagger:0.15, ease:"power3.out", scrollTrigger:{trigger:".features", start:"top 80%", toggleActions:"play reverse play reverse"}});


gsap.fromTo(".trust-item",{y:50, opacity:0},{y:0, opacity:1, duration:1, stagger:0.2, ease:"power3.out", scrollTrigger:{trigger:".trust", start:"top 80%", toggleActions:"play reverse play reverse"}});


const counters = document.querySelectorAll(".trust-number");
counters.forEach(counter => {
  const target = parseFloat(counter.getAttribute("data-target"));
  ScrollTrigger.create({
    trigger: counter,
    start: "top 80%",
    onEnter: () => {
      if(isNaN(target)) return; 
      gsap.to(counter, {innerText: target, duration: 1.5, snap:{innerText:1}, ease:"power1.in"});
    }
  });
});
