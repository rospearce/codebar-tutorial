/** Hangman **/

startNewGame = function () {
		$.ajax({
	  type: 'POST',
	 // data: { field: 'value',  other_field: 'other value' },
	  url: 'http://hangman-api.herokuapp.com/hangman'
	}).done(function(data) {
		$('.hangman-word').text(data.hangman);
		$('.token').val(data.token);
		$('#new-game').hide();
		$('.console').show();
		$('.remaining').text('7');
		$('.attempts').text('');
		$('.letter').text('');
    
//	$.('#hangman-word').append
	  })
};

startNewGame();

$(document).on('click', '#new-game', startNewGame);
	  
	  $(document).on('click', '#guess', function() {
		  
		  var letter = $('.letter').val();
		  
		  $('.letter').val('').focus();

      $.ajax({
        type: 'PUT',
        data: { token: $('.token').val(),  letter: letter },
        url: 'http://hangman-api.herokuapp.com/hangman'
      }).done(function(data) {
      	console.log(data);
  		$('.hangman-word').text(data.hangman);
  		$('.token').val(data.token);
  		if (data.correct) { 
  			$('.attempts').append('<span class="correct">' + letter + '</span>'); 
  		} else {
  			$('.attempts').append('<span class="wrong">' + letter + '</span>');
			
			var remaining = $('.remaining').text();
			
			$('.remaining').text(remaining-1);
			
			if ($('.wrong').length >= 7) {
				
				$.ajax({
					type: 'GET',
					data: {token: $('.token').val()},
					url: 'http://hangman-api.herokuapp.com/hangman'
				}).done(function(data) {
					console.log(data);
					$('.hangman-word').text(data.solution);
				})
				
				$('#new-game').show();
				
				$('.console').hide();
				
				
				
			}
  			
  		}
      })});
	