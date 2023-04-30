import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
// import allows for the exchange of function and variable between JS files. 

import {update as updateFood, draw as drawFood} from "./food.js"

import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById("game-board");



function main(currentTime) {
    if (gameOver ){
        if(confirm('you lost. Press ok to restart')) {
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
     // requestAnimationFrame asks for the time at which the screen refreshes - used to know when to rerun a animation code based of the refresh of the computer/hardware.
    // he method in a nutshell allows you to execute code on the next available screen repaint, taking the guess work out of getting in sync with the user's browser and hardware readiness to make changes to the screen.
    
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    // above takes the time between last and current render / 1000 to give the time is fractions of a second. 

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    // above if statement checks if difference in time is less than 1 second divide snake speed. a number of 1 is once per a second and so on. 
   
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkForDeath()
}

function draw () {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}