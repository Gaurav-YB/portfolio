let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
// let select = document.querySelector("#select2");
let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const users = document.querySelector("#userscore");
const comps = document.querySelector("#compscore");

document.addEventListener("DOMContentLoaded", function() {
    const sectionSelect = document.getElementById("section-select");

    sectionSelect.addEventListener("change", function() {
        const sectionId = this.value;
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
}); 

// select.addEventListener("click",() => {
//     console.log("hey");
// });

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode="dark";
        // body.classList.add("dark");
        // body.classList.remove("light");
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode="light";
        // body.classList.add("light");
        // body.classList.remove("dark");
        document.querySelector("body").style.backgroundColor = "white";
    }
   console.log(currMode);
});
// select.onclick = () => {
//     console.log("hey")
// }
const getcompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randInx = Math.floor(Math.random()*3);
    return options[randInx];
} 

const showwinner = (userwin, choiceid, compchoice) => {
    if(userwin) {
        userscore++;
        users.innerText = userscore;
        msg.innerText = 'You Win!';
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        comps.innerText = compscore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (choiceid) => {
    console.log("user choice =",choiceid);
    const compchoice = getcompchoice();
    console.log("computer choice =",compchoice)

    if( choiceid === compchoice) {
        console.log("game was draw.")
        msg.innerText = "Game was draw, Try again!" ;
        msg.style.backgroundColor = "orange";
    }else {
        let userwin = true;
        if(choiceid === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if(choiceid === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        playgame(choiceid);
    });
});

const textElement = document.getElementById('text');
const words = [
    'Java Full-Stack Developer!',
    'Problem-solving enthusiast!',
    'AI/ML project Developed!',
    'Programmer!',
    'Fitness Enthusiast!',
    'Car Enthusiast!',
    'Enthusiast Leetcode Solver!'
];


let currentIndex = 0; // Current word index
let letterIndex = 0; // Current letter index
let isDeleting = false; // Deletion state
const typingSpeed = 50; // Speed of typing (lower is faster)
const deletingSpeed = 35; // Speed of deleting (lower is faster)
const delayBetweenWords = 1000; // Pause before typing the next word

function type() {
    const currentWord = words[currentIndex];
    if (isDeleting) {
        // Deleting letters
        textElement.textContent = currentWord.slice(0, letterIndex--);
        if (letterIndex < 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length; // Move to the next word
        }
    } else {
        // Typing letters
        textElement.textContent = currentWord.slice(0, letterIndex++);
        if (letterIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords); // Pause before deleting
            return;
        }
    }
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed); // Typing or deleting speed
}

type();
