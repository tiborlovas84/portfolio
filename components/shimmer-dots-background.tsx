"use client";

import { useEffect, useRef } from "react";

type ShimmerDotsBackgroundProps = {
  className?: string;
  spacing?: number;
  radius?: number;
  intensity?: number;
};

type Dot = {
  x: number;
  y: number;
  energy: number;
};

export function ShimmerDotsBackground({
  className = "",
  spacing = 20,
  radius = 150,
  intensity = 1,
}: ShimmerDotsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -9999, y: -9999, lastMove: 0 };
    let animationFrame = 0;
    let dots: Dot[] = [];
    let width = 0;
    let height = 0;

    const buildDots = () => {
      const nextDots: Dot[] = [];
      const offset = spacing / 2;

      for (let y = offset; y < height + spacing; y += spacing) {
        for (let x = offset; x < width + spacing; x += spacing) {
          nextDots.push({ x, y, energy: 0 });
        }
      }

      dots = nextDots;
    };

    const resize = () => {
      const bounds = canvas.parentElement?.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds?.width ?? window.innerWidth;
      height = bounds?.height ?? window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      buildDots();
    };

    const render = (time: number) => {
      context.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const distance = Math.hypot(dot.x - pointer.x, dot.y - pointer.y);
        const proximity = Math.max(0, 1 - distance / radius);
        const target = time - pointer.lastMove < 520 && !reducedMotion.matches
          ? proximity * proximity * (3 - 2 * proximity) * intensity
          : 0;

        dot.energy += (target - dot.energy) * (target > dot.energy ? 0.14 : 0.065);

        if (dot.energy < 0.01) continue;

        context.beginPath();
        context.fillStyle = `rgba(98, 0, 255, ${dot.energy * 0.4})`;
        context.arc(dot.x, dot.y, 1 + dot.energy * 1.5, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.lastMove = performance.now();
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      pointer.lastMove = 0;
    };

    const resizeObserver = new ResizeObserver(resize);

    resize();
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [intensity, radius, spacing]);

  return <canvas aria-hidden="true" className={className} ref={canvasRef} />;
}
