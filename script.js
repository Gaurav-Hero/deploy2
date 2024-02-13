let CreateAccContent = '<div class="form1"><h2>SignUp</h2><h6>Stay updated on your chit chats</h6><form method="POST" class="signup"><input type="text" id="usrname" placeholder="Username" autofocus ><input type="email" id="email" placeholder="Email"><br><input type="password" id="passw" placeholder="Create Password" required><br><input type="password" id="passw" placeholder="Confirm Password" required><br><input type="number" placesholder = "Enter 10 Digit Phone Number"  id="phone"><br><input type="submit" value="Create" class="sign"><span class="shows" onclick= "shows()" >show</span><span class="logins" onclick="LoginPage()">Already have an Account?</span></form></div>';

let loginContent = '<div class="form"><h2>Login</h2><h6>Stay updated on your chit chats</h6><form method="POST" name="login" class="login"><input type="text" id="usr" placeholder="Username or Email" autofocus ><br><input type="password" id="pass" placeholder="Password" required><br><input type="submit" value="LOGIN" class="submit"><span class="show" onclick= "show()" >show password</span><span class="createacc" onclick="createacc()">Don\'t have an Account?</span></form></div>';

let main = document.querySelector('.dash-main')
let loginBtn = document.querySelector('.logBtn')
loginBtn.addEventListener('click',function(){
    main.innerHTML =loginContent;
})
let text = document.querySelector('#nav-part2')
let body  = document.querySelector('#page1');
let flag = 0;
let img = document.querySelector('img');
img.addEventListener('click',function(){
    if (flag == 0){
        body.style.backgroundColor="black";
        text.style.color="cyan";
         flag= 1;
    }
    else{
        body.style.backgroundColor = "#e2fafd";
        text.style.color="black";
        flag = 0;
    }
})
function show(){
    var input = document.getElementById("pass");
    if (input.type === "password"){
        input.type = "text";
    }
    else {
        input.type="password";
    }
}
function shows(){
    var input1 = document.getElementById("passw");
    if (input1.type === "password"){
        input1.type = "text";
    }
    else {
        input1.type="password";
    }
    var input = document.getElementById("passwr");
    if (input.type === "password"){
        input.type = "text";
    }
    else {
        input.type="password";
    }
}
// create account button js-----
function createacc(){
    main.innerHTML=CreateAccContent; 
}
function LoginPage(){
    main.innerHTML =loginContent;
}