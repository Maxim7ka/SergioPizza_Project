let buttonModal = document.getElementById('buttonSetReviews');
let modalWindow = document.getElementById('modalWindow');
let modalContent = document.getElementById('modalContent');
let modalClose = document.getElementById('modalClose');

buttonModal.addEventListener('click', () => {
    modalWindow.style.opacity = '1';
    modalWindow.style.visibility = 'visible';
    modalContent.style.transform = 'translateY(0)';
});

modalClose.addEventListener('click', () => {
    modalWindow.style.opacity = '0';
    modalWindow.style.visibility = 'hidden';
    modalContent.style.transform = 'translateY(-50%)';
});

window.addEventListener('click', (e) => {
    if(e.target != modalWindow) return;
    modalWindow.style.opacity = '0';
    modalWindow.style.visibility = 'hidden';
    modalContent.style.transform = 'translateY(-50%)';
});

window.addEventListener('keyup', (e) => {
    if(e.code !== 'Escape') return;
    modalWindow.style.opacity = '0';
    modalWindow.style.visibility = 'hidden';
    modalContent.style.transform = 'translateY(-50%)';
});