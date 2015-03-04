var $ul = $('.list-field');
var $form = $('form');
var $input = $('#the-list');
 
$form.on('submit', function(eventObject) {
	eventObject.preventDefault(); //change

	var $li = $('<li>'); // creating variable from <li> in html
	var $remove = $('<button>');

	$li.html($input.val()); //the li var is composed of the results of the input var
	$li.addClass('list');

	$remove.html('X'); //
	$remove.addClass('btn')
	$remove.on('click', function() {
		$li.remove();
	})

	$ul.prepend($li); //makes text appear in order
	$li.prepend($remove);

	$input.val(''); //removes default text from input field






}) 

$ul.on('click', 'li', function() {
	$(this).addClass('list-highlight');
});