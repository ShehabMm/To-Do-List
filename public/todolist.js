const btn = document.querySelector("button");

const container = document.querySelector(".shehab");
console.log(container);

const big = document.getElementById("sec");
const input = document.getElementById("inn");

btn.addEventListener("click", (eo) => {
  eo.preventDefault();

  const task = `       <div class="first-div">
  <p class="tasks"> ${input.value} </p>

  <div class="container">
    <span class="icon-star icon"></span>

    <div class="trashangry">
      <span class="icon-trash icon"></span>
      <span class="icon-angry icon"></span>
    </div>
  </div>
</div>
`;

  big.innerHTML += task;
  eo.target.classList.add("tasks");
  input.value = "";
});

big.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry icon") {
    eo.target.classList.add("dn");

    const heart = `<span class="icon-heart    icons"></span>`;

    eo.target.parentElement.parentElement.parentElement
      .getElementsByClassName("tasks")[0]
      .classList.add("end");
    eo.target.parentElement.innerHTML += heart;
  } else if (eo.target.className == "icon-heart    icons") {
    eo.target.parentElement.parentElement.parentElement
      .getElementsByClassName("tasks")[0]
      .classList.remove("end");
    eo.target.classList.add("dn");

    const addAngry = `  <span class="icon-angry icon"></span>   `;

    eo.target.parentElement.innerHTML += addAngry;
  } else if (eo.target.className == "icon-star icon") {
    eo.target.classList.add("starr");
    big.prepend(eo.target.parentElement.parentElement);
  } else if (eo.target.className == "icon-star icon starr")
    eo.target.classList.remove("starr");
});
