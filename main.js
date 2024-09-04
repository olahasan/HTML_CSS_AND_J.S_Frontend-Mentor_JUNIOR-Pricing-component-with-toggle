document
  .querySelector(".container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("learn")) {
      document.querySelectorAll(".box").forEach(function (box) {
        box.classList.remove("active");
      });
      event.target.parentElement.classList.add("active");
    } else if (
      event.target.id === "button" ||
      event.target.closest("#button")
    ) {
      toggleButton();
    }
  });

document.getElementById("button").addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault(); // Prevent default action for space key
    toggleButton();
  }
});

function toggleButton() {
  const button = document.getElementById("button");
  button.classList.toggle("left");
  const prices = button.classList.contains("left")
    ? ["$199.99", "$249.99", "$399.99"]
    : ["$19.99", "$24.99", "$39.99"];
  document.querySelectorAll(".num").forEach((e, index) => {
    e.innerHTML = prices[index];
  });
}
