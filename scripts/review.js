document.addEventListener("DOMContentLoaded", () => {

	const stars = document.querySelectorAll('#rating-select-num');

	let rating = 0;
        stars.forEach((star, index) => {
        	star.addEventListener('click', () => {

                	stars.forEach((s,i) => {
                        	if (i <= index){
                                	s.classList.add('bi-star-fill');
                                       	s.classList.remove('bi-star');
                                        rating = i+1;
                                } else {
                                	s.classList.add('bi-star');
                                       	s.classList.remove('bi-star-fill');
                                }
                        });

                });
        });

	const form = document.getElementById('share-form');
	const name = document.getElementById('name');
        const email = document.getElementById('email');
        const button = document.getElementById('submit-button-review');
	const checkbox1 = document.getElementById('consent1');
	const checkbox2 = document.getElementById('consent2');

	
	function check_name() {
        	name_value = name.value.trim();
                let ans = false;
                let name_pattern = /[A-Za-z]{2,}/;
                if (name_pattern.test(name_value)){
                	ans = true;
               	}
                return ans;
        }

        function check_email() {
        	email_value = email.value.trim();
                let ans = false;
                let email_pattern = /\w+\@+\w+\.+\w+/;
                if (email_pattern.test(email_value)){
                	ans = true;
               	}
                return ans;
	}

	function validate() {
		const name_ans = check_name();
		const email_ans = check_email();
		const rating_ans = rating > 0;
		const valid = name_ans && email_ans && rating_ans && checkbox1.checked && checkbox2.checked;
		button.disabled = !valid;
		return valid;
	}

	name.addEventListener('input', validate);
	email.addEventListener('input', validate);
	consent1.addEventListener('change', validate);
	consent2.addEventListener('change', validate);

	stars.forEach(star => star.addEventListener('click', validate));

	form.addEventListener('submit', function(event) {
		event.preventDefault();

		if (validate()){
			const form_data = {
				nickname: name_value,
				email: email_value,
				message: document.getElementById('review').value.trim() || "(not filled)"
			}

			const new_event = new CustomEvent('form_validation', {detail: form_data});
			document.dispatchEvent(new_event);
		}
	});
});


