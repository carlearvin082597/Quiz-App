const quizData = [
  
    {
        question: 'In the Philippine flag, what symbolizes the eight provinces that revolted against the Spaniards?',
        a: 'Star',
        b: 'Eight rays of the sun',
        c: 'Rectangle',
        d: 'Red',
        correct: 'b'
    },

  {
        question: 'Which government agency is responsible for monetary policy in the Philippines?',
        a: 'Department of Finance',
        b: 'Bangko Sentral ng Pilipinas',
        c: 'Bureau of Treasury',
        d: 'BIR',
        correct: 'b'
    },
    {
        question: 'Scarcity is best defined as:',
        a: 'Unlimited resources',
        b: 'Limited wants',
        c: 'Unlimited wants and limited resources',
        d: 'Limited needs',
        correct: 'c'
    },
    {
        question: 'What law created the Bangko Sentral ng Pilipinas?',
        a: 'RA 7160',
        b: 'RA 7653',
        c: 'RA 1425',
        d: 'RA 6713',
        correct: 'b'
    },
    {
        question: 'Which of the following is NOT a factor of production?',
        a: 'Land',
        b: 'Labor',
        c: 'Capital',
        d: 'Money',
        correct: 'd'
    },
    {
        question: 'What economic system does the Philippines follow?',
        a: 'Traditional economy',
        b: 'Command economy',
        c: 'Market economy',
        d: 'Mixed economy',
        correct: 'd'
    },
    {
        question: 'Who wrote Noli Me Tangere?',
        a: 'Andres Bonifacio',
        b: 'Jose Rizal',
        c: 'Graciano Lopez Jaena',
        d: 'Marcelo H. del Pilar',
        correct: 'b'
    },
    {
        question: 'Inflation refers to:',
        a: 'Increase in unemployment',
        b: 'General increase in prices',
        c: 'Decrease in money supply',
        d: 'Increase in production',
        correct: 'b'
    },
    {
        question: 'What is GDP?',
        a: 'Gross Domestic Product',
        b: 'General Development Plan',
        c: 'Government Debt Policy',
        d: 'Gross Demand Price',
        correct: 'a'
    },
    {
        question: 'Who was the first President of the Philippines?',
        a: 'Manuel L. Quezon',
        b: 'Jose P. Laurel',
        c: 'Emilio Aguinaldo',
        d: 'Sergio Osmeña',
        correct: 'c'
    },
    {
        question: 'Which body makes laws in the Philippines?',
        a: 'Judiciary',
        b: 'Executive',
        c: 'Legislative',
        d: 'Commission on Elections',
        correct: 'c'
    },
    {
        question: 'What does BIR stand for?',
        a: 'Bureau of Internal Revenue',
        b: 'Bureau of Import Regulation',
        c: 'Bureau of Investment Resources',
        d: 'Bureau of Inland Revenue',
        correct: 'a'
    },
    {
        question: 'Opportunity cost is:',
        a: 'The money spent',
        b: 'The next best alternative foregone',
        c: 'Total cost of production',
        d: 'Profit earned',
        correct: 'b'
    },
    {
        question: 'Which Philippine body audits government funds?',
        a: 'COA',
        b: 'CSC',
        c: 'COMELEC',
        d: 'DOF',
        correct: 'a'
    },
    {
        question: 'What is the main function of prices in a market economy?',
        a: 'Control inflation',
        b: 'Allocate resources',
        c: 'Increase taxes',
        d: 'Reduce unemployment',
        correct: 'b'
    },
    {
        question: 'Who is the “Brains of the Katipunan”?',
        a: 'Emilio Jacinto',
        b: 'Andres Bonifacio',
        c: 'Apolinario Mabini',
        d: 'Antonio Luna',
        correct: 'a'
    },
    {
        question: 'A surplus occurs when:',
        a: 'Demand exceeds supply',
        b: 'Supply equals demand',
        c: 'Supply exceeds demand',
        d: 'Prices are low',
        correct: 'c'
    },

    {
        question: 'What is the title of the letter Rizal wrote before his execution?',
        a: 'Huling El Bimbo',
        b: 'Mi Último Adiós',
        c: 'My Heart Will Go On',
        d: 'Super Bass',
        correct: 'b'
    }, 

    {
        question: 'What is the largest organ in the human body?',
        a: 'Eyes',
        b: 'Liver',
        c: 'Large intestine',
        d: 'Skin',
        correct: 'd'
    },

    {
        question: 'How many continents are there in the world?',
        a: 7,
        b: 6,
        c: 5,
        d: 4,
        correct: 'a'
    }, 
    
    {
        question: 'What is the process that converts light energy into chemical energy in plants?',
        a: 'Condensation',
        b: 'Photosynthesis',
        c: 'Fusion',
        d: 'Precipitation',
        correct: 'b'
    },

    {
        question: 'Who painted the Mona Lisa?',
        a: 'Vincent van Gogh',
        b: 'Leonardo da Vinci',
        c: 'Pablo Picasso',
        d: 'Claude Monet',
        correct: 'b'
    },

    {
        question: 'Which planet is known as the Red Planet?',
        a: 'Earth',
        b: 'Venus',
        c: 'Mars',
        d: 'Jupiter',
        correct: 'c'
    },

    {
        question: 'What is the capital city of Japan?',
        a: 'Seoul',
        b: 'Tokyo',
        c: 'Bangkok',
        d: 'Beijing',
        correct: 'b'
    },

    {
        question: 'What is the hardest natural substance on Earth?',
        a: 'Gold',
        b: 'Iron',
        c: 'Diamond',
        d: 'Platinum',
        correct: 'c'
    },

    {
        question: 'Which element has the atomic number 1?',
        a: 'Oxygen',
        b: 'Hydrogen',
        c: 'Nitrogen',
        d: 'Helium',
        correct: 'b'
    }
];

const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {


    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;   
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            alert(`You got ${score} out of ${quizData.length}.`);
            window.location.href = 'https://res.cloudinary.com/dlf5vhtov/video/upload/v1733059222/Rickroll_Meme_Template_gucvsb.mp4';
        }
    }

        
});
