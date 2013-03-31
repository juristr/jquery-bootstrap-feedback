/*
  

*/
(function($, undefined){

  /*jshint multistr:true */
  var buttonHtml = '<div id="supportbar">\
          <a href="#feedbackModal" class="btn btn-success btn-feedback js-send-feedback" data-toggle="modal"><i class="icon-comment icon-white"></i> Get in Touch</a>\
          </div>',
      modalHtml = '<div id="feedbackModal" class="modal hide fade"> \
          <div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
            <h3>Get In Touch</h3> \
          </div> \
          <div class="modal-body"> \
            <p>Please submit us any kind of feedback you like. It is really valuable for use for improving our service.</p>\
            <form action="/email/support" method="post"> \
              <div class="row-fluid"> \
                <input type="text" name="name" class="span6" placeholder="Your name"> \
                <input type="text" name="email" class="span6" placeholder="Your email"> \
              </div> \
              <div class="row-fluid"> \
                <input type="text" name="subject" class="span12" placeholder="Subject"> \
              </div> \
              <div class="row-fluid"> \
                <textarea name="message" class="span12" rows="5" placeholder="Tell us your story..."></textarea> \
              </div> \
              <div class="row-fluid"> \
                <ul class="emotions span3"> \
                  <li><a data-emotion=":-(" class="emotion sad tip" title="I\'m unhappy"></a></li> \
                  <li><a data-emotion=":-|" class="emotion indifferent tip" title="I\'m okay"></a></li> \
                  <li><a data-emotion=":-)" class="emotion happy tip" title="I\'m happy!"></a></li> \
                </ul> \
                <div class="span9"> \
                  <p class="muted note">How are you feeling?</p> \
                </div> \
              </div> \
            </form> \
          </div> \
          <div class="modal-footer"> \
            <a href="#" class="btn btn-success"><i class="icon-envelope icon-white"></i> Send it to us!</a> \
          </div> \
        </div>';

  $.feedback = function(){
    init();
  };

  $.fn.feedback = function(options){
    var opts = $.extend({}, $.fn.feedback.defaults, options);
  };

  var init = function(){
    addButton($('body'));
  };

  var onSendFeedbackClick = function() {
    $('body')
      .find('#feedbackModal')
      .remove();
    $('body').append(modalHtml);
  };

  var addButton = function(element){
    $(element).append(buttonHtml);
    $(".js-send-feedback").click(onSendFeedbackClick);
  };

  $.fn.feedback.defaults = {
    foreground: 'red',
    background: 'yellow'
  };


})(jQuery);