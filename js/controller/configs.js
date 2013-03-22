// Load scripts
$.getScript('js/model/table.min.js');

// Both input fields must be filled
function plateTrigger() {

    if (!_.isEmpty($('#Ydimension').val()) && !_.isEmpty($('#Xdimension').val())) {
        gridBody();
        if (!_.isEmpty(option)) {
        	gridBody(option);
        	// hide options
        	$('.noprint').slideUp('fast');
        	$('#finalize').show();
        }
    }

}

function finalize() {
	$('.input-cell').hide();
	$('.input-cell').each(function() { $(this).parent().append('<span class="print-final">'+$(this).val()+'</span>')});
	if(_.isEmpty($('#titlePlate').val())) {
		$('#titlePlate').hide();
	}
	if(_.isEmpty($('#authorPlate').val())) {
		$('#authorPlate').hide();
	}
	$('#printf').hide();
	$('#edit').show();
	window.print();
}

function editit() {
	$('.input-cell').show();
	$('span.print-final').remove();
	$('#titlePlate').show();
	$('#authorPlate').show();
	$('#edit').hide();
	$('#printf').show();
}