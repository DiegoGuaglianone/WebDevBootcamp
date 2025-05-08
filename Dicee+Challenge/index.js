function diceRoll()  {
    let number1 = Math.floor(Math.random() * 6) + 1;
    let number2 = Math.floor(Math.random() * 6) + 1;
    let h1 = document.querySelector("h1");

    if(number1 > number2){
        let img =  document.querySelector(".img1")
        img.src = "./images/dice" + number1 + ".png"
        h1.innerHTML = "PLAYER 1 VENCEU!"
    } else if(number2 > number1){
        let img =  document.querySelector(".img2")
        img.src = "./images/dice" + number2 + ".png"
        let h1 = document.querySelector("h1");
        h1.innerHTML = "PLAYER 2 VENCEU!"
    } else{
        let h1 = document.querySelector("h1");
        h1.innerHTML = "EMPATE!"
    }
}
