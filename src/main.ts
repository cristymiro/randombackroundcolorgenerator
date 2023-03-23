const button = document.querySelector(".clickButton");

button!.addEventListener("click", function(e){
    e.preventDefault();
    const red = generateBgColor();
    const green = generateBgColor();
    const blue = generateBgColor();
    const rgb = `${red}, ${green}, ${blue}`;
    const backgrounColor = "rgb(" + rgb + ")";
    
    document.body.style.background = backgrounColor;

});

function generateBgColor(){
    const numberRandom = Math.floor(Math.random() * 256);
    return numberRandom;
}
