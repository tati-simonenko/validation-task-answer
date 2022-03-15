const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var passwordValue = '';

username.addEventListener('focusout', e => {	
	const usernameValue = username.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Придумайте логин');
	} else {
		setSuccessFor(username);
	}
});

email.addEventListener('focusout', e => {	
	const emailValue = email.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Введите email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Неправильный email');
	} else {
		setSuccessFor(email);
	}
});

password.addEventListener('focusout', e => {	
	passwordValue = password.value.trim();

	if(passwordValue === '') {
		setErrorFor(password, 'Придумайте пароль');
		
	} else if (passwordValue.length < 5) {
		setErrorFor(password, 'Меньше 5 символов, придумайте длиннее');
	} else {
		setSuccessFor(password);
	}
});

password2.addEventListener('focusout', e => {	
	const password2Value = password2.value.trim();

	if(password2Value === '') {
		setErrorFor(password2, 'Повторите пароль');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Пароли не совпадают');
	} else{
		setSuccessFor(password2);
	}
});

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
