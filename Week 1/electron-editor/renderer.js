const editor = document.getElementById("editor");
const clearBtn = document.getElementById("clearBtn");
const wordCount = document.getElementById("wordCount");

editor.addEventListener("input", () => {
  const text = editor.value.trim();

  const characters = editor.value.length;

  const count = text.split(" ").length;

  wordCount.textContent =
  `Words: ${count} | Characters: ${characters}`;


});

clearBtn.addEventListener("click", () => {

  editor.value = "";
  wordCount.textContent =
    "Words: 0";
});