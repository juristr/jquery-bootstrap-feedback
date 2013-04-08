/*
  

*/
(function($, undefined){

  /*jshint multistr:true */
  var buttonHtml = '<div id="supportbar">\
          <a href="#feedbackModal" class="btn btn-success btn-feedback js-open-feedback" data-toggle="modal"><i class="icon-comment icon-white"></i> Get in Touch</a>\
          </div>',
      modalHtml = '<div id="feedbackModal" class="modal hide fade"> \
          <div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
            <h3>Get In Touch</h3> \
          </div> \
          <div class="modal-body"> \
            <p>Please submit us any kind of feedback you like. It is really valuable for us to improve our service.</p>\
            <form id="feedbackForm"> \
              <div class="row-fluid"> \
                <input type="text" name="name" class="span6" placeholder="Your name"> \
                <input type="text" name="email" class="span6" placeholder="Your email"> \
              </div> \
              <div class="row-fluid"> \
                <input type="text" name="subject" class="span12" placeholder="Subject" required> \
              </div> \
              <div class="row-fluid"> \
                <textarea name="message" class="span12" rows="5" placeholder="Tell us your story..." required></textarea> \
              </div> \
              <div class="row-fluid"> \
                <div class="btn-group span3 js-emotion-bar" data-toggle="buttons-radio"> \
                  <a href="#" class="btn" data-toggle="tooltip" title="I\'m happy"><i class="icon-emo-happy"></i>&nbsp;</a> \
                  <a href="#" class="btn" data-toggle="tooltip" title="I\'m ok"><i class="icon-emo-sleep"></i>&nbsp;</a> \
                  <a href="#" class="btn" data-toggle="tooltip" title="I\'m unhappy"><i class="icon-emo-unhappy"></i>&nbsp;</a> \
                </div> \
                <div class="span8"> \
                  <p class="muted note">How are you feeling?</p> \
                </div> \
              </div> \
            </form> \
          </div> \
          <div class="modal-footer"> \
            <a href="#" class="btn btn-success js-send-feedback"><i class="icon-envelope icon-white"></i> Send it to us!</a> \
          </div> \
        </div>',
        submittedHtml = '<div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
            <h3>Thanks!</h3> \
          </div> \
          <div class="modal-body"> \
            <p>Thanks for your feedback. It is really valuable to us and we\'ll try to do our best to incorporate it.</p>\
          </div> \
          <div class="modal-footer"> \
            <a href="#" class="btn btn-primary" data-dismiss="modal">Ok</a> \
          </div>';

  $.feedback = function(options){
    init(options);
  };

  $.fn.feedback = function(options){
    var opts = $.extend({}, $.fn.feedback.defaults, options);
  };

  var init = function(options){
    addButton($('body'));
  };

  var onSendFeedbackClick = function() {
    $('body')
      .find('#feedbackModal')
      .remove();
    $('body').append(modalHtml);

    //hook tooltips
    $('.js-emotion-bar').children('a').tooltip();

    //hook click event for sending feedback
    $('.js-send-feedback').click(function(){
      //todo send feedback
      var userFeedback = {
        name: '',
        email: '',
        subject: '',
        message: '',
        mood: ''
      };

      $("#feedbackForm input, #feedbackForm select, #feedbackForm textarea").each(function() {
        userFeedback[$(this).attr('name')] = $(this).val();
      });

      userFeedback.mood = $('.js-emotion-bar').find('a.active').data('original-title');

      console.log(userFeedback);

      var sendFeedback = sendFeedbackToBackend(userFeedback);
      sendFeedback.always(function(){
        $('#feedbackModal').html(submittedHtml);
      });

    });
  };

  var sendFeedbackToBackend = function(userFeedback) {
    return $.ajax({
      url: '/feedback',
      type: 'POST',
      data: userFeedback,
      success: function(){

      },
      error: function(){
        //ignore..this is not a mission critical function; at most we could print a log here
      }
    });
  };

  var addButton = function(element){
    $(element).append(buttonHtml);
    $('.js-open-feedback').click(onSendFeedbackClick);
  };

  $.fn.feedback.defaults = {
    foreground: 'red',
    background: 'yellow'
  };


})(jQuery);