document.querySelectorAll(".collapsible-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    if (content.hasAttribute("hidden")) {
      content.removeAttribute("hidden");
    } else {
      content.setAttribute("hidden", "");
    }
  });
});
