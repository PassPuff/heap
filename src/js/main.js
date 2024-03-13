gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".js-heap-wrapper",
    pin: true,
    start: "top top",
    end: "bottom top",
    //endTrigger: ".js-heap-item",
    scrub: 1,
    ease: "linear"
    //markers: true
  }
});

tl.to(".js-heap-item .heap__text", {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: 0.5
});

tl.to(
  ".js-heap-item",
  {
    marginBottom: -15,
    scale: 0.9,
    stagger: 0.5
  },
  "<" // indicates that this animation should start before the previous one finishes
);
