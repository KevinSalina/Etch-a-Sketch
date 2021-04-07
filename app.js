// DOM Elements
const mainGrid = document.querySelector('.main-grid');
const inputs = document.querySelectorAll('input')
let gridElements = mainGrid.querySelectorAll('.gridDiv')

// Set Initial Grid
document.addEventListener("DOMContentLoaded", function(){
    // Creating individual div elements for Main Grid, and selecting in DOM
    createGridElements()
    mouseOver()
})

// Function Create Grid Elements
function createGridElements(gridSize){
    gridSize = gridSize || 400
    for(let i = 1; i <= gridSize; i++){
        let gridDiv = document.createElement('div')
        gridDiv.setAttribute('class', `gridDiv`)
        mainGrid.append(gridDiv)
        gridElements = mainGrid.querySelectorAll('.gridDiv')
    }
}

// MouseOver Event Listener for gridElements
// MouseOver Main Fucntion
function mouseOver(){
    gridElements.forEach(gridElement =>{
        gridElement.addEventListener('mouseover', blackMouseOver)
    })
}

// Main Event Listener
mouseOver()

// Black Mouse Over Function
function blackMouseOver(){
    this.classList.add('black')
}


// Update Grid Functions
function updateGrid(grid){
    resetGrid()
    let gridSize = grid.value ** 2 || 400
    createGridElements(gridSize)
    gridElements = mainGrid.querySelectorAll('.gridDiv')
    mouseOver()
}

function resetGrid(){
    for (let i = 0; i < gridElements.length; i++){
        mainGrid.removeChild(gridElements[i])
    }
}

// Handle CSS Variable Updates
function updateInputs(){
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
    updateGrid(this)
}

inputs.forEach(input =>{
    input.addEventListener('change', updateInputs)
});



