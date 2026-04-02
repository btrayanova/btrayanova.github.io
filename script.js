// Expand music section
document.getElementById("expandBtn").onclick = function() {
  const section = document.getElementById("moreMusic");
  section.style.display = "block";
  this.style.display = "none";
};

// Expand video section
document.getElementById("videoExpandBtn").onclick = function() {
  const section = document.getElementById("moreVideos");
  section.style.display = "block";
  this.style.display = "none";
};

// Expand contact form
document.getElementById("contactBtn").onclick = function() {
  const form = document.getElementById("contactForm");
  form.style.display = "block";
  this.style.display = "none";
};

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
