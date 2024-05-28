document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.btn-play');
    const pauseButtons = document.querySelectorAll('.btn-pause');

    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const audioId = this.getAttribute('data-audio');
            const audio = document.getElementById(audioId);
            audio.play();
        });
    });

    pauseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const audioId = this.getAttribute('data-audio');
            const audio = document.getElementById(audioId);
            audio.pause();
        });
    });
});