
// step 1 - add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2 - get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step 3 - get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // ---->> DANGER: DO NOT VERIFY email password on the client side <<----

    // step 4 - verify email & password
    if(email === 'saki@asm.com' && password === 'saki'){
        window.location.href = 'bank.html';
    }

    else {
        alert('invalid user');
    }
})