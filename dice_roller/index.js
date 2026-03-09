function rollDice(){ 
    const n = document.getElementById("num").value;
    const res = document.getElementById("diceResult");
    const imgs = document.getElementById("diceImgs");
    const values = [];
    const dice_imgs = [];

    for(let i = 0; i < n;++i){
        const value = Math.floor(Math.random()*6)+1; 
        values.push(value);
        dice_imgs.push(`<img src="dice_imgs/${value}.png">`);
    }

    res.textContent = `Dice: ${values.join(", ")}`;
    imgs.innerHTML = dice_imgs.join(" ");
}