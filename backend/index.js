const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const Data = require("./questions");
// Use cors middleware
app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// Define routes
app.post("/", (req, res) => {
  // console.log(req.body.question);

  var question_no = req.body.question;

  res.send({
    data: {
      question: Data[question_no].question,
      a: Data[question_no].options[0],
      b: Data[question_no].options[1],
      c: Data[question_no].options[2],
      d: Data[question_no].options[3],
      e: Data.length,
    },
  });
});
app.post("/submit", (req, res) => {
  const score = calculateScore(req.body);
  Data.forEach((question, index) => {
    question.selected = req.body[index];
  });
  console.log(Data);
  res.send({ score: score, data: Data });
});

function calculateScore(answer) {
  const length = Data.length;
  let score = 0;
  for (let i = 0; i < length; i = i + 1) {
    if (answer[i] == Data[i].answer) {
      score++;
    }
  }
  return score;
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
