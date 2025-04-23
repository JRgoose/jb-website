document.addEventListener("DOMContentLoaded", () => {
  // Create tooltip for Goose logo
  const tooltip = document.createElement("div");
  tooltip.className = "goose-tooltip";
  tooltip.textContent = "created by Goose";
  document.body.appendChild(tooltip);
  
  // Add click handler to Goose logo
  const gooseLogo = document.querySelector(".goose-logo");
  gooseLogo.addEventListener("click", () => {
    tooltip.classList.add("visible");
    setTimeout(() => {
      tooltip.classList.remove("visible");
    }, 2000);
  });
}); 