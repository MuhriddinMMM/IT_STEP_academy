const VP = document.getElementById("videoPlayer"); // player
const VPToggle = document.getElementById("toggleButton"); // button
VPToggle.addEventListener("click", function () {
  if (VP.paused) VP.play();
  else VP.pause();
});
