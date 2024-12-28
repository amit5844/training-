document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();



    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;


    document.getElementById('usernameerror').textContent = ``;
    document.getElementById('passworderror').textContent = ``;
    document.getElementById('successMessage').style.display = 'none';
    

    // const phone = document.localStorage.getItem()
    //check user exit or not
    const user = JSON.parse(localStorage.getItem('username'));

    if(user){
        if(user.username===username){
            if(user.password===password)
            {
                sessionStorage.setItem('loggedInUser', username);
                sessionStorage.setItem('email',user.email);

                document.getElementById('successMessage').style.display = 'block';
                setTimeout(function() {
                    window.location.href = 'main.html';  // Redirect to main page
                }, 2000);
            }
            else{
               // alert('Wrong password');
                document.getElementById('passworderror').textContent=`Wrong Password`;
            }
        }
        else{
            //alert('username not found please check credentials.');
            document.getElementById('usernameerror').textContent= `username not found please check credentials.`;
        }
        
    }
    else{
        alert('user not found');
    }

});