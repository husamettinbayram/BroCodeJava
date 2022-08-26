

let Counter = Number(document.getElementById("counterLabel").innerHTML);
// html icinde tanimlanan baslangic degeri ile baslamak icin boyle yaptik.
// bunun yerine Counter=0; yapilip da gecilebilir 
console.log(Counter);



document.getElementById("increase").onclick = function () {
    Counter = Counter + 1;
    // document.getElementById("counterLabel").innerHTML = String(Counter);
    document.getElementById("counterLabel").innerHTML = Counter;
}

document.getElementById("decrease").onclick = function () {
    Counter = Counter - 1;
    // document.getElementById("counterLabel").innerHTML = String(Counter);
    document.getElementById("counterLabel").innerHTML = Counter;
}

document.getElementById("Reset").onclick = function () {
    Counter = 0;
    // document.getElementById("counterLabel").innerHTML = String(Counter);
    document.getElementById("counterLabel").innerHTML = Counter;
}

document.getElementById("multiply2").onclick = function () {
    Counter = Counter * 2;
    // document.getElementById("counterLabel").innerHTML = String(Counter);
    document.getElementById("counterLabel").innerHTML = Counter;
}

document.getElementById("multiply5").onclick = function () {
    Counter = Counter * 5;
    // document.getElementById("counterLabel").innerHTML = String(Counter);
    document.getElementById("counterLabel").innerHTML = Counter;
}

document.getElementById("multiply10").onclick = function () {
    Counter = Counter * 10;
    // document.getElementById("counterLabel").innerHTML = String(Counter);
    document.getElementById("counterLabel").innerHTML = Counter;
}