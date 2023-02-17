var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;
// if we click on the start button
document.getElementById("start").onclick=function(){
    // if we are playing
    if(playing == true){
        location.reload()
    }else{//if we are not playing
        playing=true;
        score=0;
        document.getElementById("scoreValue").innerHTML=score;
        show("timing");
        timeremaining=60;
        document.getElementById("timeremaining").innerHTML=timeremaining;
        hide("gameover");
        document.getElementById("start").innerHTML="Reset";
        startCountdown();
        generateQA();
    }
}
for(i=1;i<5;i++){
    choice1=document.getElementById("choice"+i)
choice1.onclick=function(){
    //check if we are playing
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById("scoreValue").innerHTML=score;
            //hide wrong box and show correct
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generateQA();
        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000)
        }
    }
}
}




function startCountdown(){
    action=setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremaining").innerHTML=timeremaining;
        if(timeremaining==0){
            stopCountDown();
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>Game over</p><p>Your score is "+score+"</p>";
            hide("timing");
            hide("correct");
            hide("wrond");
            playing=false;
            document.getElementById("start").innerHTML="Start Game";
        }
    },1000)
}

function stopCountDown(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display="none";
}
function show(Id){
    document.getElementById(Id).style.display="block";
}
function generateQA(){
    var x=1+Math.round(Math.random()*9);
    var y=1+Math.round(Math.random()*9);
    correctAnswer=x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    var correctPosition=1+Math.round(Math.random()*3);
    document.getElementById("choice"+correctPosition).innerHTML=correctAnswer;

    var answers=[correctAnswer];
    for(i=1;i<5;i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer=(1+Math.round(Math.random()*9))*
                (1+Math.round(Math.random()*9));
            
            }while(answers.indexOf(wrongAnswer)>=0)
            document.getElementById("choice"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}