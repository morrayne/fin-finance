let widths = [[], [], []];
document.querySelectorAll(".opt").forEach(function (el, index) {
  for (var i = 2; i < el.children.length; i += 2) {
    widths[index].push(el.children[i].clientWidth);
  }
});
document.addEventListener("click", function (event) {
  if (event.target.tagName === "LABEL") {
    const formIndex = Array.from(
      event.target.parentElement.parentElement.parentElement.querySelectorAll(
        event.target.parentElement.tagName
      )
    ).indexOf(event.target.parentElement);
    const labelIndex = Array.from(
      event.target.parentElement.querySelectorAll("label")
    ).indexOf(event.target);
    moveToChecked(formIndex, labelIndex);
    if (formIndex === 0) {
      if (labelIndex === 0) {
        changeTheme(
          "#010309",
          "#0d1117",
          "#010309",
          "#ffffff",
          "#ffffff",
          "#ffffff60"
        );
        document.querySelectorAll(".svg").forEach(function (el) {
          el.style.filter = "";
        });
      } else if (labelIndex === 1) {
        changeTheme(
          "#ffffff",
          "#e5e5e5",
          "#ffffff",
          "#000000",
          "#000000",
          "#00000060"
        );
        document.querySelectorAll(".svg").forEach(function (el) {
          el.style.filter = "invert(0)";
        });
      } else if (labelIndex === 2) {
        changeTheme(
          "#010309",
          "#871e1b",
          "#dd9c18",
          "#000000",
          "#000000",
          "#00000090"
        );
        document.querySelectorAll(".svg").forEach(function (el) {
          el.style.filter = "invert(0)";
        });
      } else {
        const random = getRandomColors();
        if (random[3] === 1) {
          changeTheme(
            random[0],
            random[1],
            random[2],
            "#000000",
            "#000000",
            "#00000060"
          );
          document.querySelectorAll(".svg").forEach(function (el) {
            el.style.filter = "";
          });
        } else {
          changeTheme(
            random[0],
            random[1],
            random[2],
            "#ffffff",
            "#ffffff",
            "#ffffff60"
          );
          document.querySelectorAll(".svg").forEach(function (el) {
            el.style.filter = "invert(1)";
          });
        }
      }
    }
  }
})
function moveToChecked(formIndex, labelIndex) {
  document.querySelectorAll(".opt").forEach(function (el, index) {
    if (index === formIndex) {
      el.children[0].style.width = widths[formIndex][labelIndex] + "px";
      if (labelIndex === 0) {
        el.children[0].style.transform = "";
      } else {
        let left = 0;
        for (var i = 0; i < labelIndex; i++) {
          left += widths[formIndex][i] + 12;
        }
        el.children[0].style.transform = "translate(" + left + "px)";
      }
    }
  })
}
const darkColors = [
  "#2F4F4F", // Dark Slate Gray
  "#4B0082", // Indigo
  "#8B4513", // Saddle Brown
  "#556B2F", // Dark Olive Green
  "#2E8B57", // Sea Green
  "#483D8B", // Dark Slate Blue
  "#5F9EA0", // Cadet Blue
  "#7B68EE", // Medium Slate Blue
  "#8B0000", // Dark Red
  "#4A4A4A", // Dim Gray
  "#696969", // Dim Gray
  "#8B8C7A", // Dark Gray
  "#3C3F3F", // Dark Charcoal
  "#4E5452", // Steel Gray
  "#6B5B4D", // Brown Sugar
  "#8FBC8F", // Dark Sea Green
  "#7E7B7A", // Ash Gray
  "#2E2E2E", // Jet Black
  "#4B3D3D", // Charcoal Brown
  "#4F4F4F", // Charcoal Gray
  "#3B3B3B", // Onyx
]
const lightColors = [
  "#F0E68C", // Khaki
  "#FFE4B5", // Moccasin
  "#FFDAB9", // Peach Puff
  "#FFB6C1", // Light Pink
  "#E6E6FA", // Lavender
  "#D3D3D3", // Light Gray
  "#FFFACD", // Lemon Chiffon
  "#FFF0F5", // Lavender Blush
  "#F5F5DC", // Beige
  "#F5FFFA", // Mint Cream
  "#FAFAD2", // Light Goldenrod Yellow
  "#E0FFFF", // Light Cyan
  "#FFDEAD", // Navajo White
  "#F0FFF0", // Honeydew
  "#B0E0E6", // Powder Blue
  "#ADD8E6", // Light Blue
  "#FFEFD5", // Papaya Whip
  "#F0E68C", // Khaki
  "#FFE4E1", // Misty Rose
  "#D8BFD8", // Thistle
  "#FFFAF0", // Floral White
]

function getRandomColors() {
  var chosenValue = Math.random() < 0.5 ? 0 : 1;
  let selectedArray = [];
  if (chosenValue === 1) {
    selectedArray = lightColors;
  } else {
    selectedArray = darkColors;
  }
  const selectedColors = [];
  while (selectedColors.length < 3) {
    const color =
      selectedArray[Math.floor(Math.random() * selectedArray.length)];
    if (!selectedColors.includes(color)) {
      selectedColors.push(color);
    }
  }
  selectedColors.push(chosenValue);
  return selectedColors;
}

function changeTheme(a, b, c, d, e, f) {
  document.body.style.setProperty("--main", a);
  document.body.style.setProperty("--extra", b);
  document.body.style.setProperty("--third", c);
  document.body.style.setProperty("--text", d);
  document.body.style.setProperty("--outline", e);
  document.body.style.setProperty("--placeholder-color", f);
}
moveToChecked(0, 0);
moveToChecked(1, 0);
moveToChecked(2, 0);