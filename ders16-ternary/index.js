
let winx = true;
console.log(winx) 
checkWinner(winx);

function checkWinner (WIN) {
    WIN ? console.log("you won") : console.log("you lost");
    console.log("ic win:", WIN );
    console.log("dis win:", winx );
}
// WIN doğrudan true veya false geldiği ve if de true false kullandığı için (WIN == true) yapmamıza gerek yok


// console.log("ic win:", WIN );
// bu WIN değişkenini görmez





// let adult = checkAge (12);

// function checkAge (age) {
//     // (age >= 18) ? (return true;) : ( return false;);
//     return (age <= 18) ? true: false;
// }
// console.log(adult);



// function checkAge (age) {
//     if (age >= 18) {
//         return true;
//     }else {
//         return false;
//     }
// }