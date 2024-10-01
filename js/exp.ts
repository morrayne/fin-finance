type expRecord = {
  ename: string;
  esum: number;
  ecl: number;
};

let record1: expRecord;

record1 = {
  ename: "Расход 1",
  esum: 40000,
  ecl: 1,
};

const formElement = document.getElementById("create-exp") as HTMLFormElement;

formElement.addEventListener("submit", sendExp);

function sendExp(event): void {
  event.preventDefault();
  const lastChild = event.target.lastElementChild as HTMLElement;
  if (lastChild.children[1].classList.contains("ready-submit")) {
    console.log("may");
  } else {
    lastChild.children[1].style.outline = "solid 1px #ff0000";
    setTimeout(() => {
      lastChild.children[1].style.outline = "";
    }, 400);
  }
}
