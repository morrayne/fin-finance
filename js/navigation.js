let footerGap = 0;
let footerBtnWidths = [];

let footerTop = document.getElementById("footer-top");

document.querySelectorAll(".footer-btn").forEach(function (el, index) {
  if (index <= 4) {
    footerBtnWidths[index] = el.clientWidth;
  } else {
    console.error("no footer button with such index was found");
  }
  footerGap = Math.abs((footerBtnWidths.reduce((partialSum, a) => partialSum + a, 0) - footerTop.clientWidth) / 3)
})

footerTop.children[0].style.width = footerBtnWidths[0] + "px";
document.querySelectorAll(".footer-btn").forEach(function (el, index) {
  el.addEventListener("click", function () {
    footerTop.children[0].style.width = footerBtnWidths[index] + "px";
    footerSwitcher(index);
  })
})

let page = 0;
function footerSwitcher(index) {
  if (index === 0) {
    footerTop.children[0].style.transform = "translate(0px)";
    document.querySelectorAll(".container").forEach(function (el) {
      el.style.left = "0px";
    })
  } else {
    let btnWidth = 0;
    for (var j = 0; j < index; j++) {
      btnWidth += footerBtnWidths[j];
    }
    footerTop.children[0].style.transform = "translate(" + (btnWidth + footerGap * index) + "px)";
    document.querySelectorAll(".container").forEach(function (el) {
      el.style.left = "-" + window.innerWidth * index + "px";
    })
  }
}