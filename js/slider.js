/* Describes slider work */

window.slider = (function() {

  var slides = document.querySelectorAll(".slider__item");
  var thumblers = document.querySelectorAll(".pagination__radiobtn--slider");

  function onThumblerClick(event) {
    for (var i = 0; i < thumblers.length; i++) {
      slides[i].style.opacity = "0";
      if (thumblers[i].checked) {
        slides[i].style.opacity = "1";
      }
    }
  }

  return {

    init: function() {
      for (var i = 0; i < thumblers.length; i++) {
        thumblers[i].addEventListener("click", onThumblerClick);
      }
    }

  };

})();