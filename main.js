const container = document.querySelector(".container");
const reset = document.querySelector("#reset");

function makeBox(size) {
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");

    box.style.width = `${1000 / size}px`;
    box.style.height = `${1000 / size}px`;

    box.addEventListener("mouseover", () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

    box.classList.toggle("box");
    container.appendChild(box);
  }
}

makeBox(16)

reset.addEventListener("click", () => {
  let grid = +prompt("How big of a grid you want?");

  while (grid > 100 || grid < 1)
    grid = prompt("Please enter a number between 1 and 100");

  container.innerHTML = "";

  makeBox(grid)
});