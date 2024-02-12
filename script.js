let main = document.querySelector('.dash-main')
let loginBtn = document.querySelector('.logBtn')
loginBtn.addEventListener('click',function(){
    main.innerHTML ='<div class="lgn"><div class="form"><h2>Sign in</h2><h6>Stay updated on your chit chats</h6><form method="POST" name="login" class="login"><input type="text" name="usr" id="usr" placeholder="Username or Email" autofocus ><br><input type="password" name="pass" id="pass" placeholder="Password" required><br><input type="submit" value="LOGIN" class="submit"><span class="show" onclick= "show()" >show</span></form></div></div>';
})
let text = document.querySelector('#nav-part2')
let body  = document.querySelector('#page1');
let flag = 0;
let img = document.querySelector('img');
img.addEventListener('click',function(){
    if (flag == 0){
        body.style.backgroundColor="#202124";
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