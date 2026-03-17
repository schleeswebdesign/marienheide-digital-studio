import { useRef, useEffect, useCallback } from "react";
import gitterImg from "@/assets/gitter.jpg";

interface HexagonCanvasProps {
  opacity?: number;
  interactive?: boolean;
}

const HexagonCanvas = ({ opacity = 0.35, interactive = true }: HexagonCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const raf = useRef<number>(0);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const tiles = useRef<{ sx: number; sy: number; dx: number; dy: number; ox: number; oy: number; w: number; h: number }[]>([]);
  const influence = 150;
  const strength = 18;
  const tileSize = 60;

  const buildGrid = useCallback((w: number, h: number, imgW: number, imgH: number) => {
    const grid: typeof tiles.current = [];
    const cols = Math.ceil(w / tileSize) + 1;
    const rows = Math.ceil(h / tileSize) + 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dx = c * tileSize;
        const dy = r * tileSize;
        const sx = (dx % imgW);
        const sy = (dy % imgH);
        grid.push({ sx, sy, dx, dy, ox: dx, oy: dy, w: tileSize, h: tileSize });
      }
    }
    return grid;
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = gitterImg;
    img.onload = () => {
      imgRef.current = img;
    };
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
      if (imgRef.current) {
        tiles.current = buildGrid(parent.offsetWidth, parent.offsetHeight, imgRef.current.naturalWidth, imgRef.current.naturalHeight);
      }
    };

    const checkImg = setInterval(() => {
      if (imgRef.current) {
        clearInterval(checkImg);
        resize();
      }
    }, 50);

    window.addEventListener("resize", resize);

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = opacity;

      const img = imgRef.current;
      if (!img) {
        raf.current = requestAnimationFrame(animate);
        return;
      }

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const tile of tiles.current) {
        const tcx = tile.ox + tileSize / 2;
        const tcy = tile.oy + tileSize / 2;
        const ddx = tcx - mx;
        const ddy = tcy - my;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy);

        let targetX = tile.ox;
        let targetY = tile.oy;

        if (dist < influence && dist > 0) {
          const force = (1 - dist / influence) * strength;
          targetX = tile.ox + (ddx / dist) * force;
          targetY = tile.oy + (ddy / dist) * force;
        }

        tile.dx += (targetX - tile.dx) * 0.12;
        tile.dy += (targetY - tile.dy) * 0.12;

        const sw = Math.min(tileSize, img.naturalWidth - tile.sx);
        const sh = Math.min(tileSize, img.naturalHeight - tile.sy);
        if (sw > 0 && sh > 0) {
          ctx.drawImage(img, tile.sx, tile.sy, sw, sh, tile.dx, tile.dy, tileSize, tileSize);
        }
      }

      ctx.globalAlpha = 1;
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      clearInterval(checkImg);
      window.removeEventListener("resize", resize);
    };
  }, [buildGrid, opacity]);

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
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default HexagonCanvas;
