/* Initializes other modules */

"use strict";

window.app = (function () {

  return {

    init: function () {
      window.slider.init();
    }
  };

})();

window.app.init();