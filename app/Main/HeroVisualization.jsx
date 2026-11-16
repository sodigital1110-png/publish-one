"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Search, PenTool, Code, Clapperboard,
  Target, Megaphone, TrendingUp,
} from "lucide-react";

/* ────────────────────────────────────────────────────
   SERVICE NODES  (all 7 on the outermost orbit ring)
──────────────────────────────────────────────────── */
const NODES = [
  {
    id: "seo",   label: "SEO",
    desc: "Rank higher on Google with data-driven SEO strategies.",
    Icon: Search, color: "#38bdf8",
  },
  {
    id: "uiux",  label: "UI/UX Design",
    desc: "Stunning interfaces that delight users and drive conversions.",
    Icon: PenTool, color: "#a78bfa",
  },
  {
    id: "dev",   label: "Development",
    desc: "Blazing-fast, SEO-optimised web apps built to scale.",
    Icon: Code, color: "#818cf8",
  },
  {
    id: "video", label: "Video Production",
    desc: "Cinematic brand videos and reels that stop the scroll.",
    Icon: Clapperboard, color: "#fb923c",
  },
  {
    id: "meta",  label: "Meta Ads",
    desc: "Data-driven Meta campaigns that maximise every rupee.",
    Icon: Megaphone, color: "#c084fc",
  },
  {
    id: "brand", label: "Brand Strategy",
    desc: "Timeless identity systems that make you unforgettable.",
    Icon: Target, color: "#f59e0b",
  },
  {
    id: "leads", label: "Lead Generation",
    desc: "Meta and Google campaigns that bring qualified enquiries.",
    Icon: TrendingUp, color: "#34d399",
  },
];

const N            = NODES.length;
const ORBIT_RADIUS = 295;    // outer ring 620px → radius 310px, keep nodes tightly inside
const ORBIT_MS     = 40000;  // 40-second full revolution

/* ────────────────────────────────────────────────────
   COMPONENT
──────────────────────────────────────────────────── */
export const HeroVisualization = () => {
  const wrapRef     = useRef(null);
  const logoInner   = useRef(null);   // receives mouse-tilt via JS
  const nodeRefs    = useRef([]);
  const angleRef    = useRef(0);
  const rafRef      = useRef(null);
  const lastTRef    = useRef(null);
  const pausedRef   = useRef(false);

  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [tooltip,    setTooltip]    = useState(null);

  /* ── rAF orbit loop ───────────────────────────────────────────── */
  useEffect(() => {
    const place = () => {
      for (let i = 0; i < N; i++) {
        const el = nodeRefs.current[i];
        if (!el) continue;
        const deg = (i / N) * 360 + angleRef.current;
        const rad = (deg * Math.PI) / 180;
        const x   = Math.sin(rad) * ORBIT_RADIUS;
        const y   = -Math.cos(rad) * ORBIT_RADIUS;
        el.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    // Respect "reduce motion": lay the nodes out once and don't spin.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      place();
      return;
    }

    const tick = (t) => {
      if (lastTRef.current !== null && !pausedRef.current) {
        const dt = t - lastTRef.current;
        angleRef.current = (angleRef.current + (dt / ORBIT_MS) * 360) % 360;
      }
      lastTRef.current = t;
      place();
      rafRef.current = requestAnimationFrame(tick);
    };

    // Only spin while the hero is on screen; saves CPU and battery once the visitor scrolls on.
    const start = () => {
      if (rafRef.current) return;
      lastTRef.current = null;
      rafRef.current = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
    place();
    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    if (wrapRef.current) observer.observe(wrapRef.current);
    else start();

    return () => {
      observer.disconnect();
      stop();
    };
  }, []);

  /* ── logo 3-D tilt (max 4°) ───────────────────────────────────── */
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onMove = (e) => {
      const r  = wrap.getBoundingClientRect();
      const nx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2);
      const ny = (e.clientY - r.top   - r.height / 2) / (r.height / 2);
      if (logoInner.current) {
        logoInner.current.style.transform =
          `perspective(700px) rotateX(${(-ny * 4).toFixed(2)}deg) rotateY(${(nx * 4).toFixed(2)}deg)`;
      }
    };
    const onLeave = () => {
      if (logoInner.current) logoInner.current.style.transform = "";
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* ── hover handlers ───────────────────────────────────────────── */
  const onEnter = useCallback((i) => {
    pausedRef.current = true;
    setHoveredIdx(i);

    // Compute node position at current orbit angle
    const deg  = (i / N) * 360 + angleRef.current;
    const rad  = (deg * Math.PI) / 180;
    // +320 = half of 640px container
    const nx   = Math.sin(rad) * ORBIT_RADIUS + 320;
    const ny   = -Math.cos(rad) * ORBIT_RADIUS + 320;
    const side = nx > 320 ? "right" : "left";
    setTooltip({ node: NODES[i], x: nx, y: ny, side });
  }, []);

  const onLeave = useCallback(() => {
    pausedRef.current = false;
    setHoveredIdx(null);
    setTooltip(null);
  }, []);

  /* ── render ───────────────────────────────────────────────────── */
  return (
    <div className="hv-wrap" ref={wrapRef}>

      {/* Ambient glows */}
      <div className="hv-glow hv-glow-purple" />
      <div className="hv-glow hv-glow-cyan"   />
      <div className="hv-glow hv-glow-orange" />

      {/* Faint grid */}
      <div className="hv-grid" />

      {/* Static orbit rings */}
      <div className="hv-ring hv-ring-1" />
      <div className="hv-ring hv-ring-2" />
      <div className="hv-ring hv-ring-3" />

      {/* Traveling particles (CSS-only) */}
      <div className="hv-pw hv-pw-r1a" />
      <div className="hv-pw hv-pw-r1b" />
      <div className="hv-pw hv-pw-r2a" />
      <div className="hv-pw hv-pw-r3a" />
      <div className="hv-pw hv-pw-r3b" />

      {/* Center logo */}
      <div className="hv-center">
        <div className="hv-center-glow" />
        <div className="hv-center-floater">
          <div className="hv-center-logo" ref={logoInner}>
            <div className="hv-shimmer" />
            <img src="/images/so-mark.webp" alt="SO Digital logo" className="hv-favicon" width={300} height={300} fetchPriority="high" />
          </div>
        </div>
      </div>

      {/* Orbiting service nodes */}
      {NODES.map((node, i) => (
        <div
          key={node.id}
          ref={el => { nodeRefs.current[i] = el; }}
          className="hv-node-anchor"
          onMouseEnter={() => onEnter(i)}
          onMouseLeave={onLeave}
        >
          <div
            className={`hv-node${hoveredIdx === i ? " hv-node--on" : ""}`}
            style={{ "--c": node.color }}
          >
            <div className="hv-node-glass" />
            <node.Icon size={20} strokeWidth={1.5} color="white" />
          </div>
        </div>
      ))}

      {/* Glass tooltip */}
      {tooltip && (
        <div
          className={`hv-tip hv-tip--${tooltip.side}`}
          style={{
            top:  tooltip.y,
            left: tooltip.side === "right"
              ? tooltip.x + 42
              : tooltip.x - 42,
          }}
        >
          <div className="hv-tip-icon" style={{ color: tooltip.node.color }}>
            <tooltip.node.Icon size={15} strokeWidth={1.5} />
          </div>
          <div className="hv-tip-body">
            <strong className="hv-tip-name">{tooltip.node.label}</strong>
            <span   className="hv-tip-desc">{tooltip.node.desc}</span>
          </div>
        </div>
      )}

    </div>
  );
};
