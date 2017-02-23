$(document).ready( function() {
  var $tweetControls = $('#tweet-controls')
  var $tweetCompose = $('.tweet-compose')
  var $charCount = $('#char-count')
  var $tweetSubmit = $('#tweet-submit')

  $tweetControls.hide();

  $('.tweet-actions').hide();

  $tweetCompose.click( function() {
    $tweetControls.show();
    $(this).css("height", "5em")
})


  $tweetCompose.on('keydown', function() {
    var count = 140 - $(this).val().length
    $charCount.text(count)
    if (count >= 10) {
      $charCount.css('color', '#999')
    }
    else if (count <= 10 && count >= 0) {
      $charCount.css('color', 'red')
      $tweetSubmit.removeAttr("disabled")

    }
    else if (count < 0) {
      $tweetSubmit.attr("disabled", "disabled")
    }
  })

    $tweetSubmit.click( function() {
      $('#profile-summary').prepend($('#stream'))
    })

  /*$tweetCompose.on('keydown', function() {
    var result = $tweetCompose.text();
      console.log(result)
  })*/

})
