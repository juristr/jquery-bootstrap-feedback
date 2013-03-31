/*
  

*/
(function($, undefined){


  $.feedback = function(){
    
  };


  $.fn.feedback = function(options){

    var opts = $.extend({}, $.fn.feedback.defaults, options);


  };

  $.fn.feedback.defaults = {
    foreground: 'red',
    background: 'yellow'
  };


})(jQuery);