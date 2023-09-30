import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const scrollAnimations = () => {
  gsap.utils.toArray(".c-benefit").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });
};

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 768px)": function () {
    scrollAnimations();
  },
});
