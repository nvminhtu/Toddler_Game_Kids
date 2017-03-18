
$( document ).ready(function() {
  window.onload = function() {

    setTimeout(function() {
      //document.getElementById("splash-pic").style.display = "none";
      //document.getElementById("container").style.display = "block";
      $("#splash-pic").fadeOut();
      $("#container").fadeIn();
    }, 1000);

  };
});
