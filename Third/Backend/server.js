const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const questions = require("./questions.json");

// Get questions by topic
app.get("/questions/:topic", (req, res) => {
  const topic = req.params.topic;
  res.json(questions[topic] || []);
});

// Submit answers
app.post("/submit", (req, res) => {
  const { topic, answers } = req.body;
  const quiz = questions[topic];

  let score = 0;

  quiz.forEach((q) => {
    const userAnswer = answers[q.id];

    if (
      userAnswer &&
      userAnswer.toLowerCase().trim() ===
      q.answer.toLowerCase().trim()
    ) {
      score++;
    }
  });

  res.json({ score, total: quiz.length });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});