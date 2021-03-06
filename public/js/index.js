
fetchUserData ();
function fetchUserData (){
        
	var token = localStorage.getItem('Authorization');
	if(token){
          
		let options = {
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST", 
			body: JSON.stringify({
				token:  token
			})
		};
              
		fetch('/api/1.0/admin/userProfile', options)
			.then(response => {
				let message = response.json();
				console.log('fetching...');
				return message;
			})
			.then(result => {
				let name = result.name;
				if (result.name==='notSignIn') {
					console.log('API fetch success...')
					window.location.replace('/index.html');
				} else {
					document.getElementById('profile').innerHTML = `Hello, ${name}`;     
				}
			});
	}else {
		console.log('user not sign in...');
	}
} 