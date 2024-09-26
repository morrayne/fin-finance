document.getElementById("theme").children[1].addEventListener("click", function(event) {
    console.log(event.target.parentElement.tagName === "BUTTON");
})