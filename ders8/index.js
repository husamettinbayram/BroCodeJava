

let age = 0;


document.getElementById("ageButton").onclick = function () {
    age = document.getElementById("ageArea").value;

    if (age <= 18) {
        document.getElementById("imaj1").style.display = "block";
    } else if (age <= 40) { 
        document.getElementById("imaj2").style.display = "block";
    }else{
        document.getElementById("imaj3").style.display = "block";
    }

}

document.getElementById("ageArea").onclick = function () {
    document.getElementById("ageArea").value="";
    document.getElementById("imaj1").style.display = "none";
    document.getElementById("imaj2").style.display = "none";
    document.getElementById("imaj3").style.display = "none";
}