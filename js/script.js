function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login functionality here
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    alert(`Logging in as ${username}`);
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement signup functionality here
    const role = document.getElementById('role').value;
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    alert(`Signing up as ${role}: ${username}`);
});
