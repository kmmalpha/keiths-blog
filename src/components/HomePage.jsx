import React, { useEffect, useRef } from 'react';

const HomePage = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let t = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        };

        const draw = () => {
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = 'hsla(0, 0%, 0%, .1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            let foo, i, r;
            foo = Math.sin(t) * 2 * Math.PI;
            for (i = 0; i < 400; ++i) {
                r = 400 * Math.sin(i * foo);
                ctx.globalCompositeOperation = '';
                ctx.fillStyle = 'hsla(' + (i + 12) + ',100%, 60%,1)';
                ctx.beginPath();
                ctx.arc(
                    Math.sin(i) * r + (canvas.width / 2),
                    Math.cos(i) * r + (canvas.height / 2),
                    1.5,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
            t += 0.000005;
            t %= 2 * Math.PI;
        };

        const run = () => {
            draw();
            window.requestAnimationFrame(run);
        };

        window.addEventListener('resize', resizeCanvas, false);
        resizeCanvas();
        run();

        return () => {
            window.removeEventListener('resize', resizeCanvas, false);
        };
    }, []);

    return <canvas ref={canvasRef} />
}

export default HomePage;