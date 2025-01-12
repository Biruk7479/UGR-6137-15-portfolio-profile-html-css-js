const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);

items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

let isPaused = false;

const updateAnimation = () => {
  if (isPaused) {
    track.style.animationPlayState = 'paused';
  } else {
    track.style.animationPlayState = 'running';
  }
};

track.addEventListener('mouseenter', () => {
  isPaused = true;
  updateAnimation();
});

track.addEventListener('mouseleave', () => {
  isPaused = false;
  updateAnimation();
});

const totalItems = track.children.length;
const itemWidth = items[0].offsetWidth + 20; 
const totalWidth = totalItems * itemWidth;

const animationDuration = totalWidth / 120; 
track.style.animationDuration = `${animationDuration}s`;
