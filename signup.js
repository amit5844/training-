document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission initially


    let isValid=true;
    // Get form field values
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Get the error message container (make sure you have an element with this ID in your HTML)
    // const errorMessage = document.getElementById('error-message');
    // errorMessage.textContent = "";  // Clear any previous error messages
        document.getElementById('usernameerror').textContent = ``;
        document.getElementById('phoneerror').textContent = ``
        document.getElementById('emailerror').textContent = ``;
        document.getElementById('passworderror').textContent = ``;
        document.getElementById('confirmpassworderror').textContent = ``;
        document.getElementById('successMessage').style.display = 'none';


    // 1. Validate username length
    if (username.length < 6 || username.length > 10) {
        //alert("Username must be between 6 and 10 characters.");
        document.getElementById('usernameerror').textContent= `Username must be between 6 and 10 characters.`;
        isValid= false;
    }

    // 2. Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
       //alert("Invalid email format.");
       document.getElementById('emailerror').textContent= `Invalid email format.`;
        isValid= false;
    }

    // 3. Validate mobile number length (exactly 10 digits)
    if (!/^\d{10}$/.test(phone)) {
        // alert("Mobile number must be exactly 10 digits.");
        document.getElementById('phoneerror').textContent = `Mobile number must be exactly 10 digits.`;
        isValid= false;
    }

    // 4. Validate password (must contain a digit, a letter, and a special character)
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{6,}$/;
    if (!passwordPattern.test(password)) {
        // alert("Password must contain at least one letter, one digit, and one special character.");
        document.getElementById('passworderror').textContent=`Password must contain at least one letter, one digit, and one special character.`;
        isValid= false;
    }

    // 5. Validate confirm password matches the password
    if (password !== confirmPassword) {
        // alert("Passwords do not match.");
        document.getElementById('confirmpassworderror').textContent = `Password do not match.`;
        isValid= false;
    }

    // Check if the username already exists in localStorage
    if (localStorage.getItem(username)) {
        // alert("Username already exists. Please choose another.");
        document.getElementById('usernameerror').textContent=`Username Already Exits. Please Sign in.`;
        isValid= false;  // Prevent further form submission if the username already exists
    }

    // If all validations pass, store user data in localStorage
    // const newUser = { username, password,phone, email };
    // localStorage.setItem('username', JSON.stringify(newUser));

    // Notify the user that their account is created successfully
    if (isValid) {
        const newUser = { username, password,phone, email };
        localStorage.setItem('username', JSON.stringify(newUser));
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function() {
            window.location.href = 'login.html';  // Redirect to login page
        }, 2000);  // 2 seconds delay before redirect
    } // Redirect to login page
});
