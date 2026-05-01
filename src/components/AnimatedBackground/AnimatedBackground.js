import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const mouse = { x: window.innerWidth * 0.42, y: window.innerHeight * 0.52 };
    const current = { x: mouse.x, y: mouse.y };
    const LERP = 0.035;
    let animId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function draw() {
      const w = canvas.width;
      const h = canvas.height;

      current.x += (mouse.x - current.x) * LERP;
      current.y += (mouse.y - current.y) * LERP;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#111214";
      ctx.fillRect(0, 0, w, h);

      const radius = Math.max(w, h) * 0.55;
      const gradient = ctx.createRadialGradient(current.x, current.y, 0, current.x, current.y, radius);
      gradient.addColorStop(0.00, "rgba(14,  90, 160, 0.55)");
      gradient.addColorStop(0.35, "rgba(10,  60, 120, 0.30)");
      gradient.addColorStop(0.70, "rgba(5,   30,  70, 0.12)");
      gradient.addColorStop(1.00, "rgba(0,    0,   0, 0.00)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      animId = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        animation: "fadeIn 1.4s ease forwards",
      }}
    />
  );
}