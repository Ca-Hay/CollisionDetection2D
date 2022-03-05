var canvas = document.querySelector('canvas'
)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight /2
}

//Events
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})
//Animation Loop 
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = '#1A1A23'
    c.fillRect(0, 0, canvas.width, canvas.height)

    
    //need a condition in the animate loop
    if(mouse.x + 100 >= canvas.width / 2 - 50 &&
       mouse.x <= canvas.width / 2 - 50 + 100 &&
       mouse.y + 100 >= canvas.height / 2 - 50 &&
       mouse.y <= canvas.height / 2 - 50 + 100
       ){
           console.log("i am colliding")
           
    }

    //redrect
    c.fillStyle = '#E86262'
    c.fillRect(mouse.x, mouse.y, 100, 100)

    //bloorect
    c.fillStyle = '#92ABEA'
    c.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100)
}

animate()

