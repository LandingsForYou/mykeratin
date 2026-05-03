const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});
const open = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

open.onclick = () => modal.classList.add("active");
close.onclick = () => modal.classList.remove("active");

modal.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("active");
};
const track = document.querySelector(".modules-track");
const prev = document.querySelector(".modules-nav.prev");
const next = document.querySelector(".modules-nav.next");

const slide = () => {
  const card = track.querySelector(".module");
  return card.offsetWidth + 30;
};

next.onclick = () => {
  track.scrollLeft += slide();
};

prev.onclick = () => {
  track.scrollLeft -= slide();
};

const whyItems = document.querySelectorAll(".why-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".why-item");

        items.forEach((item, i) => {
          setTimeout(() => {
            item.style.transition = "0.6s";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, i * 200);
        });

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

observer.observe(document.querySelector(".why-list"));

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

reveals.forEach((el) => revealObserver.observe(el));
