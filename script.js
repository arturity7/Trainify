function login() {
  window.location.href = "dashboard.html";
}

function irPara(pagina) {
  window.location.href = pagina;
}

function openTreino(treino) {
  if (treino === "musculacao") {
    // ✅ evite acento no nome do arquivo
    window.location.href = "musculacao.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // PREMIUM (locked)
  // =========================
  const lockedTreinos = document.querySelectorAll(".treino-balao.locked");
  const premiumAlert = document.getElementById("premium-alert");
  const modal = document.getElementById("premium-modal");
  const closeModal = document.getElementById("close-modal");

  const showAlert = () => {
    if (!premiumAlert) return;
    premiumAlert.classList.add("show");
    setTimeout(() => premiumAlert.classList.remove("show"), 2500);
  };

  lockedTreinos.forEach((treino) => {
    treino.addEventListener("click", () => {
      // modal grandão (prioridade)
      if (modal) modal.classList.add("show");
      // opcional: alert embaixo
      // showAlert();
    });
  });

  if (closeModal && modal) {
    closeModal.addEventListener("click", () => modal.classList.remove("show"));

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show");
    });
  }

  // =========================
  // MENU LATERAL
  // =========================
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("menu-overlay");

  const closeSideMenu = () => {
    if (!sideMenu || !overlay) return;
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
  };

  if (openMenu && sideMenu && overlay) {
    openMenu.addEventListener("click", () => {
      sideMenu.classList.add("open");
      overlay.classList.add("show");
    });
  }

  if (closeMenu) closeMenu.addEventListener("click", closeSideMenu);
  if (overlay) overlay.addEventListener("click", closeSideMenu);
});
