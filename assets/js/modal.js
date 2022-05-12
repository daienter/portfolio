const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
      overlay.classList.add("active");
      body.classList.add("disabled");
      document.getElementById("bg-trans-black").style.backgroundColor = "rgba(0,0,0,0.8)";
      document.getElementById("bg-trans-black").style.zIndex = "2";
      document.getElementById("bg-trans-black").style.height = "100vh";
      document.getElementById("bg-trans-black").style.width = "100%";
      document.getElementById("bg-trans-black").style.position = "fixed";
      document.getElementById("mainWrapper").style.overflow = "hidden";
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal-content");
    modal.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("disabled");
    document.getElementById("mainWrapper").style = "";
    document.getElementById("bg-trans-black").style.backgroundColor = "transparent";
    document.getElementById("bg-trans-black").style.zIndex = "-10";
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal-content");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};
