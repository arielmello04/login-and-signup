document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginDiv = document.getElementById('loginDiv');
    const registerDiv = document.getElementById('registerDiv');
    const message = document.getElementById('message');
    const switchRegisterBtn = document.getElementById('switchRegister');
    const switchLoginBtn = document.getElementById('switchLogin');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        alert (`Successful login, welcome ${email}!`);
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        alert (`Successful register, welcome ${name}!`);
    });

    switchRegisterBtn.addEventListener('click', function () {
        // hide login
        loginDiv.style.display = 'none';
        registerDiv.style.display = 'block';
    });

    switchLoginBtn.addEventListener('click', function () {
        // hide register
        loginDiv.style.display = 'block';
        registerDiv.style.display = 'none';
    });
});
