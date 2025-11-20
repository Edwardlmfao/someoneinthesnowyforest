const bg = document.getElementById("bg");
const border = 30; 

document.addEventListener("mousemove", (e) => {
  const rect = bg.getBoundingClientRect();

 
  const x = e.clientX - rect.left - border;
  const y = e.clientY - rect.top - border;

  bg.style.setProperty("--x", `${x}px`);
  bg.style.setProperty("--y", `${y}px`);
  bg.style.setProperty("--afterOpacity", "1");
});

document.addEventListener("mouseleave", () => {
  bg.style.setProperty("--afterOpacity", "0");
});
