import React, { useEffect } from 'react';
import '../styles.scss';

function CircleCanvas() {
    useEffect(() => {
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

        for (let i = 0; i < 50; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            context.beginPath();
            context.arc(x, y, 10, 0, Math.PI * 2, false);
            context.strokeStyle = "blue"
            context.stroke()
        }
      });
  return (
    <div className="wrapper">
        <canvas id="circleCanvas"></canvas>
    </div>
  );
}

export default CircleCanvas;
