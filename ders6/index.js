let x;
let y;
let z;


console.log(x);
console.log(y);
console.log(z);


document.getElementById("rollButton").onclick = function () {
    x = Math.floor(Math.random() * 6 + 1);
    y = Math.floor(Math.random() * 6 + 1);
    z = Math.floor(Math.random() * 6 + 1);

    // document.getElementById("xlabel").innerHTML = String(x);
    // document.getElementById("ylabel").innerHTML = String(y);
    // document.getElementById("zlabel").innerHTML = String(z);
    //String(x) yapmadan da calisiyor
    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;


}