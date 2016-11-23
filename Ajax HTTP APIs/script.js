$(document).ready(function() {
  $(document).on('keypress', '#username', function() {
	  if (event.which === 13) { // check the key was <enter>
	        var input = $(this);
	        var username = input.val();

			getGithubInfo(username);
    }
  });
});

function getGithubInfo(username) {
	var url = 'https://api.github.com/users/' + username;

	var xmlhttp = new XMLHttpRequest(); //this is a known method
	xmlhttp.open('GET', url, false); //false means that requests will happen synchronously, which can cause 'deprecation' and is not always recommended, but done here for simplicity
	xmlhttp.send();
	
	showUser(xmlhttp)

}

function showUser(xmlhttp) {
	if(xmlhttp.status === 200) { //if the request was successful, the status code will be 200
		var json = xmlhttp.responseText;
		var user = JSON.parse(json);
		
		console.log(user);
		
		$("#profile h2").text(
			user.login + ' is GitHub user #' + user.id
		);
		
		$("#profile .information").append(
			'<a href="' + user.html_url + '">Profile</a>'
		).addClass('profile');
		
		$('#profile .avatar').append(
			'<img src="' + user.avatar_url + '" />'
		)
		
	} else {
		$("#profile h2").text('No such user!')
	}
}
