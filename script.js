document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById("audio-player");
    var volumeSlider = document.getElementById("volume-slider");
  
    // Event listener para cambiar el volumen cuando se mueve el slider
    volumeSlider.addEventListener("input", function() {
      audioPlayer.volume = volumeSlider.value;
    });
  });