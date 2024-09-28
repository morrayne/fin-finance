function optionsBtnSwitcher(width, holder, index) {
    holder.children[0].style.width = width[index] + "px";
    if (index === 0) {
        holder.children[0].style.transform = "translate(0px)";
    } else {
        let btnWidth = 0;
        for (var j = 0; j < index; j++) { 
            btnWidth += width[j];
        }
        holder.children[0].style.transform = "translate(" + (btnWidth + 8 * index) + "px)";
    }
}
document.querySelectorAll(".theme-btn-holder").forEach(function(el) {
    let widthArray = [];
    let realIndex = 0;
    el.addEventListener("click", function() {
        for (var i = 1; i < el.parentElement.children.length; i++) {
            widthArray.push(el.parentElement.children[i].clientWidth);
            if (el.parentElement.children[i] === el) {
                realIndex = i - 1;
            }
        }
        optionsBtnSwitcher(widthArray, el.parentElement.children[0], realIndex);
    })
})