const burgerBtn = document.querySelector(".burger-button");
const navigationLinks = document.querySelector(".navigation-links");
const navigationLinksAnchor = document.querySelectorAll(".navigation-link");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active-burger");
  navigationLinks.classList.toggle("active-navigation");
  if (burgerBtn.classList.contains("active-burger")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});

navigationLinksAnchor.forEach((e) => {
  e.addEventListener("click", () => {
    burgerBtn.classList.toggle("active-burger");
    navigationLinks.classList.toggle("active-navigation");
    if (burgerBtn.classList.contains("active-burger")) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  });
});

// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");
const header = document.querySelector(".header");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      header.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      header.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-78px",
  }
);
observer.observe(sectionHeroEl);
