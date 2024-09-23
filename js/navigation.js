let footerGap = 0;
let footerBtnWidths = [];
let footerHolder = document.getElementById("footer-bar-holder");
document.querySelectorAll(".footer-btn").forEach(function(el, index) {
    if (index === 0 || index === 1 || index === 2 || index === 3) {
        footerBtnWidths[index] = el.clientWidth;
    } else {
        console.error("no footer button with such index was found");
    }
    footerGap = Math.abs((footerBtnWidths.reduce((partialSum, a) => partialSum + a, 0) - footerHolder.clientWidth) / 3);
    // console.log(footerGap);
})
footerHolder.children[0].style.width = footerBtnWidths[0] + "px";
document.querySelectorAll(".footer-btn").forEach(function(el, index) {
    el.addEventListener("click", function(){
        footerHolder.children[0].style.width = footerBtnWidths[index] + "px";
        footerSwitcher(index);
    })
})
let startX;
document.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX;
})
const banIdArray = ["stat-1", "stats-1-holder", "stat-2", "dia", "void", "dia-holder", "wishlist-form-holder", "f12"];
let page = 0;

document.addEventListener("touchend", function(event) {
    const endX = event.changedTouches[0].clientX;
    const targetElement = event.target;
    const isBanned = banIdArray.some(id => 
        targetElement.id === id || 
        targetElement.classList.contains(id) || 
        targetElement.tagName === "LABEL"
    )
    if (Math.abs(endX - startX) > (window.innerWidth / 2) - 40 && !isBanned) {
        if (endX - startX > 0 && page > 0) {
            page -= 1;
        } else if (endX - startX < 0 && page < 3) {
            page += 1;
        }
        footerSwitcher(page);
    }
});

function footerSwitcher(index) {
    if (index === 0) {
        footerHolder.children[0].style.transform = "translate(0px)";
        document.querySelectorAll(".container").forEach(function(el) {
            el.style.left = "0px";
        })
    } else {
        let btnWidth = 0;
        for (var j = 0; j < index; j++) { 
            btnWidth += footerBtnWidths[j];
        }
        footerHolder.children[0].style.transform = "translate(" + (btnWidth + footerGap * index) + "px)";
        document.querySelectorAll(".container").forEach(function(el) {
            el.style.left = "-" + window.innerWidth * index + "px";
        })
    }
}





// function footerSwitcher(index) {
//     const leftOffset = footerBtnWidths
//       .slice(0, index)
//       .reduce((acc, item) => acc + item, 0);
  
//     footerHolder.style.paddingLeft = leftOffset + footerGap * index + "px";
//     document.querySelectorAll(".container").forEach(function (el) {
//       el.style.left = "-" + window.innerWidth * index + "px";
//     }); 
//   }