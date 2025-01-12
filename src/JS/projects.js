
function setupVideoHandlers(videoClass, videoContainerClass, playButtonId) {
  const video = document.querySelector(videoClass);
  const videoContainer = document.querySelector(videoContainerClass);
  const playButton = document.getElementById(playButtonId);
  let isSeeking = false;
  playButton.addEventListener('click', () => {
    video.play();
    videoContainer.classList.add('playing');
  });

  video.addEventListener('play', () => {
    videoContainer.classList.add('playing');
  });

  video.addEventListener('pause', () => {
    if (!isSeeking) {
      videoContainer.classList.remove('playing');
    }
  });

  video.addEventListener('seeking', () => {
    isSeeking = true; 
    videoContainer.classList.add('seeking');
  });

  video.addEventListener('seeked', () => {
    isSeeking = false;
    if (video.paused) {
      videoContainer.classList.remove('playing'); 
    }
  });

  video.addEventListener('ended', () => {
    video.pause();
    video.currentTime = 0; 
    videoContainer.classList.remove('playing');
  });
}

setupVideoHandlers('.video', '.video-container', 'play-btn');
setupVideoHandlers('.video-1', '.video-container-1', 'play-btn-1');
setupVideoHandlers('.video-2', '.video-container-2', 'play-btn-2');
setupVideoHandlers('.video-3', '.video-container-3', 'play-btn-3');
setupVideoHandlers('.video-4', '.video-container-4', 'play-btn-4');
