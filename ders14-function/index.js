startProgram();

function startProgram () {
    let userName = window.prompt("adınızı girin", "enter your name");
    let age = prompt("yaşınızı girin" , "enter your age");
    
    happyBirthday (userName,age);
    }

    function happyBirthday (NAME, AGE) {
        console.log("Happy Birthday to you");
        console.log("Happy Birthday to you");
        console.log("Happy Birthday dear" , NAME);
        console.log("you are ",AGE,"years old" );
    }