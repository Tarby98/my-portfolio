// JAVASCRIPT FOR PORTFOLIO //

// MAKE VIDEO PLAY WHEN HOVERED OVER //

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll('.portfolio-video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; 
    });
  });
});


// SLIDESHOW FUNCTIONALITY //

document.querySelectorAll('.project-slideshow').forEach(slideshow => {
  let images = slideshow.querySelectorAll('img');
  let index = 0;
  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000); 
});

// CERTIFICATE BIG SCREEN //

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.close');

  document.querySelectorAll('.certificate-card img').forEach(img => {
    img.addEventListener('click', () => {
      const fullImg = img.getAttribute('data-full');
      lightboxImg.src = fullImg;
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

// MAKE THE TAGLINE TYPE OUT //

const text = '"Aspiring to become a Full Stack Developer"';
let i = 0;
const tagline = document.querySelector('.tagline');
function type() {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();

// LOADING BAR THAT FILLS AS THE USER SCROLLS UP / DOWN //

const progress = document.createElement('div');
progress.id = 'progress-bar';
document.body.prepend(progress);
window.addEventListener('scroll', () => {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progressHeight = (window.scrollY / totalHeight) * 100;
  progress.style.width = `${progressHeight}%`;
});

// CLICK 'JACK TARBUCK' FOR CONFETTI //

  const name = document.getElementById('confetti-name');

  name.addEventListener('click', (e) => {
    const rect = name.getBoundingClientRect();
    const x = (rect.left + rect.right) / 2 / window.innerWidth;
    const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
   
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x, y },
      colors: ['#2563EB', '#FACC15', '#EF4444', '#22C55E', '#A855F7']
    });

    name.style.transform = 'scale(1.1)';
    setTimeout(() => {
      name.style.transform = 'scale(1)';
    }, 200);
  });
