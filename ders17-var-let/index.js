
// let i;
// for (i=1 ; i<=30; i+=1) {
//     console.log("counter", i);
// }

// // console.log("var i", i);
// console.log("let i", i);

doSomething();

function doSomething() {
    for (var i = 1; i <= 30; i += 1) {
        console.log("counter = ", i);
    }
    console.log("outside for =" ,i)

}

console.log("outside function =" ,i)