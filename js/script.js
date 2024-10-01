// ЗАГОТОВКА ДЛЯ ДИАГРАММЫ

let colorArray = [
  "#527f99",
  "#15d44f",
  "#c43232",
  "#c4327b",
  "#563d7c",
  "#f1e05a",
];
document.querySelectorAll(".dia").forEach(function (el, index) {
  if (index < colorArray.length) {
    el.style.background =
      "conic-gradient(" +
      colorArray[index] +
      " 0% " +
      (index + 1) * 10 +
      "%, rgba(1, 4, 9, 0) " +
      (index + 1) * 10 +
      "% 100%)";
    el.style.zIndex = 10 - index;
  }
});

// РАСКРЫТИЕ ДНЯ И ЖЕЛАНИЙ

document.addEventListener("click", function (event) {
  let targetDay = event.target.closest(".day");
  if (targetDay) {
    if (targetDay.children[1].style.display != "flex") {
      targetDay.children[1].style.display = "flex";
    } else {
      targetDay.children[1].style.display = "none";
    }
  }
  let targetWish = event.target.closest(".wish-left");
  if (targetWish) {
    if (targetWish.parentElement.style.paddingRight !== "152px") {
      targetWish.parentElement.style.paddingRight = "152px";
    } else {
      targetWish.parentElement.style.paddingRight = "";
    }
  }

  // NAME INPUT

  if (event.target.id === "submit-name") {
    localStorage.setItem("username", document.getElementById("name-inp").value);
    document.getElementById("top-row-text-holder").children[0].textContent =
      document.getElementById("name-inp").value;
  }
});
if (localStorage.getItem("username")) {
  document.getElementById("top-row-text-holder").children[0].textContent =
    localStorage.getItem("username");
}

let form = document.querySelectorAll(".form-submit").forEach(function (el) {
  let inputs = el.querySelectorAll(".exp-input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      const valueLength = inputs[i].value.length;
      if (valueLength === 0) {
        inputs[i].classList.remove("outline-green", "outline-red");
      } else if (valueLength < 3 || valueLength > 30) {
        inputs[i].classList.remove("outline-green");
        inputs[i].classList.add("outline-red");
      } else {
        inputs[i].classList.add("outline-green");
        inputs[i].classList.remove("outline-red");
      }
      const allValid = Array.from(inputs).every((input) =>
        input.classList.contains("outline-green")
      );
      const lastChild = inputs[0].parentElement.lastElementChild.lastElementChild;
      if (allValid) {
        lastChild.classList.add("ready-submit");
      } else {
        lastChild.classList.remove("ready-submit");
      }
    });
  }
});
