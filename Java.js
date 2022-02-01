
function LoginPlayer(){
    console.log("loginplayer was called ")
    const loginForm= document.getElementById(LoginForm);
    const username = LoginForm.username.value;
    const password =LoginForm.password.value;
    var LoginDetails={
        username: username,
        password: password
    }
    console.log(JSON.stringify(LoginDetails));
    //globalvar.register(LoginDetails);
}

function SignupPlayer(){
    console.log("signup player was called");
    const SignupForm= document.getElementById(signupForm);
    const newusername = signupForm.newusername.value;
    const newpassword = signupForm.newpassword.value;
    
    var PlayerDetails={
        username: newusername,
        password: newpassword
    }
    console.log(JSON.stringify(PlayerDetails));
   // globalvar.register(PlayerDetails);

}

function LoginCheck(){
    var check = false;
    while(!false){
        if(username =checkusername){
            console.log("correct username");
            check = true;
        }

        else{
            console.log("wrong username")
        }
    }
    if(password = checkpassword){
        console.log("correct user and pass")
    }
    else{
        console.log("wrong password try again")
    }
}