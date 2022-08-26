// prompt("Welcome to the rectangle area calculation program");
// bunu yaparsan ok-cancel ve bir input field çıkıyor, gerek yok burada

window.alert("Welcome to the rectangle area calculation program");

let Height = 0;
let Width = 0;
let Area = 0;

document.getElementById("diButton").onclick = function () {
    Height = document.getElementById("diText1").value;
    Width = document.getElementById("diText2").value;
    console.log(Height, typeof Height);
    console.log(Width, typeof Width);

    Area = Number(Height) * Number(Width);
    console.log(Area, typeof Area);

    document.getElementById("result").style.display = "block";
    // document.getElementById("result").innerHTML = String(Area);
    document.getElementById("result").innerHTML = Area;
    console.log(Math.PI, typeof Math.PI);

}
