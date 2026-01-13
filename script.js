function login() {
    window.location.href = "dashboard.html";
}
function irPara(pagina) {
    window.location.href = pagina;
}
const lockedTreinos = document.querySelectorAll('.treino-balao.locked');
const premiumAlert = document.getElementById('premium-alert');

lockedTreinos.forEach(treino => {
    treino.addEventListener('click', () => {
        premiumAlert.classList.add('show');

        setTimeout(() => {
            premiumAlert.classList.remove('show');
        }, 2500);
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const lockedTreinos = document.querySelectorAll('.treino-balao.locked');
    const modal = document.getElementById('premium-modal');
    const closeModal = document.getElementById('close-modal');

    if (!modal) {
        console.error('Modal premium não encontrado');
        return;
    }

    lockedTreinos.forEach(treino => {
        treino.addEventListener('click', () => {
            modal.classList.add('show');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Fechar clicando fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {

    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');

    if (!openMenu) {
        console.error('Botão do menu não encontrado');
        return;
    }

    openMenu.addEventListener('click', () => {
        sideMenu.classList.add('open');
        overlay.classList.add('show');
    });

    closeMenu.addEventListener('click', closeSideMenu);
    overlay.addEventListener('click', closeSideMenu);

    function closeSideMenu() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('show');
    }

});


