const question = [
    {
        question: "Which is the Largest Animal on the earth?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Dinosaur", correct: false }
        ]
    },
    {
        question: "Which is the Largest Country on the earth?",
        answer: [
            { text: "Canada", correct: false },
            { text: "Russia", correct: true },
            { text: "China", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "Which is the Smallest Bird on the earth?",
        answer: [
            { text: "Eagle", correct: false },
            { text: "Humming Bird", correct: true },
            { text: "Crow", correct: false },
            { text: "Pigeon", correct: false }
        ]
    },
    {
        question: "Which is the Largest Desert on the earth?",
        answer: [
            { text: "Sahara", correct: false },
            { text: "Kalahari", correct: false },
            { text: "Antartica", correct: true },
            { text: "Ladakh", correct: false }
        ]
    },
    {
        question: "Which is the Largest Continent on the earth?",
        answer: [
            { text: "Asia", correct: true },
            { text: "Africa", correct: false },
            { text: "Antartica", correct: false },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "Which is the Smallest Continent on the earth?",
        answer: [
            { text: "Europe", correct: false },
            { text: "Australia", correct: true },
            { text: "Antartica", correct: false },
            { text: "South America", correct: false }
        ]
    },
    {
        question: "Which is the Largest Ocean on the earth?",
        answer: [
            { text: "Arctic Ocean", correct: false },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Which is the Smallest bone in a Human Body?",
        answer: [
            { text: "Coller Bone", correct: false },
            { text: "Tibia", correct: false },
            { text: "Femur", correct: false },
            { text: "Stapes Bone", correct: true }
        ]
    },
    {
        question: "Which is the Strongest Bone in a Human Body?",
        answer: [
            { text: "Femur", correct: true },
            { text: "Collar Bone", correct: false },
            { text: "Spine", correct: false },
            { text: "Back Bone", correct: false }
        ]
    },
    {
        question: "How many Bones are there When a Baby is Borned?",
        answer: [
            { text: "206", correct: false },
            { text: "300", correct: true },
            { text: "358", correct: false },
            { text: "418", correct: false }
        ]
    },
    {
        question: "which player plays from Agertina and also played for Barcelona(FCB)",
        answer: [
            { text: "Xavi", correct: false },
            { text: "Messi", correct: true },
            { text: "Ronaldo", correct: false },
            { text: "Pele", correct: false }
        ]
    },
    {
        question: "How many Bones are there When a Baby is Borned?",
        answer: [
            { text: "206", correct: false },
            { text: "300", correct: true },
            { text: "358", correct: false },
            { text: "418", correct: false }
        ]
    },
    {
        question: "How many Bones are there When a Baby is Borned?",
        answer: [
            { text: "206", correct: false },
            { text: "300", correct: true },
            { text: "358", correct: false },
            { text: "418", correct: false }
        ]
    },
    {
        question: "How many Bones are there When a Baby is Borned?",
        answer: [
            { text: "206", correct: false },
            { text: "300", correct: true },
            { text: "358", correct: false },
            { text: "418", correct: false }
        ]
    },
    {
        question: "How many Bones are there When a Baby is Borned?",
        answer: [
            { text: "206", correct: false },
            { text: "300", correct: true },
            { text: "358", correct: false },
            { text: "418", correct: false }
        ]
    },
    {
        question: "How many Bones are there When a Baby is Borned?",
        answer: [
            { text: "206", correct: false },
            { text: "300", correct: true },
            { text: "358", correct: false },
            { text: "418", correct: false }
        ]
    },
    {
        question: "How many Bones are there When a Baby is Borned?",
        answer: [
            { text: "206", correct: false },
            { text: "300", correct: true },
            { text: "358", correct: false },
            { text: "418", correct: false }
        ]
    },
    {
        question: "How many Bones are there When a Baby is Borned?",
        answer: [
            { text: "206", correct: false },
            { text: "300", correct: true },
            { text: "358", correct: false },
            { text: "418", correct: false }
        ]
    },
];
let que = document.getElementById('question')
let ansbtn = document.getElementById('answerbtns')
let nextbtn = document.getElementById('next-btn')

let cqi = 0;
let score = 0;
function startQuiz(){
    cqi = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetstate()
    let cq = question[cqi];
    let quesno = cqi + 1;
    que.innerHTML = quesno + ". " + cq.question;

    cq.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", sa = (e) => {
            let sb = e.target;
            let isC = sb.dataset.correct === "true";
            if (isC) {
                sb.classList.add("Correct");
                score++;
            } else {
                sb.classList.add("INCORRECT");
            }
            Array.from(ansbtn.children).forEach(button => {
                if (button.dataset.correct === 'true') {
                    button.classList.add("Correct")
                }
                button.disabled = true
            })
            nextbtn.style.display = "block"
        })
    })
}
function resetstate(){
    nextbtn.style.display = "none";
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}

function showScore(){
    resetstate();
    que.innerHTML = `You Scored ${score} out of ${question.length}!`
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display = "block"
}

function handleNextbtn(){
    cqi++;
    if (cqi < question.length) {
        showQuestion();
    } else {
        showScore()
    }
}

nextbtn.addEventListener("click", () => {
    if (cqi < question.length) {
        handleNextbtn();
    } else {
        startQuiz()
    }
})

startQuiz()
