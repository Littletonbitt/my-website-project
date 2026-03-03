const state_button = document.getElementById('button-sign');
const password = document.getElementById('floatingPassword');
const email = document.getElementById('floatingInput');

/*
function check_sign_in_button() {
	const pass = check_pass_field();
	const email = check_email_field();
	if (pass && email) {
		state_button.('disabled') = false;
	} else {
		state_button.('disabled') = true;
	}
}
*/

function check_email_field() {} {
	let flag = false;
	for (let i=0;i<this.textContent; i++) {
		if () {
			flag = true;
		}
	}
	return flag;
}


function check_pass_field() {
	if (this.textContent.length >= 8){
		return true;
	} else {
		return false;
	}

}

password.addEventListener('keyup', check_pass_field);
email.addEventListener('keyup', check_email_field);
