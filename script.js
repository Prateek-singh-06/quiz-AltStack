var question_no = 0;
let userResponses = [];

//fetch first question
fetch("http://localhost:5000/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ question: question_no }),
})
  .then((response) => response.json())
  .then((nextQuestionData) => {
    // Display next question received from backend
    question_no = question_no + 1;
    dispalyQuestion(nextQuestionData.data);
    togglePrevButtonVisibility(question_no);
  })
  .catch((error) => console.error("Error:", error));

function nextQuestion() {
  const formData = new FormData(document.getElementById("quizForm"));
  const selectedOption = formData.get("q1");

  //Send data to backend server
  fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: question_no }),
  })
    .then((response) => response.json())
    .then((nextQuestionData) => {
      // Display next question received from backend
      storeUserResponse(question_no, selectedOption);
      console.log(userResponses);
      question_no = question_no + 1;
      dispalyQuestion(nextQuestionData.data);

      const selectedValues = JSON.parse(
        sessionStorage.getItem("userResponses")
      );

      const optionToSelect = selectedValues[question_no - 1];
      // Get the radio input element corresponding to the option
      if (optionToSelect) {
        const radioInput = document.querySelector(
          `input[name="q1"][value="${optionToSelect}"]`
        );
        radioInput.checked = true;
      }
      togglenextBtnVisibility(question_no);
      togglePrevButtonVisibility(question_no);
    })
    .catch((error) => console.error("Error:", error));
}

// Function to display the next question received from the backend
function dispalyQuestion(questionData) {
  const questionContainer = document.querySelector(".question");
  questionContainer.innerHTML = `
    <p>Q${question_no}&nbsp;&nbsp;&nbsp;&nbsp;${questionData.question}</p>
    <form id="quizForm">
      <ul class="options">
        <li class="option">
          <input type="radio" id="option1" name="q1" value="1" />
          <label for="option1">${questionData.a}</label>
        </li>
        <li class="option">
          <input type="radio" id="option2" name="q1" value="2" />
          <label for="option2">${questionData.b}</label>
        </li>
        <li class="option">
          <input type="radio" id="option3" name="q1" value="3" />
          <label for="option3">${questionData.c}</label>
        </li>
        <li class="option">
          <input type="radio" id="option4" name="q1" value="4" />
          <label for="option4">${questionData.d}</label>
        </li>
      </ul>
    </form>
  `;
}

// Function to fetch previous question
function prevQuestion() {
  const formData = new FormData(document.getElementById("quizForm"));
  const selectedOption = formData.get("q1");

  question_no = question_no - 2;
  console.log(question_no);

  fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: question_no }),
  })
    .then((response) => response.json())
    .then((nextQuestionData) => {
      storeUserResponse(question_no + 2, selectedOption);
      console.log(userResponses);
      question_no = question_no + 1;
      dispalyQuestion(nextQuestionData.data);
      const selectedValues = JSON.parse(
        sessionStorage.getItem("userResponses")
      );

      const optionToSelect = selectedValues[question_no - 1];
      // Get the radio input element corresponding to the option
      if (optionToSelect) {
        const radioInput = document.querySelector(
          `input[name="q1"][value="${optionToSelect}"]`
        );
        radioInput.checked = true;
      }
      togglenextBtnVisibility(question_no);
      togglePrevButtonVisibility(question_no);
      // console.log(nextQuestionData.data);
    })
    .catch((error) => console.error("Error:", error));

  // Your logic to fetch previous question
}

// Function to fetch next question
function submitQuiz() {
  const formData = new FormData(document.getElementById("quizForm"));
  const selectedOption = formData.get("q1");
  storeUserResponse(question_no, selectedOption);
  const Data = sessionStorage.getItem("userResponses");

  fetch("http://localhost:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: Data,
  })
    .then((response) => response.json())
    .then((allData) => {
      // console.log(allData);
      sessionStorage.setItem("userResponses", JSON.stringify(allData));
      window.location.href = "score.html";
    })
    .catch((error) => console.error("Error:", error));
  // Your logic to fetch next question
}

function togglePrevButtonVisibility(currentQuestion) {
  const prevBtn = document.getElementById("prevBtn");
  if (currentQuestion > 1) {
    prevBtn.style.display = "block"; // Show the previous button
  } else {
    prevBtn.style.display = "none"; // Hide the previous button
  }
}

function togglenextBtnVisibility(currentQuestion) {
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  if (currentQuestion === 10) {
    nextBtn.style.display = "none"; // Show the previous button
    submitBtn.style.display = "block";
  } else {
    nextBtn.style.display = "block"; // Hide the previous button
    submitBtn.style.display = "none"; // Hide the previous button
  }
}

function storeUserResponse(questionNumber, chosenOption) {
  // Add the user's response to the array
  userResponses[questionNumber - 1] = chosenOption;
  // Store the updated array in session
  sessionStorage.setItem("userResponses", JSON.stringify(userResponses));
}
