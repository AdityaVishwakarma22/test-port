// Horizaontal scroll ==========================================================================
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

// let mmobile = gsap.matchMedia();
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontalScroller",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".horizontalScroller").offsetWidth,
  },
});

// pinning start
const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
const photos = gsap.utils.toArray(".box:not(:first-child)");

gsap.set(photos, { yPercent: 101 });

const allPhotos = gsap.utils.toArray(".box");

let mm = gsap.matchMedia();

mm.add("(min-width: 600px)", () => {
  ScrollTrigger.create({
    trigger: ".gallery",
    start: "top",
    end: "bottom bottom",
    pin: ".right",
  });

  details.forEach((detail, index) => {
    let headline = detail.querySelector("h1");
    let animation = gsap
      .timeline()
      .to(photos[index], { yPercent: 0 })
      .set(allPhotos[index], { autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: headline,
      start: "top 80%",
      end: "bottom 50%",
      animation: animation,
      scrub: true,
      markers: false,
    });
  });
});

const contact = document.querySelector(".contact-btn");
contact.addEventListener("click", () => {
  window.open("https://calendly.com/interview-aditya/interview-aditya");
});
