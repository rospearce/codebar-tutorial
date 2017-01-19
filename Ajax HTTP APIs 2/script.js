// TV Schedule example

function formatDate(start, end) {

    var start_date = new Date(start);
    var end_date = new Date(end);

    var day = start_date.getDate();
    var month = start_date.getMonth() + 1; // the returned months are 0-11
    var year = start_date.getFullYear();

    var start_hour = start_date.getHours();
    var start_mins = start_date.getMinutes();

    var end_hour = end_date.getHours();
    var end_mins = end_date.getMinutes();

    var date = day + "/" + month + "/" + year + " ";

    // add leading 0 and return last two characters to make sure we use 00:00 format
    date +=  ("0"+start_hour).slice(-2) + ":" + ("0"+start_mins).slice(-2) + " - " +
        ('0' + end_hour).slice(-2) + ":" +  ( "0" + end_mins).slice(-2);

    return date;
}

function retrieveGenres ()  { $.ajax({
  url: 'http://www.bbc.co.uk/tv/programmes/genres.json',
  dataType: 'json'
//  beforeSend: function() {
   // do something before running the request
//  }
}).done(function(data) {
 
	$.each(data.categories, function(i, item) {
		$("#genres").append(
			'<li data-key="' + item.key + '">' + item.title + '</li>'
		);
	})
	
	$(document).on('click', '#genres li', function() {
		
		var genre = $(this).data('key');
		
		 $('#programmes').text('')
		
		getTomorrowsSchedule(genre);
	});
	
}).fail(function() {
  $("#genres").text('Error - unable to retrieve genres')
}).always(function() {
  // code that runs regardless of request succeeding or failing
});

}

function processEpisode(episode) {
  var item_html = '<li>';
  item_html += '<h2>' + episode.programme.display_titles.title + '</h2>';
  item_html += '<p>' + episode.programme.short_synopsis + '</p>';
  if (episode.programme.image) {
	  item_html += '<img src="http://ichef.bbci.co.uk/images/ic/272x153/' + episode.programme.image.pid + '.jpg" />'
  };
  // display image
  // display date and time
  // display duration (HINT: the duration is in seconds, convert that to minutes)
  // display the channel (or service, as its called by the API) - add this in a span with the class `service`
  item_html += '</li>';
  
  $('#programmes').append(item_html)
}

function getTomorrowsSchedule(genre) {
	
	
  $.ajax({
	  url: 'http://www.bbc.co.uk/tv/programmes/genres/' + genre + '/schedules/tomorrow.json',
	  dataType: 'json'
  }).done(function(data) {
	  console.log(data);
	  $.each(data.broadcasts, function (i, episode) {
		  processEpisode(episode);
	  });
}).fail(function() {
  
}).always(function() {
  // code that runs regardless of request succeeding or failing
});
}

$(document).ready(function() {
	retrieveGenres();
});