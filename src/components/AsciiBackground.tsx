
import { useEffect, useRef } from "react";

const AsciiBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ASCII characters for animation
    const asciiChars = "·—+*#@%=";
    const particles: Array<{
      x: number;
      y: number;
      char: string;
      opacity: number;
      speed: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: asciiChars[Math.floor(Math.random() * asciiChars.length)],
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
        size: Math.random() * 12 + 8,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set font style
      ctx.font = "12px JetBrains Mono, monospace";
      ctx.fillStyle = "hsl(142, 76%, 36%)";

      particles.forEach((particle) => {
        // Update position
        particle.y -= particle.speed;
        
        // Reset particle when it goes off screen
        if (particle.y < -20) {
          particle.y = canvas.height + 20;
          particle.x = Math.random() * canvas.width;
          particle.char = asciiChars[Math.floor(Math.random() * asciiChars.length)];
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.font = `${particle.size}px JetBrains Mono, monospace`;
        ctx.fillText(particle.char, particle.x, particle.y);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20 z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default AsciiBackground;
