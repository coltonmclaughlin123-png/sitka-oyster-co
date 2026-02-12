// Highlight active nav link based on current page
(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Auto-update footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
