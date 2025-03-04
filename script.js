gsap.fromTo(
    ".run",
    { x: "100vw" }, 
    { x: "-100vw", duration: 3, repeat: -1, ease: "linear" } 
);

gsap.to(".cloud", {
    x: "100vw", 
    opacity: 0, 
    duration: 5, 
    repeat: -1,
    scrollTrigger: {
        trigger: ".cloud", 
        start: "top center", 
        end: "top 100%", 
        scrub: true, 
    }
});