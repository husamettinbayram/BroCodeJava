let tempEntered = 0;
let tempConverted = 0;
let sensitivity = 100;
// let CASE = 0;

document.getElementById("Cnvrt").onclick = function () {

    tempEntered = document.getElementById("inputField").value;

    let FC = document.getElementById("radF-C").checked;
    let CF = document.getElementById("radC-F").checked;

    let FK = document.getElementById("radF-K").checked;
    let KF = document.getElementById("radK-F").checked;

    let CK = document.getElementById("radC-K").checked;
    let KC = document.getElementById("radK-C").checked;
    console.log(FC, CF, FK, KF, CK, KC);


    if (FC) {
        tempConverted = Math.round(((tempEntered - 32) * 5 / 9) * sensitivity) / sensitivity;
        document.getElementById("ResultField").innerHTML = tempConverted;
        document.getElementById("ResultField").style.display="block";
        
    } else if (CF) {
        tempConverted = Math.round((tempEntered * 1.8 + 32) * sensitivity) / sensitivity;
        document.getElementById("ResultField").innerHTML = tempConverted;
        document.getElementById("ResultField").style.display="block";
        
    } else if (FK) {
        tempConverted = Math.round(((tempEntered - 32) * 5 / 9 + 273.15) * sensitivity) / sensitivity;
        document.getElementById("ResultField").innerHTML = tempConverted;
        document.getElementById("ResultField").style.display="block";
        
    } else if (KF) {
        tempConverted = Math.round(((tempEntered - 273.15) * 1.8 + 32) * sensitivity) / sensitivity;
        document.getElementById("ResultField").innerHTML = tempConverted;
        document.getElementById("ResultField").style.display="block";
        
    } else if (CK) {
        tempConverted = Math.round((273.15 + tempEntered) * sensitivity) / sensitivity;
        // tempConverted = Math.ceil((Number(tempEntered) + 273.15) * sensitivity) / sensitivity;
        //burada tempEntered'i Number tipine çeviriyorum çünküğ conversion için yapılan işlemlerde ilk (+) ile kaşılaşıyor
        document.getElementById("ResultField").innerHTML = tempConverted;
        document.getElementById("ResultField").style.display="block";

    } else if (KC) {
        tempConverted = Math.round((tempEntered - 273.15) * sensitivity) / sensitivity;
        document.getElementById("ResultField").innerHTML = tempConverted;
        document.getElementById("ResultField").style.display="block";
        
    } else {
        console.log("entered else");
        document.getElementById("ResultField").innerHTML = "Please check one of the available conversion types!!!";
        document.getElementById("ResultField").style.display="block";
        document.getElementById("ResultField").style.fontSize="20px";
    }
    // console.log("tempEntered", tempEntered);
    // console.log("tempConverted", tempConverted);

    // document.getElementById("ResultField").innerHTML = tempConverted;

}

document.getElementById("inputField").onclick = function () {
    document.getElementById("ResultField").style.display="none";
    document.getElementById("ResultField").style.color="none";
    document.getElementById("ResultField").innerHTML = "";
    document.getElementById("ResultField").style.fontSize="40px";
    document.getElementById("inputField").value="";
    document.getElementById("inputField").style.color="red";
}

