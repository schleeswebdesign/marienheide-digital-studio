import { useRef, useEffect, useCallback } from "react";

interface Hex {
  cx: number;
  cy: number;
  ox: number;
  oy: number;
}

interface HexagonCanvasProps {
  opacity?: number;
  interactive?: boolean;
}

const HexagonCanvas = ({ opacity = 0.15, interactive = true }: HexagonCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const hexes = useRef<Hex[]>([]);
  const raf = useRef<number>(0);
  const size = 40;
  const influence = 120;
  const strength = 12;

  const buildGrid = useCallback((w: number, h: number) => {
    const grid: Hex[] = [];
    const hSpacing = size * 1.75;
    const vSpacing = size * 1.5;
    const cols = Math.ceil(w / hSpacing) + 2;
    const rows = Math.ceil(h / vSpacing) + 2;
    for (let r = -1; r < rows; r++) {
      for (let c = -1; c < cols; c++) {
        const offset = r % 2 === 0 ? 0 : hSpacing / 2;
        const cx = c * hSpacing + offset;
        const cy = r * vSpacing;
        grid.push({ cx, cy, ox: cx, oy: cy });
      }
    }
    return grid;
  }, []);

  const drawHex = useCallback((ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = parent.offsetWidth + "px";
      canvas.style.height = parent.offsetHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      hexes.current = buildGrid(parent.offsetWidth, parent.offsetHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(125,211,252,0.15)";
      ctx.lineWidth = 0.8;

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const hex of hexes.current) {
        const dx = hex.ox - mx;
        const dy = hex.oy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < influence && dist > 0) {
          const force = (1 - dist / influence) * strength;
          hex.cx += (hex.ox + (dx / dist) * force - hex.cx) * 0.15;
          hex.cy += (hex.oy + (dy / dist) * force - hex.cy) * 0.15;
        } else {
          hex.cx += (hex.ox - hex.cx) * 0.1;
          hex.cy += (hex.oy - hex.cy) * 0.1;
        }
        drawHex(ctx, hex.cx, hex.cy, size * 0.55);
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, [buildGrid, drawHex]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouse.current = { x: -1000, y: -1000 };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default HexagonCanvas;
