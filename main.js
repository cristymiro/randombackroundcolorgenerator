const button = document.querySelector(".clickButton");

button.addEventListener("click", function(e){
    e.preventDefault();
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let backgrounColor = "rgb(" + a + "," + b + "," + c + ")";
    
    document.body.style.background = backgrounColor;

});

