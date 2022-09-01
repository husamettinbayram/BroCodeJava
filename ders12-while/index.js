// =====================while loop example================

// let userName= "";

// while (userName == "" || userName== null){
//     userName = window.prompt("enter your name");

// }
// document.write("Hosgeldin " + userName);
// console.log("Hosgeldin " + userName);



// =====================do-while loop example================
// let userName;
// do{
//     userName = window.prompt("enter your name");
// }while (userName == "" || userName== null);

// document.write("Hosgeldin " + userName);
// console.log("Hosgeldin " + userName);



// =====================for loop example================
// let i;
// for (let i=1 ; i<10 ; i+=1) {
//     document.write("merhaba " + i +"<br> <hr>");
//     console.log("Hosgeldin ");
// }

// console.log(i);
// counter sadece for içinde tanımlı dışarıda tanınmıyor
// eger dongu dışında tanımlarsan i'yi, dışarıdan da erişilebilir.


// for (let i=1 ; i <= 20 ; i+=1){
//     if (i == 13){
//         break;
//             }
//         console.log(i)
//     }

for (let i=1 ; i <= 20 ; i+=1){
    if (i == 13){
        continue;
            }
        console.log("i",i);
    }