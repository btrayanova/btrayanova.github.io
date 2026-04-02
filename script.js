// Expand music section
const expandBtn = document.getElementById("expandBtn");
if (expandBtn) {
  expandBtn.onclick = function() {
    const section = document.getElementById("moreMusic");
    if (section) {
      section.style.display = "block";
    }
    this.style.display = "none";
  };
}

// Expand contact form
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.onclick = function() {
    const form = document.getElementById("contactForm");
    if (form) {
      form.style.display = "block";
    }
    this.style.display = "none";
  };
}

// Expand video section
const videoBtn = document.getElementById("videoExpandBtn");
if (videoBtn) {
  videoBtn.onclick = function() {
    const section = document.getElementById("moreVideos");
    if (section) {
      section.style.display = "block";
    }
    this.style.display = "none";
  };
}

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
