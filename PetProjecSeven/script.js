let currentScreen = 0;
let isScrolling = false;

window.addEventListener("wheel", (e) => {
  const screens = document.querySelectorAll(".screen");
  if (!screens.length) return;

  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0) {
    currentScreen = Math.min(currentScreen + 1, screens.length - 1);
  } else {
    currentScreen = Math.max(currentScreen - 1, 0);
  }

  window.scrollTo({
    top: currentScreen * window.innerHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    isScrolling = false;
  }, 700);
});
const signupBtn = document.querySelector(".main-signup");
const signupModal = document.getElementById("signupModal");
const signupClose = document.getElementById("signupClose");
const signupOverlay = document.getElementById("signupOverlay");

if (signupBtn && signupModal && signupClose && signupOverlay) {
  signupBtn.addEventListener("click", () => {
    signupModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  signupClose.addEventListener("click", () => {
    signupModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  signupOverlay.addEventListener("click", () => {
    signupModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      signupModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}
