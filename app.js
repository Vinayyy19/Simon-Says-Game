let gameseq = [];
let userseq = [];
let color = ["red","blue","green","orange"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (started == false){
        started=true;
        levelUp();
    }
});
function levelUp(){
    userseq = [];
    level++;
    h2.innerText=`level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor = color[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnFlash(randbtn);
}
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function btnPress() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    chkAns(userseq.length-1);
}
function chkAns(idx) {
    if(userseq[idx]==gameseq[idx]){
    if(userseq.length == gameseq.length){
     setTimeout(levelUp,1000);
    }  }
else{
        h2.innerHTML=`Game over! <b>your score is ${level}<b> <br> Press any key to Restart`;
        reset();
        let body = document.querySelector("body");
        body.classList.add("wrong");
    setTimeout(function() {
        body.classList.remove("wrong");
    }, 250);
    }
}
let allBtns = document.querySelectorAll(".container");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}