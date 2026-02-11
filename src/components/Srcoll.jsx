import React from "react";

const Srcoll = () => {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  });
  els.forEach((el) => io.observe(el));
  return (
    <div>
      <section class="h-screen">
        <div
          class="animate-reveal
        [animation-timeline:view()]
        [animation-range:entry_20%_cover_40%]"
        >
          <div class="reveal opacity-0 translate-y-10 transition-all duration-700">
            Hello
          </div>
          <ul>
            <li class="reveal delay-0">One</li>
            <li class="reveal delay-150">Two</li>
            <li class="reveal delay-300">Three</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Srcoll;
