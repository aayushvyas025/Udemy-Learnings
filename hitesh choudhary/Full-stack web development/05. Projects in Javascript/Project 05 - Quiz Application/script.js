document.addEventListener("DOMContentLoaded", function () {
  console.log(`DOM Content loaded successfully`);

  // Dom Elements
  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const reStartButton = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");

  // Third party services 
  async function fetchQuizData() {
    try {
      const response = await fetch("http://127.0.0.1:5500/hitesh%20choudhary/Full-stack%20web%20development/05.%20Projects%20in%20Javascript/Project%2005%20-%20Quiz%20Application/data.json");

      if (!response.ok) {
        throw new Error("Error, while fetching quiz data");
      }

      const quizData = await response.json();
      return {
        success: quizData.success,
        message: quizData.message,
        data: quizData.data,
      };
    } catch (error) {
      console.error(`Error, while fetching quiz data: ${error.message}`);
      return { success: false, message: `Error, while fetching quiz data` };
    }
  }
  // Features

  // Event listener
});
