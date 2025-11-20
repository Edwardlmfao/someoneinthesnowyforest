const bg = document.getElementById("bg");
const border = Math.max(10, Math.min(window.innerWidth * 0.05, 30));

function updateSpotlight(x, y) {
  const rect = bg.getBoundingClientRect();

  const relX = x - rect.left - border;
  const relY = y - rect.top - border;

  bg.style.setProperty("--x", `${relX}px`);
  bg.style.setProperty("--y", `${relY}px`);
  bg.style.setProperty("--afterOpacity", "1");
}


document.addEventListener("mousemove", (e) => {
  updateSpotlight(e.clientX, e.clientY);
});


document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  updateSpotlight(touch.clientX, touch.clientY);
});


document.addEventListener("mouseleave", () => {
  bg.style.setProperty("--afterOpacity", "0");
});
document.addEventListener("touchend", () => {
  bg.style.setProperty("--afterOpacity", "0");
});
