var $ul = $('.list-field');
var $form = $('form');
var $input = $('#the-list');
 
$form.on('submit', function(eventObject) {
	eventObject.preventDefault(); //change

	var $li = $('<li>');
	$li.html($input.val());

	$input.val(''); //removes default text from input field

	$ul.prepend($li); //makes text appear in order

	var $remove = $('<button>');
	$remove.html('complete');
	$remove.addClass('btn')

	$li.prepend($remove);


}) 

$ul.on('click', 'li', function() {
	$(this).addClass('list-highlight');
});