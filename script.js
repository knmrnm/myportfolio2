/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* =========================
   HERO PARALLAX
========================= */

const heroBackground =
  document.querySelector(".hero-background");

window.addEventListener("scroll", () => {

  const scrollPosition = window.scrollY;

  if (scrollPosition < window.innerHeight) {

    heroBackground.style.transform =
      `scale(1.05) translateY(${scrollPosition * 0.12}px)`;

  }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================
   AVAILABILITY POPUP
========================= */

const popup =
  document.getElementById("availabilityPopup");

const popupClose =
  document.getElementById("popupClose");


if (!sessionStorage.getItem("availabilityPopupClosed")) {

  setTimeout(() => {

    popup.classList.add("show");

  }, 5000);

}


popupClose.addEventListener("click", () => {

  popup.classList.remove("show");

  sessionStorage.setItem(
    "availabilityPopupClosed",
    "true"
  );

});
