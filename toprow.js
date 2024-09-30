// STREAK

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return day + month + year;
}
function keapStreak() {
  const date = new Date();
  const today = formatDate(date);
  const yesterdayDate = new Date(date);
  yesterdayDate.setDate(date.getDate() - 1);
  const yesterday = formatDate(yesterdayDate);
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    localStorage.setItem("lastVisit", today);
    console.log("streak lost");
    return 0;
  }
  if (today === lastVisit) {
    localStorage.setItem("lastVisit", today);
    console.log("already been today");
    return 2;
  } else if (yesterday === lastVisit) {
    localStorage.setItem("lastVisit", today);
    console.log("streak updated");
    return 1;
  } else {
    localStorage.setItem("lastVisit", today);
    console.log("streak lost");
    return 0;
  }
}

let streak = Number(localStorage.getItem("streak")) || 0;
let icon = document.getElementById("top-row-streak-holder").children[0].children[0];
const judge = keapStreak();

if (judge === 0) {
  streak = 0;
}
if (judge === 1) {
  streak += 1;
}
if (streak === 0) {
    icon.setAttribute("src", "./res/svg/streak/nostreak.svg");
    document.getElementById("streak-holder").style.background = "";
} else if (streak < 10){
    icon.setAttribute("src", "./res/svg/streak/streak.svg");
} else {
    icon.setAttribute("src", "./res/svg/streak/streak.svg");
    document.getElementById("streak-holder").style.background = "linear-gradient(-45deg, #ff7300, #ff0000)";
}

document.getElementById("top-row-streak-holder").children[1].textContent = streak;
localStorage.setItem("streak", streak);

// SINCE

if (localStorage.getItem("since") === null) {
  localStorage.setItem("since", formatDate(new Date()).slice(0, 2) + "." + formatDate(new Date()).slice(2, 4) + "." + formatDate(new Date()).slice(4, 9));
  console.log("registration date set");
}
const since = localStorage.getItem("since");
document.getElementById("top-row-text-holder").children[1].textContent = "since: " + since;
