const sketchContainer = document.getElementById("sketch");
const clearButton = document.getElementById("clear");
const colorPicker = document.getElementById("colorPicker");

let isDrawing = false;

sketchContainer.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

sketchContainer.addEventListener("mousemove", draw);

clearButton.addEventListener("click", clearSketch);

function draw(event) {
    if (!isDrawing) return;
    
    const sketch = event.target;
    const pixel = event.target;

    // Apply the highlight animation
    pixel.classList.add("highlight");

    // Remove the highlight class after the animation completes
    pixel.addEventListener("animationend", () => {
        pixel.classList.remove("highlight");
    });

    if (event.target !== sketch) return;
    pixel.style.backgroundColor = colorPicker.value;
}

function clearSketch() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.style.backgroundColor = "transparent");
}
