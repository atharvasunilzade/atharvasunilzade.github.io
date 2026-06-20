/* BlackForgeX — site interactions (no dependencies) */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Current year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Reveal-on-scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  /* ====================================================
     CONVERSION WIDGETS — never let a visitor leave cold
     ==================================================== */
  var PHONE = '+918308966290';
  var WA = 'https://wa.me/918308966290?text=' +
    encodeURIComponent("Hi BlackForgeX 👋, I'd like to discuss a software project.");

  var icoWA = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.69-6.16a11.87 11.87 0 0 1-1.6-5.95C.15 5.34 5.5 0 12.06 0a11.8 11.8 0 0 1 8.4 3.49 11.8 11.8 0 0 1 3.48 8.41c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.7-1.45L.06 24zM6.6 20.13c1.68 1 3.28 1.6 5.4 1.6 5.45 0 9.9-4.43 9.9-9.88a9.83 9.83 0 0 0-2.9-7A9.82 9.82 0 0 0 12.06 2C6.6 2 2.16 6.44 2.16 11.9a9.8 9.8 0 0 0 1.51 5.25l-.99 3.6 3.92-1.02zm11.4-5.46c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41z"/></svg>';
  var icoCall = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>';
  var icoMail = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>';

  // Floating buttons (desktop) + mobile bar
  var widgets = document.createElement('div');
  widgets.innerHTML =
    '<div class="fab-stack">' +
      '<a class="fab fab-wa fab-pulse" href="' + WA + '" target="_blank" rel="noopener">' + icoWA + '<span class="fab-label">WhatsApp</span></a>' +
      '<a class="fab fab-call fab-pulse" href="tel:' + PHONE + '">' + icoCall + '<span class="fab-label">Call us</span></a>' +
    '</div>' +
    '<nav class="mobile-bar">' +
      '<a class="mb-call" href="tel:' + PHONE + '">' + icoCall + 'Call</a>' +
      '<a class="mb-wa" href="' + WA + '" target="_blank" rel="noopener">' + icoWA + 'WhatsApp</a>' +
      '<a class="mb-mail" href="contact.html">' + icoMail + 'Enquiry</a>' +
    '</nav>';
  document.body.appendChild(widgets);

  // Exit-intent / capture modal
  var overlay = document.createElement('div');
  overlay.className = 'cap-overlay';
  overlay.innerHTML =
    '<div class="cap-modal" role="dialog" aria-modal="true" aria-label="Contact BlackForgeX">' +
      '<button class="cap-close" aria-label="Close">&times;</button>' +
      '<h3>Before you go — let\'s talk ⚒</h3>' +
      '<p class="sub">Tell us what you need built or supported. Reach us instantly, or leave your number and we\'ll call you back.</p>' +
      '<div class="cap-quick">' +
        '<a class="cap-call" href="tel:' + PHONE + '">' + icoCall + 'Call now</a>' +
        '<a class="cap-wa" href="' + WA + '" target="_blank" rel="noopener">' + icoWA + 'WhatsApp</a>' +
      '</div>' +
      '<div class="cap-divider">or request a callback</div>' +
      '<form class="cap-form" id="cap-form">' +
        '<input id="cap-name" type="text" placeholder="Your name" required />' +
        '<input id="cap-phone" type="tel" placeholder="Your phone number" required />' +
        '<button class="btn btn-primary" type="submit">Request a callback →</button>' +
      '</form>' +
      '<p class="cap-trust">📞 +91 83089 66290 · ✉️ info@blackforge.group · Akola, India</p>' +
    '</div>';
  document.body.appendChild(overlay);

  var modal = overlay.querySelector('.cap-modal');
  function openCap() {
    if (sessionStorage.getItem('bf_cap_seen')) return;
    overlay.classList.add('show');
    sessionStorage.setItem('bf_cap_seen', '1');
  }
  function closeCap() { overlay.classList.remove('show'); }
  overlay.querySelector('.cap-close').addEventListener('click', closeCap);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeCap(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCap(); });

  // Desktop exit-intent: pointer leaves toward the top
  document.addEventListener('mouseout', function (e) {
    if (e.clientY <= 0 && !e.relatedTarget) openCap();
  });
  // Mobile / fallback: show after 35s of engagement, or on fast scroll-up near top
  setTimeout(openCap, 35000);
  var lastY = window.scrollY;
  window.addEventListener('scroll', function () {
    if (window.scrollY < lastY - 60 && window.scrollY < 240) openCap();
    lastY = window.scrollY;
  }, { passive: true });
  // Back-button intent (mobile): trap one history step
  history.pushState(null, '', location.href);
  window.addEventListener('popstate', function () { openCap(); history.pushState(null, '', location.href); });

  // Callback form -> WhatsApp (most immediate), no backend needed
  var capForm = document.getElementById('cap-form');
  if (capForm) {
    capForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = document.getElementById('cap-name').value.trim();
      var p = document.getElementById('cap-phone').value.trim();
      var msg = 'Hi BlackForgeX, I\'m ' + n + '. Please call me back on ' + p + '. I\'d like to discuss a software project.';
      window.open('https://wa.me/918308966290?text=' + encodeURIComponent(msg), '_blank');
      closeCap();
    });
  }

  // Contact form -> opens email client with prefilled message (no backend needed)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.name.value || '').trim();
      var email = (form.email.value || '').trim();
      var subject = (form.subject.value || 'Project enquiry').trim();
      var message = (form.message.value || '').trim();
      var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
      var mailto = 'mailto:info@blackforge.group'
        + '?subject=' + encodeURIComponent('[Website] ' + subject)
        + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
      var note = document.getElementById('form-note');
      if (note) note.style.display = 'block';
    });
  }
})();
