const title = document.getElementById("title");
const textBtn = document.getElementById("textBtn");
const colorBtn = document.getElementById("colorBtn");

textBtn.addEventListener("click", () => {
  title.innerText = "Hello Engineer!";
});

colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
});


