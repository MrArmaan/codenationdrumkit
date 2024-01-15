document.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0; 
    audio.play();

    if (button) {
        button.classList.add('playing');
        setTimeout(() => button.classList.remove('playing'), 300);
    }
}

document.querySelectorAll('.sound').forEach(button => {
    button.addEventListener('click', function () {
        const key = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${key}"]`);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
    });
});
