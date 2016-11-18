var colors = [ '22ac5e', 'd68236', '770077' ];

var colorRandom = [Math.floor( Math.random() * colors.length )]



function setPreviewColor(color) {
	$('.preview').css('background-color', color);
	$('.color-code').text($('.preview').css('background-color'))
}


$(document).keyup('#color', function() {
	setPreviewColor($('#color').val());
})

function addBox(color) {
	$('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>')
}

$(document).on('click','#add-to-favorite', function () {
	addBox($('#color').val());
	$('#color').val('');
	if ($("#colors .item").length > 9) {
		$("#colors .item").last().remove()
	};
	$('#color').focus();
});

$(document).ready(function() {
	$.each(colors, function(index, color) {
	   addBox(color)
	});
	setPreviewColor(colors[colorRandom])
});

$("#colors .item")

$(document).on('mouseenter','#colors .item', function() {
	setPreviewColor($(this).css('background-color'))
})

$(document).on('mouseleave','#colors .item', function() {
	setPreviewColor(colors[colorRandom])
})



