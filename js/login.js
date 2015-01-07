var users = [
	["muzes","test123"],
	["ziemen","test123"],
];

$(function(){

	function init () {
		

		$("#submit").on("click",login);

	}


	function login (e) {

		e.preventDefault();

		console.log("in login");
        var correct=false;

		var user = $("#user").val();
		var pass = $("#pass").val();
		var error = $("#error");

		for (var i = users.length - 1; i >= 0; i--) {

			if(users[i][0] == user && users[i][1] == pass){
                location = "http://www.google.be";
                correct=true;
			}
		};

        if(!correct){
            alert("The username or password you have used are incorrect");
        }
	}


	init();

})

