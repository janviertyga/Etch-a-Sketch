const sketchContainer = document.getElementById("sketch");
let isDrawing = false;

sketchContainer.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

sketchContainer.addEventListener("mousemove", draw);

function draw(event) {
    if (!isDrawing) return;
    
    const sketch = event.target;
    const rect = sketch.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.left = `${x}px`;
    pixel.style.top = `${y}px`;

    sketch.appendChild(pixel);

    // Apply the highlight effect
    pixel.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

    // Remove the highlight effect after a short delay
    setTimeout(() => {
        pixel.style.backgroundColor = "transparent";
    }, 200);
}
