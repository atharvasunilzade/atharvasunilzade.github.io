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
