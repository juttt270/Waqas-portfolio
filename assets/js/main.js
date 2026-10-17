/* Waqas Munir — Portfolio
   Vanilla JS, no dependencies. Every feature is progressive enhancement:
   the page is fully usable without this file. */
(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const FORM_ENDPOINT = "https://formsubmit.co/ajax/waqaskamboh269@gmail.com";
  const FALLBACK_EMAIL = "waqaskamboh269@gmail.com";

  /* ---------- Footer year ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  const themeBtn = $("#themeToggle");
  const root = document.documentElement;

  function syncThemeLabel() {
    const isLight = root.dataset.theme === "light";
    themeBtn.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isLight ? "#f5f4ef" : "#09090b");
  }
  if (themeBtn) {
    syncThemeLabel();
    themeBtn.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (_) {
        /* storage blocked — theme still applies for this visit */
      }
      syncThemeLabel();
    });
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = $("#menuBtn");
  const mobileNav = $("#mobileNav");
  if (menuBtn && mobileNav) {
    const setMenu = (open) => {
      mobileNav.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    menuBtn.addEventListener("click", () => setMenu(!mobileNav.classList.contains("is-open")));
    mobileNav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header")) setMenu(false);
    });
  }

  /* ---------- Active nav link ---------- */
  const navLinks = $$('.nav a, .mobile-nav a');
  const sections = $$("main section[id]");
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) => {
            if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Scroll reveal ---------- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- 3D curved project gallery ----------
     Single source of truth is the page scroll position: the section is a tall
     "scroll track" with a sticky full-screen stage. Buttons, keys, drag and
     card clicks all just move the page scroll, so every input stays in sync. */
  function initGallery() {
    const section = $("#projects");
    if (!section || reduceMotion) return; // fallback = plain responsive grid

    const pin = $(".gallery-pin", section);
    const stage = $(".gallery-stage", section);
    const cards = $$(".g-card", section);
    const counter = $(".g-count", section);
    const bar = $(".g-progress i", section);
    const prevBtn = $(".g-prev", section);
    const nextBtn = $(".g-next", section);
    const n = cards.length;
    if (n < 2) return;

    section.style.setProperty("--n", n);
    const totalEl = $(".g-total", section);
    if (totalEl) totalEl.textContent = n;
    section.classList.add("is-3d");

    const STEP = 0.6; // radians between neighbouring cards on the arc
    let cw = 480;
    let R = 720;
    let pos = 0;
    let target = 0;
    let raf = 0;
    let active = -1;
    let dragging = null;
    let suppressClick = false;
    let snapTimer = 0;

    function measure() {
      const sw = stage.clientWidth;
      const sh = stage.clientHeight;
      cw = Math.min(sw * 0.82, 560);
      // Height follows the content (16:10 image + ~240px text block), capped by the stage.
      const ch = clamp(cw * 0.625 + 240, 340, Math.max(340, sh * 0.92));
      R = cw * 1.55;
      section.style.setProperty("--cw", cw + "px");
      section.style.setProperty("--ch", ch + "px");
    }

    function scrollMetrics() {
      const top = section.getBoundingClientRect().top + window.scrollY;
      const total = Math.max(1, section.offsetHeight - pin.offsetHeight);
      return { top, total };
    }

    function progress() {
      const { top, total } = scrollMetrics();
      return clamp((window.scrollY - top) / total, 0, 1);
    }

    function render() {
      const idx = clamp(Math.round(pos), 0, n - 1);
      for (let i = 0; i < n; i++) {
        const d = i - pos;
        const ad = Math.abs(d);
        const card = cards[i];
        if (ad > 3.4) {
          card.style.visibility = "hidden";
          continue;
        }
        const a = d * STEP;
        const x = R * Math.sin(a);
        const z = -R * (1 - Math.cos(a)) - ad * 20;
        const ry = -a * (180 / Math.PI) * 0.95;
        const s = 1 - Math.min(ad, 3) * 0.045;
        card.style.visibility = "visible";
        card.style.opacity = ad > 2.4 ? String(clamp(3.4 - ad, 0, 1)) : "1";
        card.style.setProperty("--dim", clamp(ad * 0.32, 0, 0.82).toFixed(3));
        card.style.zIndex = String(100 - Math.round(ad * 10));
        card.style.transform = `translate3d(${x.toFixed(1)}px,0,${z.toFixed(1)}px) rotateY(${ry.toFixed(2)}deg) scale(${s.toFixed(3)})`;
      }
      if (bar) bar.style.transform = `scaleX(${(pos / (n - 1)).toFixed(4)})`;
      if (idx !== active) {
        active = idx;
        cards.forEach((c, i) => {
          const on = i === idx;
          c.classList.toggle("is-active", on);
          c.classList.toggle("is-side", !on);
          if (on) c.setAttribute("aria-current", "true");
          else c.removeAttribute("aria-current");
          // The screenshot link is a decorative duplicate (aria-hidden), so it never takes focus.
          $$("a:not(.g-media)", c).forEach((a) => (a.tabIndex = on ? 0 : -1));
        });
        if (counter) counter.textContent = String(idx + 1).padStart(2, "0");
        if (prevBtn) prevBtn.disabled = idx === 0;
        if (nextBtn) nextBtn.disabled = idx === n - 1;
      }
    }

    function tick() {
      pos += (target - pos) * 0.14;
      if (Math.abs(target - pos) < 0.0006) {
        pos = target;
        raf = 0;
      } else {
        raf = requestAnimationFrame(tick);
      }
      render();
    }

    function onScroll() {
      target = progress() * (n - 1);
      if (!raf) raf = requestAnimationFrame(tick);
      scheduleSnap();
    }

    // Soft snap: once scrolling stops, settle on the nearest card.
    function scheduleSnap() {
      clearTimeout(snapTimer);
      snapTimer = setTimeout(() => {
        if (dragging) return;
        const p = progress();
        if (p <= 0 || p >= 1) return;
        const f = p * (n - 1);
        if (Math.abs(f - Math.round(f)) > 0.02) goTo(Math.round(f));
      }, 220);
    }

    function goTo(i) {
      const idx = clamp(i, 0, n - 1);
      const { top, total } = scrollMetrics();
      window.scrollTo({ top: top + (idx / (n - 1)) * total, behavior: "smooth" });
    }

    /* Input: buttons, keys, card click */
    prevBtn && prevBtn.addEventListener("click", () => goTo(Math.round(target) - 1));
    nextBtn && nextBtn.addEventListener("click", () => goTo(Math.round(target) + 1));
    stage.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(Math.round(target) + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(Math.round(target) - 1);
      }
    });
    cards.forEach((c, i) =>
      c.addEventListener("click", () => {
        if (!suppressClick && i !== active) goTo(i);
      })
    );

    /* Input: drag / swipe sideways (vertical swipes still scroll natively) */
    stage.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      dragging = { x: e.clientX, y0: window.scrollY, id: e.pointerId, moved: false };
    });
    window.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - dragging.x;
      if (!dragging.moved && Math.abs(dx) > 8) {
        dragging.moved = true;
        stage.classList.add("is-dragging");
        try {
          stage.setPointerCapture(dragging.id);
        } catch (_) {
          /* pointer already released */
        }
      }
      if (dragging.moved) {
        const { total } = scrollMetrics();
        const pxPerCard = total / (n - 1);
        window.scrollTo({ top: dragging.y0 - dx * (pxPerCard / (cw * 0.85)), behavior: "instant" });
      }
    });
    const endDrag = () => {
      if (!dragging) return;
      if (dragging.moved) {
        suppressClick = true;
        setTimeout(() => (suppressClick = false), 0);
      }
      dragging = null;
      stage.classList.remove("is-dragging");
      scheduleSnap();
    };
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    stage.addEventListener(
      "click",
      (e) => {
        if (suppressClick) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      onScroll();
    });

    measure();
    target = pos = progress() * (n - 1);
    render();
    // Late layout shifts (fonts/images) change the section's position.
    window.addEventListener("load", () => {
      measure();
      onScroll();
    });
  }

  // The first 3D layout is the heaviest work on the page, so it waits for the visitor's
  // first interaction (or a deep link) instead of blocking page load. Starting on the
  // first pointer/key/scroll event also means it is ready before any anchor jump scrolls.
  const gallerySection = $("#projects");
  if (gallerySection && !reduceMotion) {
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      ["pointerdown", "keydown", "wheel", "touchstart", "scroll"].forEach((t) => window.removeEventListener(t, start));
      initGallery();
    };
    if (location.hash) start();
    else ["pointerdown", "keydown", "wheel", "touchstart", "scroll"].forEach((t) => window.addEventListener(t, start, { passive: true }));
  }

  /* ---------- Contact form (no backend: FormSubmit relays to Gmail) ---------- */
  const form = $("#contact-form");
  if (form) {
    const status = $("#form-status");
    const submit = $("button[type=submit]", form);
    const label = $(".btn-label", submit);

    const say = (msg, state) => {
      status.textContent = msg;
      status.dataset.state = state || "";
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (form.elements._honey && form.elements._honey.value) return; // bot
      if (!form.reportValidity()) return;

      const name = form.elements.name.value.trim();
      const payload = {
        name,
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
        _subject: "Portfolio message from " + name,
        _template: "table",
        _captcha: "false",
      };

      submit.classList.add("is-loading");
      label.textContent = "Sending…";
      say("");

      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || String(data.success) === "false") throw new Error(data.message || "Request failed");
        form.reset();
        say("Thanks " + name.split(" ")[0] + "! Your message is on its way — I'll reply by email soon.", "ok");
      } catch (_) {
        const subject = encodeURIComponent("Portfolio message from " + name);
        const body = encodeURIComponent(payload.message + "\n\n— " + name + " (" + payload.email + ")");
        say("", "err");
        status.innerHTML =
          'Couldn\'t send right now. Please <a href="mailto:' +
          FALLBACK_EMAIL +
          "?subject=" +
          subject +
          "&body=" +
          body +
          '" style="text-decoration:underline">email me directly</a>.';
      } finally {
        submit.classList.remove("is-loading");
        label.textContent = "Send message";
      }
    });
  }
})();
