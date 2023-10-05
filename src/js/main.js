import { gsap, ScrollTrigger } from "gsap/all";

import { openAccordion } from "./components/Accordion";

gsap.registerPlugin(ScrollTrigger);

const scrollAnimations = () => {
  gsap.utils.toArray(".c-benefit").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      end: "bottom",
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

openAccordion();
