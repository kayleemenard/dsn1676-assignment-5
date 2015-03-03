var $ul = $('.list-field');
var $form = $('form');
var $input = $('#the-list');
 
$form.on('submit', function(eventObject) {
	eventObject.preventDefault(); //change

	var $li = $('<li>');
	$li.html($input.val());

	var $remove = $('<button>');

	$ul.prepend($li); //makes text appear in order
	$ul.prepend($remove);

	$input.val(''); //removes default text from input field

}) 

$ul.on('click', 'li', function() {
	$(this).addClass('list-highlight');
});