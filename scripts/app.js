const icofontErrors = document.querySelectorAll(".text-icon-error");

if (icofontErrors) {
  icofontErrors.forEach((icofontError) => {
    icofontError.addEventListener("mouseenter", () => {
      icofontError.style.fontSize = "32px";
      icofontError.style.color = "red";
      icofontError.style.cursor = "pointer";
      icofontError.style.transition = "color 0.3s ease";
    });

    icofontError.addEventListener("mouseleave", () => {
      icofontError.style.color = "";
      icofontError.style.cursor = "";
      icofontError.style.fontSize = "";
    });
  });
}
window.addEventListener("load", () => {
  const toggle = document.querySelector(".header-outhor-resgiter");
  const menu = document.querySelector(".login");
  const body = document.querySelector("body");

  toggle?.addEventListener("click", () => {
    menu?.classList.add("is-show");
    body.style.overflow = "hidden"; // Ngăn chặn việc lăn con chuột khi menu được mở ra
  });

  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".login, .login *") &&
      e.target.matches(".icofont-error")
    ) {
      menu?.classList.remove("is-show");
      body.style.overflow = ""; // Cho phép lăn con chuột khi menu bị đóng lại
    }
  });
});
