const audioButton = document.querySelector('.audio-btn');
const audioPlayerContainer = document.getElementById('audio-player-container');
const audioPlayer = document.getElementById('aboutMeAudio');
let toggledByButton = false;

audioButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    toggledByButton = true; 
    audioPlayerContainer.classList.remove('hidden');
    audioPlayer.play(); 
    audioButton.innerHTML = '<i class="ri-volume-down-line"></i>'; 
  } else {
    toggledByButton = true; 
    audioPlayer.pause(); 
    audioPlayerContainer.classList.add('hidden'); 
    audioButton.innerHTML = '<i class="ri-volume-up-line"></i>'; 
  }
});

audioPlayer.addEventListener('pause', () => {
  if (!toggledByButton) {
    audioPlayerContainer.classList.remove('hidden'); 
    audioButton.innerHTML = '<i class="ri-volume-up-line"></i>'; 
  }
  toggledByButton = false; 
});

audioPlayer.addEventListener('play', () => {
  if (!toggledByButton) {
    audioPlayerContainer.classList.remove('hidden'); 
    audioButton.innerHTML = '<i class="ri-volume-down-line"></i>'; 
  }
  toggledByButton = false;
});
