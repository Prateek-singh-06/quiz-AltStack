const quizData = JSON.parse(sessionStorage.getItem("userResponses"));

var html = `<h1>Quiz Score</h1>
      <div class="score-info">
        <p>Total Score:</p>
      </div> <p>Total Score: <span >${quizData.score}</span></p>`;
console.log(typeof quizData.data[0].selected);

quizData.data.map((questionData, index) => {
  //   console.log(item);
  const temphtml = `
      <div id="questionContainer">
        <p>Q${index + 1}&nbsp;&nbsp;&nbsp;&nbsp;${questionData.question}</p>
        <form id="quizForm">
          <ul class="options">
            <li class="option">
              <input
                disabled
                ${questionData.selected === "1" ? "checked" : ""}
                type="radio"
                title="option1"
                name="q1"
                value="1"
              />
              <label for="option1">${questionData.options[0]}</label>
            </li>
            <li class="option">
              <input
                disabled
                ${questionData.selected === "2" ? "checked" : ""}
                type="radio"
                title="option2"
                name="q1"
                value="2"
              />
              <label for="option2">${questionData.options[1]}</label>
            </li>
            <li class="option">
              <input
                ${questionData.selected === "3" ? "checked" : ""}
                disabled
                type="radio"
                title="option3"
                name="q1"
                value="3"
              />
              <label for="option3">${questionData.options[2]}</label>
            </li>
            <li class="option">
              <input
                disabled
                ${questionData.selected === "4" ? "checked" : ""}
                type="radio"
                title="option4"
                name="q1"
                value="4"
              />
              <label for="option4">${questionData.options[3]}</label>
            </li>
          </ul>
          <p>Correct Answer: ${questionData.answer}</p>
        </form>`;
  html = html + temphtml;
});
html = html + '<div onclick="goback()" class="goback">GO back</div>';
const questionContainer = document.querySelector(".container");
questionContainer.innerHTML = html;
// console.log(quizData);
function goback() {
  window.location.href = "index.html";
}
