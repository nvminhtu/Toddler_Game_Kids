//Function to play the exact file format
function playAudio() {
    var audio = new Audio("files/sounds/audio" + audioType);
    audio.play();
}
function soundClick() {
  var btnclick = new Audio("audio/click.wav");
  btnclick.play();
}
