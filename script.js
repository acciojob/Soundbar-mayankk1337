
const sounds = ["applause.mp3", "boo.mp3", "gasp.mp3", "tada.mp3", "victory.mp3", "wrong.mp3"];

const buttonsContainer = document.getElementById("buttons");

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound.replace(".mp3", ""); 

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}`);
    audio.play();
    window.currentAudio = audio; 
  });

  buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.classList.add("stop"); 
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSounds);
buttonsContainer.appendChild(stopBtn);

function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}
