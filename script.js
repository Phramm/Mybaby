const boton1 = document.getElementById("boton1");

boton1.addEventListener("click", function () {
  boton1.classList.add("bounce");
  setTimeout(() => {
    boton1.classList.remove("bounce");
  }, 300);
});
const boton2 = document.getElementById("boton1");

boton2.addEventListener("click", function () {
  boton2.classList.add("bounce");
  setTimeout(() => {
    boton1.classList.remove("bounce");
  }, 300);
});

const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audioPlayer');

function showPauseIcon() {
  playBtn.innerHTML = `
    <div class="pause">
      <div class="bar"></div>
      <div class="bar"></div>
    </div>`;
}

function showPlayIcon() {
  playBtn.innerHTML = `<div class="triangle"></div>`;
}

window.addEventListener('load', () => {
  audio.play().then(() => {
    playBtn.classList.add('playing');
    showPauseIcon();
  }).catch(() => {
    showPlayIcon();
  });
});

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.classList.add('playing');
    showPauseIcon();
  } else {
    audio.pause();
    playBtn.classList.remove('playing');
    showPlayIcon();
  }
});