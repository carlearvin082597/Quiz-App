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
        question: 'What is the primary goal of economics?',
        a: 'Maximize wants',
        b: 'Efficient allocation of scarce resources',
        c: 'Increase government revenue',
        d: 'Control population',
        correct: 'b'
    },
    {
        question: 'Who is responsible for implementing laws in the Philippines?',
        a: 'Judiciary',
        b: 'Legislative',
        c: 'Executive',
        d: 'COMELEC',
        correct: 'c'
    },
    {
        question: 'Demand refers to:',
        a: 'Desire to buy only',
        b: 'Ability to buy only',
        c: 'Willingness and ability to buy',
        d: 'Quantity supplied',
        correct: 'c'
    },
    {
        question: 'What agency administers elections in the Philippines?',
        a: 'CSC',
        b: 'COA',
        c: 'COMELEC',
        d: 'DILG',
        correct: 'c'
    },
    {
        question: 'What happens to demand when price increases, ceteris paribus?',
        a: 'Demand increases',
        b: 'Demand decreases',
        c: 'Demand stays the same',
        d: 'Demand doubles',
        correct: 'b'
    },
    {
        question: 'Who authored the Philippine Constitution?',
        a: 'Supreme Court',
        b: 'Constitutional Commission',
        c: 'Congress',
        d: 'President',
        correct: 'b'
    },
    {
        question: 'Which tax is imposed on goods and services?',
        a: 'Income tax',
        b: 'VAT',
        c: 'Property tax',
        d: 'Tariff',
        correct: 'b'
    },
    {
        question: 'Elasticity of demand measures:',
        a: 'Consumer income',
        b: 'Price sensitivity of quantity demanded',
        c: 'Production capacity',
        d: 'Government spending',
        correct: 'b'
    },
    {
        question: 'What is fiscal policy?',
        a: 'Central bank control of money',
        b: 'Government spending and taxation',
        c: 'Foreign trade regulation',
        d: 'Price control',
        correct: 'b'
    },
    {
        question: 'Who appoints Supreme Court justices?',
        a: 'Congress',
        b: 'Chief Justice',
        c: 'President',
        d: 'Judicial Bar Council',
        correct: 'c'
    },
    {
        question: 'Which curve shows the relationship between price and quantity demanded?',
        a: 'Supply curve',
        b: 'Demand curve',
        c: 'Cost curve',
        d: 'Revenue curve',
        correct: 'b'
    },
    {
        question: 'Which economic indicator measures unemployment?',
        a: 'GDP',
        b: 'CPI',
        c: 'Labor force participation rate',
        d: 'Inflation rate',
        correct: 'c'
    },
    {
        question: 'The law of supply states that:',
        a: 'Higher price leads to lower supply',
        b: 'Lower price leads to higher supply',
        c: 'Higher price leads to higher supply',
        d: 'Supply is constant',
        correct: 'c'
    },
    {
        question: 'Who is the head of the judiciary?',
        a: 'President',
        b: 'Chief Justice',
        c: 'Speaker of the House',
        d: 'Senate President',
        correct: 'b'
    },
    {
        question: 'Which sector transforms raw materials into finished goods?',
        a: 'Primary',
        b: 'Secondary',
        c: 'Tertiary',
        d: 'Quaternary',
        correct: 'b'
    },
    {
        question: 'What is monetary policy?',
        a: 'Tax collection',
        b: 'Money supply regulation',
        c: 'Public spending',
        d: 'Trade policy',
        correct: 'b'
    },
    {
        question: 'Which Philippine hero founded the Katipunan?',
        a: 'Emilio Aguinaldo',
        b: 'Jose Rizal',
        c: 'Andres Bonifacio',
        d: 'Antonio Luna',
        correct: 'c'
    },
    {
        question: 'What is a monopoly?',
        a: 'Many sellers',
        b: 'One seller',
        c: 'Two sellers',
        d: 'Government seller only',
        correct: 'b'
    },
    {
        question: 'What does CPI measure?',
        a: 'Production',
        b: 'Employment',
        c: 'Inflation',
        d: 'Exports',
        correct: 'c'
    },
    {
        question: 'Which sector includes banking and education?',
        a: 'Primary',
        b: 'Secondary',
        c: 'Tertiary',
        d: 'Quinary',
        correct: 'c'
    },
    {
        question: 'What type of good increases demand as income increases?',
        a: 'Inferior good',
        b: 'Normal good',
        c: 'Public good',
        d: 'Giffen good',
        correct: 'b'
    },
    {
        question: 'What is the main purpose of tariffs?',
        a: 'Increase imports',
        b: 'Protect local industries',
        c: 'Lower prices',
        d: 'Encourage smuggling',
        correct: 'b'
    },
    {
        question: 'Which is a function of money?',
        a: 'Control inflation',
        b: 'Medium of exchange',
        c: 'Regulate supply',
        d: 'Produce goods',
        correct: 'b'
    },
    {
        question: 'What market structure has many sellers and identical products?',
        a: 'Monopoly',
        b: 'Oligopoly',
        c: 'Perfect competition',
        d: 'Monopolistic competition',
        correct: 'c'
    },
    {
        question: 'Which agency manages government personnel?',
        a: 'COA',
        b: 'CSC',
        c: 'COMELEC',
        d: 'DILG',
        correct: 'b'
    },
    {
        question: 'What happens when price ceiling is imposed below equilibrium?',
        a: 'Surplus',
        b: 'Shortage',
        c: 'Equilibrium',
        d: 'Inflation',
        correct: 'b'
    },
    {
        question: 'Who is known as the “Sublime Paralytic”?',
        a: 'Antonio Luna',
        b: 'Emilio Aguinaldo',
        c: 'Apolinario Mabini',
        d: 'Jose Rizal',
        correct: 'c'
    },
    {
        question: 'Which is an example of public good?',
        a: 'Rice',
        b: 'Clothes',
        c: 'National defense',
        d: 'Cellphone',
        correct: 'c'
    },
    {
        question: 'What is economic growth?',
        a: 'Increase in prices',
        b: 'Increase in GDP',
        c: 'Increase in population',
        d: 'Increase in taxes',
        correct: 'b'
    },
    {
        question: 'Which principle states people respond to incentives?',
        a: 'Scarcity',
        b: 'Rational behavior',
        c: 'Incentive principle',
        d: 'Trade-off principle',
        correct: 'c'
    },
    {
        question: 'What branch of economics studies the whole economy?',
        a: 'Microeconomics',
        b: 'Macroeconomics',
        c: 'Behavioral economics',
        d: 'Environmental economics',
        correct: 'b'
    },
    {
        question: 'What causes inflation-pull inflation?',
        a: 'High production cost',
        b: 'Increase in demand',
        c: 'Decrease in supply',
        d: 'High taxes',
        correct: 'b'
    },
    {
        question: 'Which Philippine document declares basic rights?',
        a: 'Civil Code',
        b: 'Bill of Rights',
        c: 'Penal Code',
        d: 'Labor Code',
        correct: 'b'
    },
    {
        question: 'What is the role of entrepreneurs?',
        a: 'Provide labor',
        b: 'Provide land',
        c: 'Take risks and organize production',
        d: 'Collect taxes',
        correct: 'c'
    },
    {
        question: 'Which is a regressive tax?',
        a: 'Income tax',
        b: 'VAT',
        c: 'Corporate tax',
        d: 'Estate tax',
        correct: 'b'
    },
    {
        question: 'What happens when supply decreases and demand remains constant?',
        a: 'Price falls',
        b: 'Price rises',
        c: 'Quantity increases',
        d: 'No change',
        correct: 'b',
        difficulty: 'medium'
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
    },
        {
        question: 'Who is the king of the Greek gods?',
        a: 'Poseidon',
        b: 'Hades',
        c: 'Zeus',
        d: 'Apollo',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Who is the Greek goddess of wisdom?',
        a: 'Hera',
        b: 'Aphrodite',
        c: 'Athena',
        d: 'Artemis',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Which god rules the underworld?',
        a: 'Zeus',
        b: 'Hades',
        c: 'Ares',
        d: 'Hermes',
        correct: 'b',
        difficulty: 'easy'
    },
    {
        question: 'Who is the god of the sea?',
        a: 'Apollo',
        b: 'Ares',
        c: 'Poseidon',
        d: 'Hermes',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Mount Olympus is known as:',
        a: 'Home of the Titans',
        b: 'Home of Greek heroes',
        c: 'Home of the Greek gods',
        d: 'Entrance to the underworld',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Who is the goddess of love and beauty?',
        a: 'Hera',
        b: 'Athena',
        c: 'Aphrodite',
        d: 'Demeter',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Which god is known as the messenger of the gods?',
        a: 'Apollo',
        b: 'Hermes',
        c: 'Hephaestus',
        d: 'Ares',
        correct: 'b',
        difficulty: 'easy'
    },
    {
        question: 'Who is the Greek god of war?',
        a: 'Apollo',
        b: 'Ares',
        c: 'Zeus',
        d: 'Hades',
        correct: 'b',
        difficulty: 'easy'
    },
    {
        question: 'Which hero killed the Gorgon Medusa?',
        a: 'Hercules',
        b: 'Perseus',
        c: 'Theseus',
        d: 'Achilles',
        correct: 'b',
        difficulty: 'medium'
    },
    {
        question: 'What weakness led to Achilles’ death?',
        a: 'His head',
        b: 'His heart',
        c: 'His heel',
        d: 'His hand',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Who is the god of the sun, music, and prophecy?',
        a: 'Hermes',
        b: 'Apollo',
        c: 'Dionysus',
        d: 'Ares',
        correct: 'b',
        difficulty: 'medium'
    },
    {
        question: 'Which goddess is associated with agriculture and harvest?',
        a: 'Hera',
        b: 'Athena',
        c: 'Demeter',
        d: 'Artemis',
        correct: 'c',
        difficulty: 'medium'
    },
    {
        question: 'Who is the wife of Zeus and queen of the gods?',
        a: 'Aphrodite',
        b: 'Athena',
        c: 'Hera',
        d: 'Demeter',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Which hero completed the Twelve Labors?',
        a: 'Perseus',
        b: 'Theseus',
        c: 'Hercules',
        d: 'Odysseus',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Who wrote the epic poems Iliad and Odyssey?',
        a: 'Sophocles',
        b: 'Plato',
        c: 'Homer',
        d: 'Aristotle',
        correct: 'c',
        difficulty: 'medium'
    },
    {
        question: 'Which monster has the body of a lion and the head of a human?',
        a: 'Minotaur',
        b: 'Cyclops',
        c: 'Sphinx',
        d: 'Hydra',
        correct: 'c',
        difficulty: 'medium'
    },
    {
        question: 'Who is the god of fire and blacksmithing?',
        a: 'Apollo',
        b: 'Ares',
        c: 'Hephaestus',
        d: 'Hermes',
        correct: 'c',
        difficulty: 'medium'
    },
    {
        question: 'The Trojan War was fought over:',
        a: 'Power',
        b: 'Gold',
        c: 'Helen of Troy',
        d: 'Territory',
        correct: 'c',
        difficulty: 'easy'
    },
    {
        question: 'Who is the goddess of the hunt and the moon?',
        a: 'Athena',
        b: 'Hera',
        c: 'Artemis',
        d: 'Aphrodite',
        correct: 'c',
        difficulty: 'medium'
    },
    {
        question: 'Which hero is known for his long journey home after the Trojan War?',
        a: 'Achilles',
        b: 'Hector',
        c: 'Odysseus',
        d: 'Paris',
        correct: 'c',
        difficulty: 'medium'
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
