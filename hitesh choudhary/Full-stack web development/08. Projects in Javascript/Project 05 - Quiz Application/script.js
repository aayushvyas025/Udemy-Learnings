document.addEventListener("DOMContentLoaded", function () {
  // Dom Elements
  // btns
  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const reStartButton = document.getElementById("restart-btn");
  // quiz related elements
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  const quizScore = document.getElementById("score");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  // updating variable
  let currentQuestionIndex = 0;
  let score = 0;
  let quizData = JSON.parse(localStorage.getItem("quiz")) || [];

  // Third party services
  async function fetchQuizData() {
    try {
      const response = await fetch(
        "http://127.0.0.1:5500/hitesh%20choudhary/Full-stack%20web%20development/05.%20Projects%20in%20Javascript/Project%2005%20-%20Quiz%20Application/data.json",
      );

      if (!response.ok) {
        throw new Error("Error, while fetching quiz data");
      }

      const quizData = await response.json();
      return {
        success: quizData.success,
        message: quizData.message,
        quiz: quizData.data,
      };
    } catch (error) {
      console.error(`Error, while fetching quiz data: ${error.message}`);
      return { success: false, message: `Error, while fetching quiz data` };
    }
  }

  async function loadQuizData() {
    try {
      const response = await fetchQuizData();
      if (!response.success) {
        throw new Error(response.message);
      }
      quizData = response.quiz;
    } catch (error) {
      console.error(`Error, while loading the quiz data: ${error.message}`);
    }
  }
  // Features
  function startQuiz() {
    hideInitialQuizElements();
    displayQuestion();
    displayChoices();
  }

  function displayQuiz() {}

  function displayQuestion() {
    if (!quizData) return;
    nextButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    questionText.textContent = quizData[currentQuestionIndex].question;
  }
  function displayChoices() {
    if (!quizData) return;
    choicesList.innerHTML = "";
    quizData[currentQuestionIndex].choices.forEach((choice) => {
      const choiceItem = document.createElement("li");
      choiceItem.textContent = choice;
      choiceItem.addEventListener("click", () =>
        selectTheChoice(choice, choiceItem),
      );
      choicesList.appendChild(choiceItem);
    });
  }

  function selectTheChoice(choice, selectItem) {
    if (!choice || !quizData) return;
    const correctChoice = quizData[currentQuestionIndex].answer;
    if (choice === correctChoice) {
      score++;
      selectItem.style.backgroundColor = "green";
      nextButton.classList.remove("hidden");
    } else {
      selectItem.style.backgroundColor = "red";
    }
  }

  function hideInitialQuizElements() {
    startButton.classList.add("hidden");
    resultContainer.classList.add("hidden");
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
      displayChoices();
    } else {
      displayQuizScore();
    }
  }

  function displayQuizScore() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    quizScore.textContent = `${score} correct out of ${quizData.length} questions`;
  }

  function saveQuizData() {
    if (!quizData) return;
    localStorage.setItem("quiz", JSON.stringify(quizData));
  } 

  function reStartQuiz() {
   currentQuestionIndex = 0; 
   score = 0; 
   resultContainer.classList.add('hidden'); 
   startQuiz(); 
  }

  // Event listener
  startButton.addEventListener("click", async function () {
    await loadQuizData();
    saveQuizData();
    startQuiz();
  });
  nextButton.addEventListener("click", nextQuestion);
  reStartButton.addEventListener("click", reStartQuiz);
});
