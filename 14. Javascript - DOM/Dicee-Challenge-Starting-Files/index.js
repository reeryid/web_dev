const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png")
document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png")

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Win"
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw"
}
else{
    document.querySelector("h1").innerHTML="Player 2 Win"
}