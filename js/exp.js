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
var formElement = document.getElementById("create-exp");
formElement.addEventListener("submit", sendExp);
function sendExp(event) {
    event.preventDefault();
    var target = event.target;
    var lastChild = target.lastElementChild;
    var secondChild = lastChild.children[1];
    if (secondChild.classList.contains("ready-submit")) {
        // console.log(target.querySelectorAll(".exp-input"));
        var inputValues = [];
        var inputs = target.querySelectorAll(".exp-input");
        for (var i = 0; i < inputs.length; i++) {
            inputValues.push(inputs.item(i).value);
        }
        var radioButtons = target.querySelectorAll(".form-wrap input[type='radio']");
        var checkedRadioValue = null;
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons.item(i).checked) {
                checkedRadioValue = i;
                break;
            }
        }
        console.log(inputValues);
        console.log(checkedRadioValue);
    }
    else {
        secondChild.style.outline = "solid 1px #ff0000";
        setTimeout(function () {
            secondChild.style.outline = "";
        }, 400);
    }
}
function dayTop(date) {
    var day = document.createElement("button");
    day.classList.add("day");
    var daytop = document.createElement("div");
    daytop.classList.add("day-top");
    var span1 = document.createElement("span");
    span1.textContent = "date";
    var span2 = document.createElement("span");
    span1.textContent = "summ";
    daytop.appendChild(span1);
    daytop.appendChild(span2);
    day.appendChild(daytop);
}
function dayBot(date, inputValues, checkedRadioValue) {
    // if (recordExist) {
    // } else {
    // }
}
function recordExist(date) {
    var _a;
    var day = (_a = document.getElementById("exp-list")) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".day");
    return day;
}
var days = recordExist("some-date");
console.log(days[0].children[0].children[0].textContent, days[1].children[0].children[0].textContent);
