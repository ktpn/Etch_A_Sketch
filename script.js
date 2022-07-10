let color = "black"     // Set global color so easy to manipulate
let click = true;

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);      //hover/mouse over effect with colorSquare function
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
    }   
}

populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector(".error").style.display = "none";
        populateBoard(input);
    } else {
        document.querySelector(".error").style.display = "flex";
    }
    
}
// Allows to change color when hover
function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;      // This random color code
    
        } else {
            this.style.backgroundColor = color;
        }
    }
    

}

function changeColor(choice) {
    color = choice;
}

// Reset function code taken from board function above but instead of removing div make white
function resetBoard() {         
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor="white");
}
document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
        document.querySelector(".mode").textContent = "Mode: Coloring";
        } else {
        document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
    }
});

const userColorPicker = document.querySelector("#input-color");
function userColorSelection(event) {
    color = event.target.value;
}