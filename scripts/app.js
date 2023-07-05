window.addEventListener("load", () => {
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
  const toggleLogin = document.querySelector(".logins");
  const menuLogin = document.querySelector(".log-in");
  const body = document.querySelector("body");

  toggleLogin?.addEventListener("click", () => {
    menuLogin?.classList.add("is-show");
    body.style.overflow = "hidden";
  });

  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".log-in, .log-in *") &&
      e.target.matches(".icofont-error")
    ) {
      menuLogin?.classList.remove("is-show");
      body.style.overflow = "";
    }
  });

  const toggleSignup = document.querySelector(".singups");
  const menuLogout = document.querySelector(".sign-in");
  toggleSignup?.addEventListener("click", () => {
    menuLogout?.classList.add("is-show");
    body.style.overflow = "hidden";
  });

  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".sign-in, .sign-in *") &&
      e.target.matches(".icofont-error")
    ) {
      menuLogout?.classList.remove("is-show");
      body.style.overflow = "";
    }
  });
});
