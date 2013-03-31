/*
  

*/
(function($, undefined){


  $.fn.feedback = function(options){

    var opts = $.extend({}, $.fn.feedback.defaults, options);

    

  };

  $.fn.feedback.defaults = {
    foreground: 'red',
    background: 'yellow'
  };


})(jQuery);