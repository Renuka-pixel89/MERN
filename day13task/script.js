var users = [
    { email: 'test@example.com', password: 'password' }
];

function handleLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            user = users[i];
            break;
        }
    }

    if (user) {
        showWelcomePage();
    } else {
        document.getElementById('loginError').textContent = 'Invalid email or password';
    }
}

function showSignUpForm() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('signUpSection').style.display = 'block';
}

function handleSignUp() {
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        document.getElementById('signUpError').textContent = 'Passwords do not match';
    } else {
        users.push({ email: newEmail, password: newPassword });
        alert('Sign up successful');
        document.getElementById('signUpSection').style.display = 'none';
        document.getElementById('loginSection').style.display = 'block';
    }
}

function handleForgotPassword() {
    alert('Password reset link has been sent to your email');
}

function showWelcomePage() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('signUpSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
    startTimer();
}

function startTimer() {
    var timeLeft = 60;
    var timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            window.location.href = window.location.href;
        } else {
            document.getElementById('timer').textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}
