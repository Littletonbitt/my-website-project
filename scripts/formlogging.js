document.addEventListener('DOMContentLoaded', () => {
	
	document.addEventListener('form_validation', function(event){
		const form = event.detail;
		console.clear();
		console.log("Nickname: ", form.nickname);
		console.log("Email: ", form.email);
		console.log("Message: ", form.message);

		const time_stamp = new Date().toLocaleString();
		console.log("Timestamp: ", time_stamp);
	});

})
