/* Waqas Munir — Portfolio
   Vanilla JS + GSAP (self-hosted). Every effect is progressive enhancement:
   with JS off, or GSAP missing, the page shows its final state. */
(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const FORM_ENDPOINT = "https://formsubmit.co/ajax/waqaskamboh269@gmail.com";
  const FALLBACK_EMAIL = "waqaskamboh269@gmail.com";

  /* ---------- Footer year ---------- */
  $$(".year").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Header: solid background after scrolling ---------- */
  const header = $(".header");
  const onScrollHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Mobile menu ---------- */
  const menuBtn = $("#menuBtn");
  const mobileNav = $("#mobileNav");
  if (menuBtn && mobileNav) {
    const setMenu = (open) => {
      mobileNav.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (open) header.classList.add("is-scrolled");
      else onScrollHeader();
    };
    menuBtn.addEventListener("click", () => setMenu(!mobileNav.classList.contains("is-open")));
    mobileNav.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
    document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
  }

  /* ---------- Active nav link ---------- */
  const navLinks = $$(".nav a");
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) =>
            a.getAttribute("href") === "#" + entry.target.id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")
          );
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    $$("main section[id]").forEach((s) => spy.observe(s));
  }

  /* ---------- Hero intro: name scrambles into PORTFOLIO, portrait rises ---------- */
  function finishIntro() {
    root.classList.remove("intro");
  }

  (function intro() {
    if (!root.classList.contains("intro")) return;
    if (!gsap) return finishIntro();

    const word = $(".hero-word");
    const person = $(".hero-person");
    const img = $("img", person);
    const extras = $$("[data-intro]");
    const target = "PORTFOLIO";
    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*";
    let timer = 0;
    let tl = null;
    let done = false;

    // Final state immediately — used when the visitor scrolls/clicks during the intro.
    const skip = () => {
      if (done) return;
      done = true;
      clearInterval(timer);
      if (tl) tl.kill();
      word.textContent = target;
      gsap.set(word, { clearProps: "top" });
      gsap.set(person, { clearProps: "transform" });
      gsap.set(extras, { clearProps: "opacity,transform" });
      finishIntro();
      ["wheel", "touchstart", "keydown", "pointerdown"].forEach((t) => window.removeEventListener(t, skip));
    };
    ["wheel", "touchstart", "keydown", "pointerdown"].forEach((t) => window.addEventListener(t, skip, { passive: true }));

    // GSAP owns the start state from here on.
    gsap.set(word, { top: "50%" });
    gsap.set(person, { xPercent: -50, x: 0, y: window.innerHeight });
    gsap.set(extras, { opacity: 0, y: 50 });
    root.classList.remove("intro"); // CSS start state no longer needed; scroll stays locked below
    document.body.style.overflow = "hidden";

    function scramble(onDone) {
      const from = word.textContent;
      const len = Math.max(from.length, target.length);
      let frame = 0;
      timer = setInterval(() => {
        frame++;
        let out = "";
        for (let i = 0; i < len; i++) {
          const settleAt = 3 + i * 2; // letters lock in left → right
          if (frame >= settleAt) out += target[i] || "";
          else out += frame % 2 ? glyphs[(Math.random() * glyphs.length) | 0] : from[i] || "";
        }
        word.textContent = out;
        if (frame >= 3 + len * 2) {
          clearInterval(timer);
          word.textContent = target;
          onDone();
        }
      }, 50);
    }

    function play() {
      if (done) return;
      scramble(() => {
        tl = gsap.timeline({
          delay: 0.25,
          onComplete: () => {
            done = true;
            document.body.style.overflow = "";
            gsap.set([person, word], { clearProps: "transform,top" });
            ["wheel", "touchstart", "keydown", "pointerdown"].forEach((t) => window.removeEventListener(t, skip));
          },
        });
        tl.to(word, { top: isMobile() ? "22%" : "45%", duration: 1.5, ease: "power3.inOut" }, 0)
          .to(person, { y: 0, duration: 1.5, ease: "power3.out" }, 0)
          .to(extras, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }, 0.35);
      });
    }

    const start = () => setTimeout(play, 300);
    if (img.complete) start();
    else {
      img.addEventListener("load", start, { once: true });
      img.addEventListener("error", skip, { once: true });
    }
    // Safety net: never leave the page locked.
    setTimeout(() => {
      if (!done) skip();
      document.body.style.overflow = "";
    }, 7000);
    window.addEventListener("pagehide", skip);
  })();

  /* ---------- Scroll animations (GSAP ScrollTrigger) ---------- */
  if (gsap && ScrollTrigger && !reduceMotion) {
    // About paragraph: words brighten one by one as you scroll through the section.
    const reading = $(".reading");
    if (reading) {
      const wrapWords = (node) => {
        [...node.childNodes].forEach((child) => {
          if (child.nodeType === 3) {
            const frag = document.createDocumentFragment();
            child.textContent.split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
              else {
                const s = document.createElement("span");
                s.className = "w";
                s.textContent = part;
                frag.appendChild(s);
              }
            });
            child.replaceWith(frag);
          } else if (child.nodeType === 1) wrapWords(child);
        });
      };
      wrapWords(reading);
      // immediateRender:false — words stay fully readable until the section approaches,
      // then dim and brighten one by one with the scroll.
      gsap.fromTo(
        $$(".w", reading),
        { color: "#52525b", opacity: 0.2 },
        {
          color: "#ffffff",
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          immediateRender: false,
          scrollTrigger: { trigger: "#about", start: "top 85%", end: "bottom 50%", scrub: true },
        }
      );
    }

    // Big headings rise in (and reverse on the way back up).
    $$("[data-rise]").forEach((el) =>
      gsap.from(el, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
      })
    );
    // "What I can do" drops in from above.
    $$("[data-drop]").forEach((el) =>
      gsap.from(el, {
        opacity: 0,
        y: -100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      })
    );
    // Generic staggered reveals: number, title, image, text, buttons…
    $$("[data-reveal]").forEach((group) =>
      gsap.from($$("[data-reveal-item]", group), {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: group, start: "top 80%" },
      })
    );
    $$(".socials .round").length &&
      gsap.from(".contact .socials .round", {
        opacity: 0,
        scale: 0.6,
        duration: 0.6,
        ease: "back.out(2)",
        stagger: 0.08,
        scrollTrigger: { trigger: ".contact .socials", start: "top 90%" },
      });

    // Layout shifts (fonts, the 3D gallery) move trigger positions.
    window.addEventListener("load", () => ScrollTrigger.refresh());
  }

  /* ---------- Services accordion ---------- */
  $$(".svc").forEach((row) => {
    const btn = $(".svc-head", row);
    btn.addEventListener("click", () => {
      const open = !row.classList.contains("is-open");
      $$(".svc.is-open").forEach((r) => {
        r.classList.remove("is-open");
        $(".svc-head", r).setAttribute("aria-expanded", "false");
      });
      row.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      if (ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 550);
    });
  });

  /* ---------- 3D curved project gallery ----------
     Single source of truth is the page scroll: the section is a tall "scroll
     track" with a sticky full-screen stage. Buttons, keys, drag and card clicks
     all move the page scroll, so every input stays in sync. */
  function initGallery() {
    const section = $("#projects");
    if (!section || reduceMotion) return;

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
      // Height follows the content (16:10 image + ~250px text block), capped by the stage.
      const ch = clamp(cw * 0.625 + 250, 340, Math.max(340, sh * 0.92));
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

    // Drag / swipe sideways (vertical swipes still scroll natively).
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
    if (ScrollTrigger) ScrollTrigger.refresh();
    window.addEventListener("load", () => {
      measure();
      onScroll();
    });
  }

  // The first 3D layout is the heaviest work on the page, so it waits for the
  // visitor's first interaction (or a deep link) instead of blocking page load.
  if ($("#projects") && !reduceMotion) {
    let started = false;
    const events = ["pointerdown", "keydown", "wheel", "touchstart", "scroll"];
    const start = () => {
      if (started) return;
      started = true;
      events.forEach((t) => window.removeEventListener(t, start));
      initGallery();
    };
    if (location.hash) start();
    else events.forEach((t) => window.addEventListener(t, start, { passive: true }));
  }

  /* ---------- Contact form (no backend: FormSubmit relays to Gmail) ---------- */
  const form = $("#contact-form");
  if (form) {
    const status = $("#form-status");
    const submit = $(".submit", form);
    const label = $(".btn-label", submit);
    const say = (msg, state) => {
      status.textContent = msg;
      status.dataset.state = state || "";
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (form.elements._honey && form.elements._honey.value) return; // bot
      if (!form.reportValidity()) return;

      const val = (n) => (form.elements[n] ? form.elements[n].value.trim() : "");
      const name = val("name");
      const payload = {
        name,
        email: val("email"),
        phone: val("phone"),
        subject: val("subject"),
        message: val("message"),
        _subject: "Portfolio: " + (val("subject") || "message from " + name),
        _template: "table",
        _captcha: "false",
      };

      submit.classList.add("is-loading");
      label.textContent = "Sending...";
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
        say("Message sent successfully!", "ok");
      } catch (_) {
        const body = encodeURIComponent(payload.message + "\n\n— " + name + " (" + payload.email + (payload.phone ? ", " + payload.phone : "") + ")");
        status.dataset.state = "err";
        status.innerHTML =
          'Something went wrong. Please <a href="mailto:' +
          FALLBACK_EMAIL +
          "?subject=" +
          encodeURIComponent(payload._subject) +
          "&body=" +
          body +
          '">email me directly</a>.';
      } finally {
        submit.classList.remove("is-loading");
        label.textContent = "Send Message";
      }
    });
  }
})();
