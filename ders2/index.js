// kullanicidan input almanin kolay yolu - prompt ile

// let username = window.prompt("Whats your name");
// console.log(username);


let username;

document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myText").value = "Your message has been submitted";
    document.getElementById("myText").style.backgroundColor = "blue";
    document.getElementById("myText").style.color = "white";

    // placeholder denedim yapamadim
    // document.getElementById("myText").placeholder = "your name is submitted";
    // document.getElementsByName("myText")[0].placeholder = "abcd";
    // document.getElementById("submitted").style.display = "inline";


    console.log(username);
}


