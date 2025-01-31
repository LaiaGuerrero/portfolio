function reproduceVideos() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
      if (video.paused) {
        video.play().catch(error => {
          console.error('Error al reproducir el video:', error);
        });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', reproduceVideos);

  setInterval(reproduceVideos, 5000);