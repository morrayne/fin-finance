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
document.getElementById("top-row-text-holder").children[0].textContent = localStorage.getItem("username");







