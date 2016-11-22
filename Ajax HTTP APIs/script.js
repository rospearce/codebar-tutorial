$(document).ready(function() {
  $(document).on('keypress', '#username', function() {
	  if (event.which === 13) { // check the key was <enter>
	        var input = $(this);
	        var username = input.val();

			function getGithubInfo(username) {
				var url = 'https://api.github.com/users/' + username;
	
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.open('GET', url, false);
				xmlhttp.send();
	
				var data = xmlhttp.responseText;
	
				console.log(data);
			}
    }
  });
});

