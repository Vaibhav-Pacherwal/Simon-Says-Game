let gameSeq = [];
let userSeq = [];

ranSeq = ["red","green","yellow","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function() {
        btn.classList.remove("gameFlash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },220);
}

function errorFlash() {
    body = document.querySelector("body");
    body.classList.add("errorFlash");
    setTimeout(function() {
        body.classList.remove("errorFlash");
    },200);
}

let trackVal = [];
let maxVal = 0;
let maxVal1 = 0;
function verifySeq(idx) {;
    if(gameSeq[idx] === userSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
            trackVal.push(level);
            console.log(trackVal);
        }
    }
    else {
        maxVal = Math.max(...trackVal); 
        if(level > maxVal) {
            h2.innerHTML = `Game Over! You achieved the highest score of <b>${level}</b><br>Press any key to restart the game`;
        } else {
            h2.innerHTML = `Game Over! Your score is <b>${level}</b><br>Press any key to restart the game`;
        }
        errorFlash();
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
    }
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randInx = Math.floor(Math.random()*4);
    let randElement = ranSeq[randInx];
    let btnAccess = document.querySelector(`.${randElement}`);
    btnFlash(btnAccess);
    gameSeq.push(randElement);
    console.log(gameSeq)
}

function pressBtn() {
    console.log(this)
    userFlash(this);
    let userColor = this.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    verifySeq(userSeq.length-1);
}

let btnAll = document.querySelectorAll(".btn");
for(let btn of btnAll) {
    btn.addEventListener("click",pressBtn);
}








