const synth = window.speechSynthesis;

const inputText = document.querySelector("textarea");
const inputTxt = document.querySelector("input");
const button = document.querySelector("button");
const voiceSelect = document.querySelector("select");
let utterThis;
let voices;

function loadVoices() {
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = i;
    voiceSelect.appendChild(option);
  }
}
synth.onvoiceschanged = function () {
  loadVoices();
};
button.onclick = function () {
  console.log(inputText.value);
  utterThis = new SpeechSynthesisUtterance(inputText.value);
  utterThis.voice = voices[voiceSelect.value];
  synth.speak(utterThis);
};
