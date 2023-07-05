window.addEventListener("load", () => {
  const icofontErrors = document.querySelectorAll(".text-icon-error");
  if (icofontErrors) {
    icofontErrors.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        e.style.fontSize = "32px";
        e.style.color = "red";
        e.style.cursor = "pointer";
        e.style.transition = "color 0.3s ease";
      });

      e.addEventListener("mouseleave", () => {
        e.style.color = "";
        e.style.cursor = "";
        e.style.fontSize = "";
      });
    });
  }
  const contactsHover = document.querySelectorAll(".contacts-hover");
  if (contactsHover) {
    contactsHover.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        e.style.color = "rgb(27,183,31)";
      });
      e.addEventListener("mouseleave", () => {
        e.style.color = "";
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
