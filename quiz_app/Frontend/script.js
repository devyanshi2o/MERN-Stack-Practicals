let currentQuestions = [];

async function loadQuestions() {
  const topic = document.getElementById("topic").value;

  const res = await fetch(`http://localhost:5000/questions/${topic}`);
  const data = await res.json();

  currentQuestions = data;

  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  data.forEach((q) => {
    let html = `<p>${q.question}</p>`;

    q.options.forEach((opt) => {
      html += `
        <label>
          <input type="radio" name="${q.id}" value="${opt}">
          ${opt}
        </label><br>
      `;
    });

    quizDiv.innerHTML += html + "<br>";
  });
}

async function submitQuiz() {
  const topic = document.getElementById("topic").value;

  let answers = {};

  currentQuestions.forEach((q) => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    if (selected) {
      answers[q.id] = selected.value;
    }
  });

  const res = await fetch("http://localhost:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ topic, answers })
  });

  const data = await res.json();

  // Save result and redirect
  localStorage.setItem("score", data.score);
  localStorage.setItem("total", data.total);

  window.location.href = "result.html";
}