let colorName = document.getElementById('colorName');
let btn1 = document.getElementById('color-1');
let btn2 = document.getElementById('color-2');
let btn3 = document.getElementById('color-3');
let btn4 = document.getElementById('color-4');

btn1.className = "btnBorder";

btn1.addEventListener('click', function(e){
    document.getElementById('colorName');
    colorName.innerText = "Apple Cinnamon";
    btn1.className = "btnBorder";
    btn2.className = "btnBorderNon";
    btn3.className = "btnBorderNon";
    btn4.className = "btnBorderNon";
});
btn2.addEventListener('click', function(e){
    document.getElementById('colorName');
    colorName.innerText = "Pumpkin Spice";
    btn1.className = "btnBorderNon";
    btn2.className = "btnBorder";
    btn3.className = "btnBorderNon";
    btn4.className = "btnBorderNon";
});
btn3.addEventListener('click', function(e){
    document.getElementById('colorName');
    colorName.innerText = "Corn";
    btn1.className = "btnBorderNon";
    btn2.className = "btnBorderNon";
    btn3.className = "btnBorder";
    btn4.className = "btnBorderNon";
});
btn4.addEventListener('click', function(e){
    document.getElementById('colorName');
    colorName.innerText = "The Classic";
    btn1.className = "btnBorderNon";
    btn2.className = "btnBorderNon";
    btn3.className = "btnBorderNon";
    btn4.className = "btnBorder";
});