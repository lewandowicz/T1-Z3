// (function($) {

   $(document).ready(function () {

      var nav = $(".navigation"),
         trigger = $(".trigger");

      trigger.on("click", function(e) {
         var that = $(this);
         e.preventDefault();
         nav.toggleClass("open");

         if ( nav.hasClass("open") ) {
            that.text("Zamknij Menu");
         } else {
            that.text("Otwórz Menu");
         }

      });



   });


// })(jQuery);
