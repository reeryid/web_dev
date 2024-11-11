
lengthDrum = document.querySelectorAll(".drum").length;
for (i=0; i<lengthDrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        const tombol = this.innerHTML
        makeSound(tombol)
        buttonAnimate(tombol)
    })

}


document.addEventListener("keypress", function(e){
    makeSound(e.key)    
    buttonAnimate(e.key)
})

function makeSound(key){

    switch(key){
        case "w":
            audio = new Audio("sounds/snare.mp3");
            console.log(key);
            audio.play();
            break;
        case "a":
            audio1 = new Audio("sounds/kick-bass.mp3");
            console.log(key);
            audio1.play();
            break;
        case "s":
            audio2 = new Audio("sounds/crash.mp3");
            console.log(key);
            audio2.play();
            break;
        case "d":
            audio3 = new Audio("sounds/tom-1.mp3");
            console.log(key);
            audio3.play();
            break;
        case "j":
            audio4 = new Audio("sounds/tom-2.mp3");
            console.log(key);
            audio4.play();
            break;
        case "k":
            audio5 = new Audio("sounds/tom-3.mp3");
            console.log(key);
            audio5.play();
            break;
        case "l":
            audio6 = new Audio("sounds/tom-4.mp3");
            console.log(key);
            audio6.play();
            break;
        default:
            console.log(key)
    }
}

function buttonAnimate(key){
    const pressed = document.querySelector("."+key)
    
    pressed.classList.add("pressed");
    setTimeout(() => {
        pressed.classList.remove("pressed");
      }, "100");
    
}