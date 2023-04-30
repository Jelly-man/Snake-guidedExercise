let inputDirection = { x:0, y:0 };
let lastInputDirection = { x:0, y:0 };

window.addEventListener("keydown", e => {
    switch (e.key) {
// event listner added to the window and listning for keypresses with aswitch statement based on the event.key (what key is pressed). 
        case 'ArrowUp' :
            if (lastInputDirection.y !== 0) break
            inputDirection = { x:0, y:-1 }
            break
// Each switch statement checks that the direction is not on the appropriate axis and then sets direction based on arrow pressed.
        case 'ArrowDown' :
            if (lastInputDirection.y !== 0) break
            inputDirection = { x:0, y:1 }
            break
        case 'ArrowLeft' :
            if (lastInputDirection.x !== 0) break
            inputDirection = { x:-1, y:0 }
            break
        case 'ArrowRight' :
            if (lastInputDirection.x !== 0) break
            inputDirection = { x:1, y:0 }
            break
    }
})




export function getInputDirection () {
    lastInputDirection = inputDirection
    return inputDirection
}