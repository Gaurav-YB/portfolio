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

let currentIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 50;
const deletingSpeed = 35;
const delayBetweenWords = 1000;

function typeText() {
    const currentWord = words[currentIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.slice(0, letterIndex--);
        if (letterIndex < 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length;
        }
    } else {
        textElement.textContent = currentWord.slice(0, letterIndex++);
        if (letterIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeText, delayBetweenWords);
            return;
        }
    }
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

typeText();

function initializeText1() {
    const textElement1 = document.getElementById('text1');

    if (!textElement1) return; // If element doesn't exist, exit

    if (window.innerWidth <= 390) {
        if (!textElement1.dataset.started) { // Prevent multiple executions
            textElement1.dataset.started = "true";

            const words1 = [
                'Java Full-Stack Developer!',
                'Problem-solving enthusiast!',
                'AI/ML project Developed!',
                'Programmer!',
                'Fitness Enthusiast!',
                'Car Enthusiast!',
                'Enthusiast Leetcode Solver!'
            ];

            let currentIndex1 = 0;
            let letterIndex1 = 0;
            let isDeleting1 = false;
            const typingSpeed1 = 50;
            const deletingSpeed1 = 35;
            const delayBetweenWords1 = 1000;

            function typeText1() {
                const currentWord = words1[currentIndex1];
                if (isDeleting1) {
                    textElement1.textContent = currentWord.slice(0, letterIndex1--);
                    if (letterIndex1 < 0) {
                        isDeleting1 = false;
                        currentIndex1 = (currentIndex1 + 1) % words1.length;
                    }
                } else {
                    textElement1.textContent = currentWord.slice(0, letterIndex1++);
                    if (letterIndex1 > currentWord.length) {
                        isDeleting1 = true;
                        setTimeout(typeText1, delayBetweenWords1);
                        return;
                    }
                }
                setTimeout(typeText1, isDeleting1 ? deletingSpeed1 : typingSpeed1);
            }

            typeText1(); // Start typing effect
        }
    } else {
        textElement1.dataset.started = ""; // Reset when resizing back
    }
}

// Run on page load
initializeText1();

// Run only when resizing to small screens
window.addEventListener('resize', () => {
    if (window.innerWidth <= 390) {
        initializeText1();
    }
});
