
// let fruits = ["apple" , "orange", "banana"];

// console.log(fruits);
// document.write(fruits);

// document.write("<br>");
// document.write("1. eleman " + fruits[0]+"<br>");
// document.write("2. eleman " + fruits[1]+"<br>");
// document.write("3. eleman " + fruits[2]+"<br>");


// document.write(fruits[fruits.indexOf("apple")]+"<br>");
// //saçma ama kullanımı görmek açısından değerli

// for (let i=0; i<fruits.length;i+=1) {
//     document.write(`${i+1}. eleman : ${fruits[i]} <br>`);
// }

// document.write(`uzunluk : ${fruits.length} <br>`);

// fruits[0] = "coconut";
// for (let i=0; i<fruits.length;i+=1) {
//     document.write(`${i+1}. eleman : ${fruits[i]} <br>`);
// }

let abcd = ["r1c01", "r1c02", "r1c03", "r1c04", "r1c05", "r1c06", "r1c07", "r1c08", "r1c09", "r1c10", "r1c11", "r1c12", "r1c13", "r1c14", "r1c15", "r1c16", "r1c17", "r1c18", "r1c19", "r1c20", "r2c01", "r2c02", "r2c03", "r2c04", "r2c05", "r2c06", "r2c07", "r2c08", "r2c09", "r2c10", "r2c11", "r2c12", "r2c13", "r2c14", "r2c15", "r2c16", "r2c17", "r2c18", "r2c19", "r2c20", "r3c01", "r3c02", "r3c03", "r3c04", "r3c05", "r3c06", "r3c07", "r3c08", "r3c09", "r3c10", "r3c11", "r3c12", "r3c13", "r3c14", "r3c15", "r3c16", "r3c17", "r3c18", "r3c19", "r3c20", "r4c01", "r4c02", "r4c03", "r4c04", "r4c05", "r4c06", "r4c07", "r4c08", "r4c09", "r4c10", "r4c11", "r4c12", "r4c13", "r4c14", "r4c15", "r4c16", "r4c17", "r4c18", "r4c19", "r4c20", "r5c01", "r5c02", "r5c03", "r5c04", "r5c05", "r5c06", "r5c07", "r5c08", "r5c09", "r5c10", "r5c11", "r5c12", "r5c13", "r5c14", "r5c15", "r5c16", "r5c17", "r5c18", "r5c19", "r5c20", "r6c01", "r6c02", "r6c03", "r6c04", "r6c05", "r6c06", "r6c07", "r6c08", "r6c09", "r6c10", "r6c11", "r6c12", "r6c13", "r6c14", "r6c15", "r6c16", "r6c17", "r6c18", "r6c19", "r6c20", "r7c01", "r7c02", "r7c03", "r7c04", "r7c05", "r7c06", "r7c07", "r7c08", "r7c09", "r7c10", "r7c11", "r7c12", "r7c13", "r7c14", "r7c15", "r7c16", "r7c17", "r7c18", "r7c19", "r7c20","r8c01", "r8c02", "r8c03", "r8c04", "r8c05", "r8c06", "r8c07", "r8c08", "r8c09", "r8c10", "r8c11", "r8c12", "r8c13", "r8c14", "r8c15", "r8c16", "r8c17", "r8c18", "r8c19", "r8c20"];
 console.log(abcd.length);
// let randoms = 0;
// let i=0;

function colorManip (C,D) {
    setTimeout(() => { changeColor(C); }, D*1000);
    setTimeout(() => { revertColor(C); }, 1000+D*1000);

}

function changeColor(A) {

    document.getElementById(abcd[A]).style.backgroundColor = "red";
}

function revertColor(B) {

    document.getElementById(abcd[B]).style.backgroundColor = "teal";


}
// {
// let randoms1 = Math.floor(Math.random() * 60);
// setTimeout(() => { changeColor(randoms1); }, 1000);
// setTimeout(() => { revertColor(randoms1); }, 2000);
// console.log(randoms1);
// let randoms2 = Math.floor(Math.random() * 60);
// setTimeout(() => { changeColor(randoms2); }, 3000);
// setTimeout(() => { revertColor(randoms2); }, 4000);
// console.log(randoms2);
// let randoms3 = Math.floor(Math.random() * 60);
// setTimeout(() => { changeColor(randoms3); }, 5000);
// setTimeout(() => { revertColor(randoms3); }, 6000);
// console.log(randoms3);
// }

// setTimeout(changeColor(11), 5000);
// setTimeout(changeColor(12), 5000);
// setTimeout(changeColor(13), 5000);
// setInterval(revertColor(10), 100);
// randoms= Math.floor(Math.random() * 60);
// console.log(randoms);


// while (i < 1000) {
    // randoms = Math.floor(Math.random() * 60);
    // times=1000*i;
    // times2=1000*i;
    // setTimeout(() => { changeColor(randoms); }, 1000);
    // setTimeout(() => { revertColor(randoms); }, 5000);
    // setTimeout(changeColor(randoms), times);
    // setTimeout(revertColor(randoms), times*2);
    // revertColor(randoms);
    // setTimeout(500);

    // changeColor(randoms);
    // setTimeout(() => { }, 5000);
    // revertColor(randoms);

    // changeColor(randoms);
    // window.alert("alert");
    // revertColor(randoms);

    // console.log(randoms);
    // console.log(i);
    // console.log(times);
    // console.log(times2);
    // i += 1;
// }


// document.getElementById(abcd[1]).style.backgroundColor = "red";
// document.write(abcd[5]);




// function myLoop() {
//     randoms = Math.floor(Math.random() * 60);
//     setTimeout(function () {   //  call a 3s setTimeout when the loop is called
//         setTimeout(() => { changeColor(randoms); }, 1000);
//         setTimeout(() => { revertColor(randoms); }, 3000);
//         // revertColor(randoms);
//         i++;                    //  increment the counter
//         console.log(i);
//         console.log(randoms);
//         if (i < 30) {           //  if the counter < 10, call the loop function
//             myLoop();             //  ..  again which will trigger another 
//         }                       //  ..  setTimeout()
//     }, 1000)
// }
// myLoop();

// var randoms = [Math.floor(Math.random() * 60)];
// console.log(randoms.length);
// for (let i=1; i<100; i+=1) {
    // randoms.push(Math.floor(Math.random() * 60));
// }
// console.log(randoms);

let counter=0;
// randoms = [10 ,20, 30, 40 ,41, 45];
while (counter < 100){
    randoms = Math.floor(Math.random() * 160);
    // console.log(randoms[counter]);
    colorManip (randoms,counter);
    
    console.log(counter);
    counter = counter+1;

}