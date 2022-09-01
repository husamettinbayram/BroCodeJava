
// let width = window.prompt("enter the width");


let width;
let height;
let area;

document.getElementById("WidthBtn").onclick = function () {
    width = document.getElementById("InputArea").value
    document.getElementById("InputArea").value ="";
    document.getElementById("WidthF").innerHTML = "W: " + width;
    if (width != ""){
        document.getElementById("WidthF").style.display = "inline-block";
        document.getElementById("WidthBtn").style.display = "none";
    }
}

document.getElementById("HeightBtn").onclick = function () {
    height = document.getElementById("InputArea").value;
    document.getElementById("InputArea").value ="";
    
    document.getElementById("HeightF").innerHTML = "H: " + height;
    if (height != ""){
        document.getElementById("HeightF").style.display = "inline-block";    
        document.getElementById("HeightBtn").style.display = "none";
    }
}

function hesapla (A, B) {
    return A*B;
}

document.getElementById("Calc").onclick = function () {
    // area = hesapla(width , height);
    // console.log(width);
    // console.log(height);
    // console.log(area);
    document.getElementById("Calc").style.display = "none";
    document.getElementById("InputArea").style.outline = "none";
    document.getElementById("InputArea").style.color = "transparent";
    document.getElementById("Result").style.display = "inline-block";    
    document.getElementById("Result").innerHTML = "R: " + hesapla(width , height);
}