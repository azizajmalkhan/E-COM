function redirectTo(page) {
    window.location.href = page;
}
function validateSignUp() {
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Store user information in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert("Sign up successful!");
    redirectTo('login.html');
}

function validateLogin() {
    // Retrieve user data from local storage
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Get input values
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if entered credentials match stored credentials
    if (storedEmail !== email || storedPassword !== password) {
        alert("Invalid credentials");
    } else {
        alert("Login successful!");
        redirectTo('index.html'); // Redirect to the dashboard page
    }
}






/*function redirectTo(page) {
    window.location.href = page;
}

function validateSignUp() {
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email is already registered
    if (users.some(user => user.email === email)) {
        alert("Email is already registered");
        return;
    }

    // Add new user to local storage
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Sign up successful!");
    redirectTo('login.html');
}

function validateLogin() {
    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Get input values
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Find user in the stored data
    const user = users.find(u => u.email === email);

    if (!user) {
        alert("Email not found");
    } else if (user.password !== password) {
        alert("Please enter correct password");
    } else {
        alert("Login successful!");
        redirectTo('one.html'); // Redirect to the dashboard page
    }
}
*/