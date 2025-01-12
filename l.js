document.querySelector('#loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value;

    const errorMessage = document.querySelector('#errorMessage');
    const forgetPassword = document.querySelector('#forgetPassword');

    const correctUsername = 'Aditya Narayan';
    const correctPassword = '0302';

    if (username === correctUsername && password === correctPassword) {
      
        errorMessage.style.display = 'none';
        window.location.href = "http://127.0.0.1:5501/templates/index.html"; 
    } else {
        
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Incorrect username or password.';
      
        forgetPassword.style.display = 'block';
    }
});
