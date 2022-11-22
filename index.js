console.log("project is working");
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
const diceroll=new Audio('dice_shake-96201.mp3');

document.getElementById("roll").addEventListener("click",function(e){
    diceroll.play();
    let int1=Math.ceil(1+5*Math.random());
    let int2=Math.ceil(1+5*Math.random());
    p1.innerHTML="";
    p2.innerHTML="";
    p1.innerHTML=`
    <h1>Player 1</h1>
    <img src="${int1}.jpeg">`;
    p2.innerHTML=`
    <h1>Player 2</h1>
    <img src="${int2}.jpeg">`;
    if(int1>int2)
    {
        document.getElementById("win").innerHTML="player1 wins";

    }
    else if(int1<int2)
    {
        document.getElementById("win").innerHTML="player2 wins";
    }
    else{
        document.getElementById("win").innerHTML="Both are equal";
    }

});
