// DOM Elements
const mainGrid = document.querySelector('.main-grid');
const rangeInput = document.querySelector('input[type=range]')
const penButtons = document.querySelectorAll('.pen')
const userColorInput = document.querySelector('.user-color')
let gridElements = mainGrid.querySelectorAll('.gridDiv')

let currentPenMode = 'black'
let currentUserColor = ''


// ---Main Game---
// Set Initial Grid
document.addEventListener("DOMContentLoaded", function(){
    createGridElements()
    sketch()
})

// Main Sketch Function
sketch(currentPenMode)


// ---Event Listeners---
//Listen for MouseOver - Lets user sketch
function sketch(){
    gridElements.forEach(gridElement =>{
        gridElement.addEventListener('mouseover', whichPenMode)
    })
}

// Listen for Pen Mode
penButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        if(button.classList.contains('black')){
            currentPenMode = 'black'
        } else if (button.classList.contains('colorful')){
            currentPenMode = 'colorful'
        } else if (button.classList.contains('user-color')){
            currentPenMode = 'user'
        }
        console.log(currentPenMode)
        sketch()
    })
})

// Change Selected User Color
userColorInput.addEventListener('change', newUserColor)

// Listen for Change of Grid Size
rangeInput.addEventListener('change', updateGridSize)

// ---Functions---
// -Grid Functions-
// Update Main Grid Function
function updateGrid(grid){
    resetGrid()
    let gridSize = grid.value ** 2 || 400
    createGridElements(gridSize)
    gridElements = mainGrid.querySelectorAll('.gridDiv')
    sketch(currentPenMode)
}

// Create Grid Elements
function createGridElements(gridSize){
    gridSize = gridSize || 400
    for(let i = 1; i <= gridSize; i++){
        let gridDiv = document.createElement('div')
        gridDiv.setAttribute('class', `gridDiv`)
        mainGrid.append(gridDiv)
        gridElements = mainGrid.querySelectorAll('.gridDiv')
    }
}

// Update Grid Size (CSS Variable)
function updateGridSize(){
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
    updateGrid(this)
}

// -Pen Functions-
// Determine Pen Mode Function to Use
function whichPenMode(){
    if (currentPenMode === 'black'){
        return blackPen(this)
    } else if (currentPenMode === 'colorful'){
        return colorfulPen(this)
    } else if (currentPenMode === 'user'){
        return userColorPen(this)
    }
}

// Change User Color
function newUserColor(){
    currentUserColor = this.value
}

// Black Mouse Over Function
function blackPen(div){
    div.style.background = 'black'
}

// Colorful Mover Over Function
function colorfulPen(div){
    const colorfulPallet = ['#5CC9FF','#E7FF99','#FFD857','#FF6B42','#FF0F4F']
    const randIndex = Math.floor(Math.random() * colorfulPallet.length)
    div.style.background = `${colorfulPallet[randIndex]}`
}

// User Input Color Mouse Over Function
function userColorPen(div){
    div.style.background = currentUserColor
}

// -Reset Function-
function resetGrid(){
    for (let i = 0; i < gridElements.length; i++){
        mainGrid.removeChild(gridElements[i])
    }
}