gsap.fromTo(
    ".run",
    { x: "100vw" }, 
    { x: "-100vw", duration: 2, repeat: -1, ease: "linear" } 
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

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#sun", {
    motionPath: {
        // use svg path
        path: "#sunPath", 
        // align the sun along the path
        align: "#sunPath", 
        alignOrigin: [0.5, 0.5],
        autoRotate: false, 
    },
    duration: 4, 
    ease: "power1.inOut",
    repeat: -1, 
    yoyo: true, 
});



function createCloud() {
    // create new div
    const cloud = document.createElement("div"); 
    // add cloud class
    cloud.classList.add("cloud"); 
    // cloud emoji
    cloud.innerText = "☁️";

    // randomize starting position and size 
    let randomTop = Math.random() * 150; // Clouds appear between 0-150px from the top
    // cloud size variation 1x to 3x
    let randomSize = Math.random() * 2 + 1;

    // start at random top
    cloud.style.top = `${randomTop}px`;
    // start off-screen left
    cloud.style.left = "-100px";
    // random sizing
    cloud.style.transform = `scale(${randomSize})`;

    // add cloud to page
    document.body.appendChild(cloud);

    // cloud animation
    gsap.to(cloud, {
        // move fully across screen
        x: "110vw", 
        opacity: 0, 
        // random speed, 4s to 7s
        duration: Math.random() * 3 + 4, 
        ease: "linear",

        // onComplete is spec to gsap
        onComplete: () => {
            cloud.remove(); 
        }
    });
}

// function to generate clouds at random intervals
function startClouds() {
    setInterval(() => { 
        createCloud();
        // random interval 2s to 5s
    }, Math.random() * 3000 + 2000); 
}


startClouds();
