const way = "./res/icons/";
const icons = ["f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "m0", "m1", "m2", "m3", "m4", "m5", "m6", "m7"];
function getRandomIcon() {
    const randomIndex = Math.floor(Math.random() * icons.length);
    return way + icons[randomIndex] + ".svg";
}
document.querySelector(".toprow-icon").src = getRandomIcon();
