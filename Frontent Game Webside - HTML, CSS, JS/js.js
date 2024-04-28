var timer = 60;
var score = 0;
var hitrn;
var audio1 = new Audio('click.wav');
var audio2 = new Audio('Money-1.mp3');
var audio3 = new Audio('Thug life.mp3');



function makeBubble(){
    var clutter = "";

for(var i = 1; i<=171; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector('#pbtm').innerHTML = clutter
}

function runTimer(){
   var timerint = setInterval(function() {
        if(timer > 0){
        timer--;
        document.querySelector("#timervar").textContent = timer;
        }
        else{
            clearInterval(timerint)
            audio3.play();
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000);
}

function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    audio1.play();
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
       increaseScore();
       audio2.play();
       makeBubble();
       getNewHit();
    }
})
runTimer();
makeBubble();
getNewHit();