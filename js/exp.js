var record1;
record1 = {
    ename: "Расход 1",
    esum: 40000,
    ecl: 1,
};
var formElement = document.getElementById("create-exp");
formElement.addEventListener("submit", sendExp);
function sendExp(event) {
    event.preventDefault();
    var lastChild = event.target.lastElementChild;
    if (lastChild.children[1].classList.contains("ready-submit")) {
        console.log("may");
    }
    else {
        lastChild.children[1].style.outline = "solid 1px #ff0000";
        setTimeout(function () {
            lastChild.children[1].style.outline = "";
        }, 400);
    }
}
