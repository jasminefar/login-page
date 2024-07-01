document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    // Simulate a login (replace with actual login logic)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
});
