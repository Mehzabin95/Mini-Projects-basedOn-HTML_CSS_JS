const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalcounterEl.innerText = textareaEl.value.length;
  remainingEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
