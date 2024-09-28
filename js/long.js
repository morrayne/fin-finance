let avalColors = ["#b4c5db", "#98a9be", "#728495", "#4a5b6a", "#2d9c94", "#393d79", "#6c53a8", "#30599c"];
document.querySelectorAll(".theme-btn").forEach(function(el, index) {
    if (index === 0) {
        el.addEventListener("click", function() {
            let a = ["section", ".theme-bar", "footer", ".wish-left", ".day"];
            uniPaint(a, "", "bg");
            let b = [".container", "label", ".theme-bar-holder", ".wish-submit", "input"]
            uniPaint(b, "", "bg");
            let c = ["div", "span", "label", "button"];
            uniPaint(c, "", "color");
            let d = [".wish-right", ".day-bot-row", "footer"];
            uniPaint(d, "", "border");
            let d2 = ["footer"];
            uniPaint(d2, "", "border");

            let e = ["footer-bar", "wishlist-top", "clear-limit", "stat-1", "stat-2", "void", "shortlist", "full-list"];
            let f = ["", "", "", "", "", "", "", ""];
            idPaint(e, f);

            document.querySelectorAll(".svg").forEach(function(elem) {
                elem.style.filter = "invert(1)";
            })
        })
    } else if (index === 1) {
        el.addEventListener("click", function() {
            let a = ["section", ".theme-bar", "footer", ".wish-left", ".day"];
            uniPaint(a, "#fff", "bg");
            let b = [".container", "label", ".theme-bar-holder", ".wish-submit", "input"]
            uniPaint(b, "#ccc", "bg");
            let c = ["div", "span", "label", "button", "input"];
            uniPaint(c, "#000", "color");
            let d = [".wish-right"];
            uniPaint(d, "#fff", "border");
            let d2 = ["footer", ".day-bot-row"];
            uniPaint(d2, "#000", "border");

            let e = ["footer-bar", "wishlist-top", "clear-limit", "stat-1", "stat-2", "void", "shortlist", "full-list"];
            let f = ["#000", "#fff", "#fff", "#ccc", "#ccc", "#ccc", "#ccc", "#ccc"];
            idPaint(e, f);

            document.querySelectorAll(".svg").forEach(function(elem) {
                elem.style.filter = "invert(0)";
            })
        })
    } else if (index === 2) {
        el.addEventListener("click", function() {
            let a = ["section", ".theme-bar", "footer", ".wish-left", ".day"];
            uniPaint(a, "#344e41", "bg");
            let b = [".container", "label", ".theme-bar-holder", ".wish-submit", "input"]
            uniPaint(b, "#a3b18a", "bg");
            let c = ["div", "span", "label", "button", "input"];
            uniPaint(c, "#fff", "color");
            let d = [".wish-right", ".day-bot-row"];
            uniPaint(d, "#a3b18a", "border");
            let d2 = ["footer"];
            uniPaint(d2, "#fff", "border");

            let e = ["footer-bar", "wishlist-top", "clear-limit", "stat-1", "stat-2", "void", "shortlist", "full-list"];
            let f = ["#a3b18a", "#344e41", "#344e41", "#a3b18a", "#a3b18a", "#a3b18a", "#a3b18a", "#a3b18a"];
            idPaint(e, f);

            document.querySelectorAll(".svg").forEach(function(elem) {
                elem.style.filter = "invert(1)";
            })
        })
    } else if (index === 3) {
        el.addEventListener("click", function() {
            let colors = getRandomColors(avalColors);
            let baseColor = colors[0];
            let extraColor = colors[1];
            let a = ["section", ".theme-bar", "footer", ".wish-left", ".day"];
            uniPaint(a, baseColor, "bg");
            let b = [".container", "label", ".theme-bar-holder", ".wish-submit", "input"]
            uniPaint(b, extraColor, "bg");
            let c = ["div", "span", "label", "button"];
            uniPaint(c, "#fff", "color");
            let d = [".wish-right", ".day-bot-row", "footer"];
            uniPaint(d, "#fff", "border");
            let d2 = ["footer"];
            uniPaint(d2, "#fff", "border");

            let e = ["footer-bar", "wishlist-top", "clear-limit", "stat-1", "stat-2", "void", "shortlist", "full-list"];
            let f = [baseColor, extraColor, extraColor, baseColor, baseColor, baseColor, baseColor, baseColor];
            idPaint(e, f);

            document.querySelectorAll(".svg").forEach(function(elem) {
                elem.style.filter = "invert(1)";
            })
        })
    }
})

// FUNCTIONS

function idPaint(idArray, colorArray) {
    for (var i = 0; i < idArray.length; i++){
        document.getElementById(idArray[i]).style.background = colorArray[i];
    }
}

function uniPaint(clArray, color, part) {
    for (var i = 0; i < clArray.length; i++) {
        document.querySelectorAll(clArray[i]).forEach(function(el) {
            if (part === "bg") {
                el.style.background = color;
            } else if (part === "color") {
                el.style.color = color;
            } else if (part === "border") {
                if (clArray[i] === ".wish-right"){
                    if (color != "") {
                        el.style.border = "solid 5px " + color;
                    } else {
                        el.style.border = "";
                    }
                } else if (clArray[i] === ".day-bot-row"){
                    if (color != "") {
                        el.style.borderBottom = "solid 1px " + color;
                    } else {
                        el.style.borderBottom = "";
                    }
                } else if (clArray[i] === "footer") {
                    if (color != "") {
                        el.style.borderTop = "solid 1px " + color;
                    } else {
                        el.style.borderTop = "";
                    }
                }
            }
        })
    }
}

function getRandomColors(arr) {
    if (arr.length < 2) {
        throw new Error("Массив должен содержать как минимум 2 элемента.");
    }
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}