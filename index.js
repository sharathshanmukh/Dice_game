var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src",("images/dice" +randomnumber1 +".png"));
document.querySelector(".img2").setAttribute("src",("images/dice" +randomnumber2 +".png"));
document.querySelector("h1").style.fontSize="50px"
if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="🚩 Player two won";
}
else if (randomnumber2<randomnumber1)
{
    
    document.querySelector("h1").innerHTML="🚩 Player one won";
    
}
else
{
    document.querySelector("h1").innerHTML="Tied";
}