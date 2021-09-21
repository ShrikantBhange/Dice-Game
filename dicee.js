// var x = Math.random();
// x = x * 6 ;
// x = Math.floor (x)+1;

// if(x===1){
//     document.querySelector("img").src="images/dice1.png";
// }
// else if(x===2){
//     document.querySelector("img").src="images/dice2.png";
// }
// else if(x===3){
//     document.querySelector("img").src="images/dice3.png";
// }
// else if(x===4){
//     document.querySelector("img").src="images/dice4.png";
// }
// else if(x===5){
//     document.querySelector("img").src="images/dice5.png";
// }
// else{
//     document.querySelector("img").src="images/dice6.png";
// }

// var y = Math.random();
// y = y * 6 ;
// y = Math.floor (y)+1;

// if(y===1){
//     document.querySelectorAll("img")[1].src="images/dice1.png";
// }
// else if(y===2){
//     document.querySelectorAll("img")[1].src="images/dice2.png";
// }
// else if(y===3){
//     document.querySelectorAll("img")[1].src="images/dice3.png";
// }
// else if(y===4){
//     document.querySelectorAll("img")[1].src="images/dice4.png";
// }
// else if(y===5){
//     document.querySelectorAll("img")[1].src="images/dice5.png";
// }
// else{
//     document.querySelectorAll("img")[1].src="images/dice6.png";
// }

// if(y>x){
//     document.querySelector("h1").innerText=("Player 1 Wins🚩");
// }
// else if(x>y){
//     document.querySelector("h1").innerText=("🏆Player 2 Wins");
// }
// else{
//     document.querySelector("h1").innerText=("Draw🤙🏻");
// }

// OR-------------------OR-------------------

var a = Math.floor(Math.random() * 6 ) + 1;
var i = "images/dice"+a+".png" ;
document.querySelector("img").src=i;

var b = Math.floor(Math.random() * 6 ) + 1;
var c = "images/dice"+b+".png" ;
document.querySelectorAll("img")[1].src=c;

if(a>b){
    document.querySelector("h1").innerText=("Player 1 Wins🚩");
}
else if(b>a){
    document.querySelector("h1").innerText=("🏆Player 2 Wins");
}
else{
    document.querySelector("h1").innerText=("Draw🤙🏻");
}