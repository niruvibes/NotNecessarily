var notNecessarily = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / notNecessarily);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(Assets/logo1500994.png) no-repeat";
  }
}