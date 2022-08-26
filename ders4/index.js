let Height = 0;
let Width = 0;
let Hypotenuse = 0;

document.getElementById("diButton").onclick = function () {
    Height = document.getElementById("diText1").value;
    Width = document.getElementById("diText2").value;
    console.log(Height, typeof Height);
    console.log(Width, typeof Width);

    Hypotenuse = Math.round(Math.sqrt(Number(Height) * Number(Height) + Number(Width)*Number(Width)) * 1000);
    Hypotenuse = Hypotenuse/1000;
    //buradaki 1000 ile carpma ve tekrar 1000e bolmeyi 3 ondalik hane istedigimiz icin yaptik
    console.log(Hypotenuse, typeof Hypotenuse);

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "The hypotenuse is " + String(Hypotenuse) + " cms";
    
    document.getElementById("diText1").value="";
    document.getElementById("diText2").value="";
    //hesaplama yaptiktan sonra alan bosaltiliyor

}
