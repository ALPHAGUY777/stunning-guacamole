// Beaver Animation: Randomly pops up every few seconds
const beaver = document.getElementById('beaver');
let popUpInterval;

function popUpBeaver() {
    // Show the beaver randomly within the hole
    beaver.style.display = 'block';
    beaver.style.left = `${Math.random() * 70}%`;

    setTimeout(() => {
        beaver.style.display = 'none';
    }, 1000);
}

function startBeaverPopUp() {
    popUpInterval = setInterval(popUpBeaver, 2000);
}

// Button Functionality
function joinNow() {
    alert("Welcome to $WHACK! Stay tuned for more!");
}

// Start Animation on Page Load
window.onload = startBeaverPopUp;
