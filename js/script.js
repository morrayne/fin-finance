document.addEventListener("click", function(event) {
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
        if (targetWish.children[0].classList.contains("jcsb")) {
            targetWish.style.borderRadius = "8px 24px 24px 8px";
            targetWish.children[0].classList.remove("jcsb");
            targetWish.children[0].classList.add("fc");
            targetWish.parentElement.style.paddingRight = "80px";
            targetWish.children[0].children[0].style.fontSize = "24px";
            targetWish.children[0].children[1].style.fontSize = "12px";
            targetWish.parentElement.children[1].children[1].style.display = "flex";
        } else {
            targetWish.style.borderRadius = "";
            targetWish.children[0].classList.remove("fc");
            targetWish.children[0].classList.add("jcsb");
            targetWish.parentElement.style.paddingRight = "";
            targetWish.children[0].children[0].style.fontSize = "";
            targetWish.children[0].children[1].style.fontSize = "";
            targetWish.parentElement.children[1].children[1].style.display = "";
        }
    }
})

// КНОПКИ НАСТРОЕК





// ЗАГОТОВКА ДЛЯ ДИАГРАММЫ

let colorArray = ["#527f99", "#15d44f", "#c43232", "#c4327b", "#563d7c", "#f1e05a"];
document.querySelectorAll(".dia").forEach(function(el, index) {
    if (index < colorArray.length) {
        el.style.background = "conic-gradient(" + colorArray[index] + " 0% " + (index + 1) * 10 + "%, rgba(1, 4, 9, 0) " + (index + 1) * 10 + "% 100%)";
        el.style.zIndex = 10 - index;
    }
})

