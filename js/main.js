var $theCircle = $('.circle');
var $form = $('form');
var $input = $('#the-color');

$form.on('submit', function(eventObject) {
	// Stop the form from doing what it normally does
	eventObject.preventDefault();

	$theCircle.css('background-color', $input.val());

	var $theH1 = $('<h1>');
	$theH1.html($input.val());

	$theCircle.prepend($theH1);

	$input.val('');
})