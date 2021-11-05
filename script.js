var nystories = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / nystories);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(https://github.com/niruvibes/NotNecessarily/blob/main/Assets/NNRBanner_1.png) no-repeat";
  }
}