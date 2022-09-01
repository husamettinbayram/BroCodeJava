
// document.getElementById("myButton").onclick = function () {

//     if(document.getElementById("myCheckBox").checked == true) {
//         document.getElementById("subsField").innerHTML = "you are subscribed";

//     } else {
//         document.getElementById("subsField").innerHTML = "you are not subscribed";
//     }

//     document.getElementById("myLabel").onmouseover = function () {
//         document.getElementById("subsField").innerHTML = "";
//     }

// }

// bunu şimdi değişken kullanarak yapalım. 
// tek fark document.getElementById("myCheckBox").checked ifadesini bir değişkene atadık (checkBox)



document.getElementById("myButton").onclick = function () {

    var checkBox = document.getElementById("myCheckBox").checked;
    // var checkBox = document.getElementById("myCheckBox");
    // if (checkBox.checked)
    // şeklinde yapıyor. ayrıca var yerine const kullanıyor

    var visa = document.getElementById("visaBtn");
    // var visa = document.getElementById("visaBtn").checked;
    var master = document.getElementById("mstrBtn");
    // var master = document.getElementById("mstrBtn").checked;
    var paypal = document.getElementById("PyPlBtn");
    // var paypal = document.getElementById("PyPlBtn").checked;

    var Card;
    var Control;

    // if (visa.checked) veya  if (visa.checked == true)  iki şekilde de çalışıyor
    // if (visa.checked) {
    if (visa.checked == true) {
        Card = "You are paying using Visa.";
        Control = 1;

        // }else if (master.checked) {
    } else if (master.checked == true) {
        Card = "You are paying using Mastercard.";
        Control = 1;

        // }else if (paypal.checked) {
    } else if (paypal.checked == true) {
        Card = "You are paying using PayPal.";
        Control = 1;
    } else {
        Card = "You have to select a payment method to continue. Please try again."
        Control = 0;
    }


    // checkBox değişkeni true-false değer aldığı için doğrudan if statement içinde kullanılınca da çalışıyor. checkBox == true diye kontrol etmek keyfi
    // true ise zaten çalışıyor. false için yine kontrol etmek gerekiyor
    // if (checkBox == true && Control == 1) {
    if (checkBox && Control == 1) {
        document.getElementById("subsField").innerHTML = "you are subscribed. " + Card;

    } else if (checkBox == false) {
        document.getElementById("subsField").innerHTML = "you are not subscribed. You won't be charged.";
        // } else if (checkBox == true && Control == 0) {
    } else if (checkBox && Control == 0) {
        document.getElementById("subsField").innerHTML = Card;
    }

    document.getElementById("myLabel").onmouseover = function () {
        document.getElementById("subsField").innerHTML = "";
    }


}


