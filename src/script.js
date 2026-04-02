const signupBtn = document.querySelector('.btn-signup');
signupBtn.addEventListener('click', (e) => {
e.preventDefault();
alert( 'Signup successful! Redirecting to shop...');
window. location.href = '../html/menu.html';
});

