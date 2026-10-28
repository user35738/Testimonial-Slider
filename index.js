const testimonials = [
  {
    name: "Cherise G",
    role: "Product Designer",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    role: "Marketing Lead",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=300&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    role: "Startup Founder",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=300&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

const DURATION = 7000; // ms per testimonial

const slider = document.querySelector(".slider");
const stage = document.querySelector(".stage");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
const roleEl = document.querySelector(".role");
const avatarsEl = document.getElementById("avatars");

let idx = 0;
let timer = null;
let remaining = DURATION;
let startedAt = 0;

document.documentElement.style.setProperty("--duration", DURATION + "ms");

// Build avatar buttons (each with its own progress ring)
testimonials.forEach((t, i) => {
  const btn = document.createElement("button");
  btn.className = "avatar";
  btn.setAttribute("aria-label", `Show testimonial from ${t.name}`);
  btn.innerHTML = `
    <img src="${t.photoUrl}" alt="" />
    <svg class="ring" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28"></circle></svg>`;
  btn.addEventListener("click", () => show(i));
  avatarsEl.appendChild(btn);
});
const avatarEls = [...avatarsEl.children];

function show(i, animate = true) {
  idx = (i + testimonials.length) % testimonials.length;
  clearTimeout(timer);

  const render = () => {
    const { name, role, text } = testimonials[idx];
    textEl.textContent = text;
    usernameEl.textContent = name;
    roleEl.textContent = role;
    stage.classList.remove("is-leaving");
  };

  if (animate) {
    stage.classList.add("is-leaving");
    setTimeout(render, 350);
  } else {
    render();
  }

  // restart the progress ring on the active avatar
  avatarEls.forEach((el, n) => {
    el.classList.remove("active");
    el.removeAttribute("aria-current");
    if (n === idx) {
      void el.offsetWidth; // force reflow so the animation restarts
      el.classList.add("active");
      el.setAttribute("aria-current", "true");
    }
  });

  remaining = DURATION;
  startedAt = Date.now();
  timer = setTimeout(() => show(idx + 1), DURATION);
}

// Arrows
document.getElementById("prev").addEventListener("click", () => show(idx - 1));
document.getElementById("next").addEventListener("click", () => show(idx + 1));

// Keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") show(idx - 1);
  if (e.key === "ArrowRight") show(idx + 1);
});

// Swipe on touch devices
let startX = 0;
slider.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
slider.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 50) show(dx < 0 ? idx + 1 : idx - 1);
});

// Pause autoplay on hover (the ring pauses too, then both resume together)
slider.addEventListener("mouseenter", () => {
  slider.classList.add("paused");
  clearTimeout(timer);
  remaining -= Date.now() - startedAt;
});
slider.addEventListener("mouseleave", () => {
  slider.classList.remove("paused");
  startedAt = Date.now();
  timer = setTimeout(() => show(idx + 1), remaining);
});

show(0, false);
