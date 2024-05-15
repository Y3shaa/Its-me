document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff0000', '#ff69b4', '#ff1493', '#db7093'];
    const texts = document.querySelectorAll('h1, h2');

    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        texts.forEach(text => {
            text.style.color = randomColor;
        });
    }, 500);
});
