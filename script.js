const canvas = document.getElementById('circleCanvas');

//set canvas' width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

//draw rectangle (x, y, w, h)
// context.fillStyle = "green";
// context.fillRect(100, 100, 20, 20);
// context.fillStyle = "yellow";
// context.fillRect(200, 200, 100, 100);


//draw line (x. y)
// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.strokeStyle = "salmon";
// context.stroke();

//draw arc / circle (x, y, r, start angle, end angle, clockwise)
// context.beginPath();
// context.arc(300, 300, 25, 0, Math.PI * 2, false);
// context.strokeStyle = "blue"
// context.stroke()

// for (let i = 0; i < 50; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     context.beginPath();
//     context.arc(x, y, 10, 0, Math.PI * 2, false);
//     context.strokeStyle = "black"
//     context.stroke()
// }

//function to draw and move circle
function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'black';
        context.stroke();
        context.fill();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

let Circles = []
for (let i = 0; i < 50; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    const radius = 10
    Circles.push(new Circle(x, y, radius, dx, dy))
}

for (let i = 0; i < 50; i++) {
    Circles[i].update();
}

// let x = Math.random() * window.innerWidth;
// let y = Math.random() * window.innerHeight;
// let dx = 2;
// let dy = 2;
// const radius = 10

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < Circles.length; i++) {
        Circles[i].update();
    }
    // context.clearRect(0, 0, innerWidth, innerHeight);
    // context.beginPath();
    // context.arc(x, y, radius, 0, Math.PI * 2, false);
    // context.strokeStyle = 'purple';
    // context.stroke();

    // if (x + radius > innerWidth || x - radius < 0) {
    //     dx = -dx;
    // }
    // if (y + radius > innerHeight || y - radius < 0) {
    //     dy = -dy;
    // }
    // x += dx;
    // y += dy;
}

animate();