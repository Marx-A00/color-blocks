console.log('🟥 🟦 🟩 🟨');
let redColorCounter = 1;
let blueColorCounter = 1;
let greenColorCounter = 1;
let yellowColorCounter = 1;

function onRedClick(){

    let redBlock = document.getElementById("blocks");
    redBlock.innerHTML += `<div onclick="deleteRedBlock(event)" class ="block red-fill"></div>`;
    let redValue = document.getElementById("red-count");
    redColorCounter++
    redValue.textContent = redColorCounter;
    console.log(redValue);

}

function onBlueClick(){
    let blueBlock = document.getElementById("blocks");
    blueBlock.innerHTML += `<div onclick="deleteBlueBlock(event)" class ="block blue-fill"></div>`;
    let blueValue = document.getElementById("blue-count");
    blueColorCounter++;
    blueValue.textContent = blueColorCounter;


}

function onGreenClick(){
    let greenBlock = document.getElementById("blocks");
    greenBlock.innerHTML += `<div onclick="deleteGreenBlock(event)" class ="block green-fill"></div>`;
    let greenValue = document.getElementById("green-count");
    greenColorCounter++;
    greenValue.textContent = greenColorCounter;
    

}

function onYellowClick(){
    let yellowBlock = document.getElementById("blocks");
    yellowBlock.innerHTML += `<div onclick="deleteYellowBlock(event)" class ="block yellow-fill"></div>`;
    let yellowValue = document.getElementById("yellow-count");
    yellowColorCounter++;
    yellowValue.textContent = yellowColorCounter;

}

function deleteRedBlock(event){
    event.target.remove();
    let redValue = document.getElementById("red-count");
    redColorCounter --; 
    redValue.textContent = redColorCounter;

}

function deleteBlueBlock(event){
    event.target.remove();
    let blueValue = document.getElementById("blue-count");
    blueColorCounter--;
    blueValue.textContent = blueColorCounter;


}

function deleteGreenBlock(event){
    event.target.remove();
    let greenValue = document.getElementById("green-count");
    greenColorCounter--;
    greenValue.textContent = greenColorCounter;

}

function deleteYellowBlock(event){
    event.target.remove();
    let yellowValue = document.getElementById("yellow-count");
    yellowColorCounter--;
    yellowValue.textContent = yellowColorCounter;

}
