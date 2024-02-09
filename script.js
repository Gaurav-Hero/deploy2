let main = document.querySelector('.dash-main')
let loginBtn = document.querySelector('.logBtn')
loginBtn.addEventListener('click',function(){
    main.innerHTML =" <div>name</div> <input type='text' name='' id=''>";
})
let text = document.querySelector('#nav-part2')
let body  = document.querySelector('#page1');
let flag = 0;
let img = document.querySelector('img');
img.addEventListener('click',function(){
    if (flag == 0){
        body.style.backgroundColor="black";
        text.style.color="cyan"
         flag= 1;
         console.log("black")
    }
    else{
        body.style.backgroundColor = "#e2fafd";
        flag = 0; 
        console.log("white")
    }
})