let gameSeq=[];
let userSeq=[];
let btns= ["red" , "purple", "green", "yellow"];

let started =false;
let label=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
 
 if( started ==false){
    console.log("Game Started");
    started= true;

    levelUp();
 }
});

//btnflash
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}



function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }

//level up
function levelUp(){
    userSeq=[];
label++;

h2.innerText= `Level ${label}`;
h2.style.color="blue";

//random btn choose
let randomnum= Math.floor(Math.random() * 3);
let randomcolor=btns[randomnum];
let randombtn = document.querySelector(`.${randomcolor}`);
/*console.log(randomnum);
console.log(randomcolor);
console.log(randombtn);*/
gameSeq.push(randomcolor);
console.log(gameSeq);
gameFlash(randombtn);
}

//addevenlisener

function checkAns(idx){
    //console.log("Current Level : ", label);

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML= `Game Over! Your Score was <b>${label}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150); 
        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
   

}

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress );

}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    label=0;
}

alert("Please Read the Games Rules , Given in below");