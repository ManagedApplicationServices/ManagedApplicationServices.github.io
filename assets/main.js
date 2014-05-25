$(function(){
	// Menu settings
  var ctl = false, cK = 17, cKy = 67, etr = 13, bksp = 8;
  var cmd = '';
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
    $("#side-tab").toggle();
	});
  $(document).keydown(function(e) {
    $freekey = $('prompt span.freekey').last();
    key = e.which;

    if(key == 8 || key == 46) {
      $freekey.html( $freekey.html().substring(0, $freekey.html().length - 1) );
      return false;
    }
    if(e.keyCode == cK) {
      ctl = true;
      return;
    }
    if(ctl && e.keyCode == cKy){
      $('.easter').removeClass('hidden');
      $(document).unbind('keydown');
      $(document).unbind('keypress');
      return;
    }
  }).keyup(function(e) {
    if(e.keycode == cK) ctl = false;
  }).keypress(function(e) {
    $freekey = $('prompt span.freekey').last();
    chr = String.fromCharCode(e.which);
    key = e.which;
    if(key == etr) {
      $freekey.append('<br/>zsh: command not found <br/>$ <span class="freekey"></span>');
      return false;
    }else if(key == 8 || key == 46) {
      $freekey.html( $freekey.html().substring(0, $freekey.html().length - 1) );
      return false;
    }else {
      $freekey.html( $freekey.html() + chr );
    }
    if(key == 32) return false;
  });

});
