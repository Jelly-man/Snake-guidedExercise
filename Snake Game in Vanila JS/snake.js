import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5
// export identifies variables and functions that can be shared between JS files.
const snakeBody = [
    {x: 11, y: 11}
]
let newSegments = 0
// array which will contain co-ordinates of the snakes location on the grid. 


// The below function is designed to move the body parts into the posiiton of the element in front. 
export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i --) {
        // loops through all elements of the snake body except for the last. snakeBody.length - 2 = second from last element in the snakeBody.
        snakeBody[i + 1] = { ...snakeBody[i] } 
        // snakeBody[i + 1]selects the last element of the snakeBody and sets it to the second from last element. {...snakeBody[i]} = creates a new object with the last element moved to the position of the second from last element. 
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    // updates snakehead location on y and x. 
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}


// checks if food and snake share the same position using .some Method which runs the equalPosition function for all parts of the snake. 
export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position)
    })
}

export function getSnakeHead () {
    return snakeBody[0];
}

export function snakeIntersection () {
    return onSnake(snakeBody[0], { ignoreHead : true})
}

// checks if the food and snake share the same position and if so would return true back to the onSnake function. 
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments () {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1]})
        // appends a extra snake piece to the end of the snake. 
    }

    newSegments = 0;
}