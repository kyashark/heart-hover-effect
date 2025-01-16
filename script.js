const hearts = document.querySelectorAll('.container div');
const showHearts = () => hearts.forEach(heart => heart.style.display = 'block');
const hideHearts = () => hearts.forEach((heart, index) => {
    if (index < hearts.length - 1) heart.style.display = 'none';
});

const heart4 = document.getElementById("heart-4");
heart4.addEventListener("mouseenter", showHearts);
heart4.addEventListener("mouseleave", hideHearts);
