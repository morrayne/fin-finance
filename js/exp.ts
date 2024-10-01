// type expRecord = {
//   ename: string;
//   esum: number;
//   ecl: number;
// };

// let record1: expRecord;

// record1 = {
//   ename: "Расход 1",
//   esum: 40000,
//   ecl: 1,
// };

const formElement = document.getElementById("create-exp") as HTMLFormElement;
formElement.addEventListener("submit", sendExp);

function sendExp(event: Event): void {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  const lastChild = target.lastElementChild as HTMLElement;

  const secondChild = lastChild.children[1] as HTMLElement;
  if (secondChild.classList.contains("ready-submit")) {
    // console.log(target.querySelectorAll(".exp-input"));
    let inputValues: string[] = [];
    const inputs = target.querySelectorAll<HTMLInputElement>(".exp-input");
    for (let i = 0; i < inputs.length; i++) {
      inputValues.push(inputs.item(i).value);
    }
    const radioButtons = target.querySelectorAll<HTMLInputElement>(
      ".form-wrap input[type='radio']"
    );
    let checkedRadioValue: number | null = null;
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons.item(i).checked) {
        checkedRadioValue = i;
        break;
      }
    }
    console.log(inputValues);
    console.log(checkedRadioValue);
  } else {
    secondChild.style.outline = "solid 1px #ff0000";
    setTimeout(() => {
      secondChild.style.outline = "";
    }, 400);
  }
}

function dayTop(date: string) {
  let day = document.createElement("button");
  day.classList.add("day");
  let daytop = document.createElement("div");
  daytop.classList.add("day-top");
  let span1 = document.createElement("span");
  span1.textContent = "date";
  let span2 = document.createElement("span");
  span1.textContent = "summ";
  daytop.appendChild(span1);
  daytop.appendChild(span2);
  day.appendChild(daytop);
}
function dayBot(date: string, inputValues: string, checkedRadioValue: number) {
  // if (recordExist) {

  // } else {

  // }
}

function recordExist(date: string) {
  let day = document.getElementById("exp-list")?.querySelectorAll(".day");
  return day;
}

let days = recordExist("some-date");
console.log(days[0].children[0].children[0].textContent, days[1].children[0].children[0].textContent);