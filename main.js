
const highlightTexts = [
    "weeknight dinner idea",
    "home decor idea",
    "new look outfit",
    "green thumb idea"
];

const accentColors = [
  "#ffa500",  // orange
  "#28a745",  // green
  "#007bff",  // blue
  "#28a745"   // green again
];

const dots = document.querySelectorAll('.dot');
const highlight = document.querySelector('.highlight-text');
const grids = document.querySelectorAll('.image-grid');

let currentIndex = 0;

function updateContent(index) {
    // Update highlight text
    highlight.textContent = highlightTexts[index];

    // Toggle grids
    grids.forEach((grid, i) => {
        grid.classList.toggle('active', i === index);
    });

    // Toggle dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentIndex = index;

    document
    .querySelector('.inspiration')
    .style.setProperty('--accent', accentColors[index]);
}

// Dot click handler
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateContent(index);
    });
});

// Optional: Auto-rotate every 4 seconds
setInterval(() => {
    let nextIndex = (currentIndex + 1) % highlightTexts.length;
    updateContent(nextIndex);
}, 4000);
