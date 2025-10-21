import { useEffect, useRef } from 'react';

/**
 * MatrixRain - Matrix-style Digital Rain Effect
 * Creates falling characters like the iconic Matrix movie effect
 */
const MatrixRain = ({
  characters = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  fontSize = 16,
  speed = 1,
  color = '#0F0',
  trailLength = 20,
  density = 0.95,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 255, b: 0 };
    };

    const rgb = hexToRgb(color);

    const draw = () => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = `rgba(0, 0, 0, ${1 / trailLength})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Gradient effect for each character
        const y = drops[i] * fontSize;
        const gradient = ctx.createLinearGradient(0, y - fontSize * 5, 0, y);
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`);
        gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`);

        ctx.fillStyle = gradient;
        ctx.fillText(char, i * fontSize, y);

        // Bright head
        ctx.fillStyle = `rgba(${Math.min(rgb.r + 100, 255)}, ${Math.min(rgb.g + 100, 255)}, ${Math.min(rgb.g + 100, 255)}, 1)`;
        ctx.fillText(char, i * fontSize, y);

        // Reset drop randomly
        if (y > canvas.height && Math.random() > density) {
          drops[i] = 0;
        }

        drops[i] += speed;
      }
    };

    const animate = () => {
      draw();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initial black background
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [characters, fontSize, speed, color, trailLength, density]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};

export default MatrixRain;
