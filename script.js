const hueSlider = document.getElementById('hueSlider');
hueSlider.addEventListener('input', (event) => {
    const hue = event.target.value;
    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
});
