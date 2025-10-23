// JAVASCRIPT FOR PORTFOLIO WEBSITE //

// Play videos on hover //

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll('.projectvideo');

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

// NEED TO ADD ZOOM IN EFFECT FOR CERTIFICATES // 