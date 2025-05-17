const svgList = document.querySelectorAll("footer ul li.li-svg svg");

svgList.forEach((svgButton, index) => {
  const key = `svg-clicked-${index}`;
  const wasClicked = localStorage.getItem(key) === "true";

  // Aplica cor inicial se já foi clicado antes
  if (wasClicked) {
    if (index === 0) {
      svgButton.setAttribute("fill", "hsl(347, 90%, 55%)");
    } else if (index === 1) {
      svgButton.setAttribute("fill", "hsl(0, 0%, 100%)");
    }
  }

  svgButton.addEventListener("click", () => {
    const isClicked = localStorage.getItem(key) === "true";

    if (!isClicked) {
      if (index === 0) {
        svgButton.setAttribute("fill", "hsl(347, 90%, 55%)");
      } else if (index === 1) {
        svgButton.setAttribute("fill", "hsl(0, 0%, 100%)");
      }
      localStorage.setItem(key, "true");
    } else {
      // Alternar de volta (opcional)
      svgButton.setAttribute("fill", "none");
      localStorage.setItem(key, "false");
    }
  });
});
