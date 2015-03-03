var $ol = $('.list-field');
var $form = $('form');
var $input = $('#the-list');

$form.on('submit', function(eventObject) {
	eventObject.preventDefault(); //change

	var $li = $('<li>');
	$li.html($input.val());

	$ol.prepend($li); //makes text appear in order

	$input.val(''); //removes default text from input field
})

$ol.on('click', 'li', function() {
	$(this).addClass('list-highlight');
});