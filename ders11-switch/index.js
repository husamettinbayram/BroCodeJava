
// let grade = "A"

// switch (grade) {
//     case "A":
//         document.write("you did great! Your grade is an A");
//         break;

//     case "B":
//         document.write("Your grade is B, you can improve yourself");
//         break;

//     case "C":
//         document.write("Your grade is C, you have to work harder");
//         break;

//     case "F":
//         document.write("Your grade is F, you failed. You can take the course next semester");
//         break;

// }

let theGrade;

// function Calistir () {
//     theGrade=document.getElementById("enterGrade").value;
//     console.log(theGrade);


//     switch (theGrade) {
//             case "A":
//                 document.write("you did great! Your grade is an A");
//                 break;

//             case "B":
//                 document.write("Your grade is B, you can improve yourself");
//                 break;

//             case "C":
//                 document.write("Your grade is C, you have to work harder");
//                 break;

//             case "F":
//                 document.write("Your grade is F, you failed. You can take the course next semester");
//                 break;

// }
// }


document.getElementById("gradeButton").onclick = function () { Calistir() };

function Calistir() {
    // document.getElementById("deneme").style.backgroundColor= "#123456";
    theGrade = document.getElementById("enterGrade").value;
    // console.log("theGrade : "+ theGrade);
    // console.log(theGrade);
    document.getElementById("sonucAlani").style.display = "block";

    switch (theGrade) {
        case "A":
        case "a":
            document.getElementById("sonucAlani").innerHTML = "Your grade is A. You did a great Job. Well Done!";
            document.getElementById("sonucAlani").style.backgroundColor = "green";
            break;

        case "B":
        case "b":
            document.getElementById("sonucAlani").innerHTML = "Your grade is B, you did good";
            document.getElementById("sonucAlani").style.backgroundColor = "cyan";
            break;

        case "C":
        case "c":
            document.getElementById("sonucAlani").innerHTML = "Your grade is C, you did okay";
            document.getElementById("sonucAlani").style.backgroundColor = "yellow";

            break;

        case "D":
        case "d":
            document.getElementById("sonucAlani").innerHTML = "Your grade is D, you passed";
            document.getElementById("sonucAlani").style.backgroundColor = "orange";

            break;

        case "F":
        case "f":
            document.getElementById("sonucAlani").innerHTML = "Your grade is F, you failed. You can take the course next semester";
            document.getElementById("sonucAlani").style.backgroundColor = "red";
            break;

        default:
            document.getElementById("sonucAlani").innerHTML = "This is not a grade, please try again later";
            document.getElementById("sonucAlani").style.border = "solid black 2px";
            break;


    }

}


