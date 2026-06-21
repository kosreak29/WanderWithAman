const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];

document.querySelector('.hero').addEventListener('mousemove', (e) => {

    const rect = canvas.getBoundingClientRect();

    for (let i = 0; i < 3; i++) {
        particles.push({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            life: 60
        });
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,220,${p.life / 60})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#fff';
        ctx.fill();

        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

animate();
window.addEventListener('scroll', () => {

    let scrollTop =
        document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById('progressBar')
        .style.width = progress + "%";

});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const text =
    document.querySelector(".story").innerText;

const words =
    text.trim().split(/\s+/).length;

const minutes =
    Math.ceil(words / 200);

document.getElementById("read-time")
    .textContent = `${minutes} Min Read`;

const heroBg = document.getElementById('heroBg');

window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    heroBg.style.transform =
        `translateY(${scroll * 0.20}px) scale(${1 + scroll / 7000})`;

    heroBg.style.filter =
        `blur(${Math.min(scroll / 50, 10)}px)`;

});
