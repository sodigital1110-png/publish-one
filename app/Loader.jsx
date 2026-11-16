"use client";
import React, { useEffect, useState } from "react";
import "./loader.css";
import { INTRO_CLASS, INTRO_DONE_EVENT } from "./lib/intro";

export const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Lets page components tell a first load (content already painted) from a client-side navigation.
    window.__soHydrated = true;

    const root = document.documentElement;
    // The inline script in layout.jsx decides before first paint whether the intro plays
    // (first visit, motion allowed). If it doesn't, the overlay was never visible.
    if (!root.classList.contains(INTRO_CLASS)) {
      setShow(false);
      return;
    }

    try {
      localStorage.setItem("so-digital-loaded", "true");
    } catch (e) {}

    const LOGO_DATA_URL = "/images/loader-logo.webp";
    const GRID_COLS = 8, GRID_ROWS = 8;
    const BUILD_START = 0.1;
    const BUILD_STAGGER = 0.008;
    const DISSOLVE_START = 1.3;
    const DISSOLVE_STAGGER = 0.005;
    const TOTAL_DURATION = 1800;
    const FADE_OUT = 500;

    const finish = () => {
      root.classList.remove(INTRO_CLASS);
      window.dispatchEvent(new Event(INTRO_DONE_EVENT));
    };

    const grid = document.getElementById('pixelGrid');
    if (!grid) {
      finish();
      setShow(false);
      return;
    }

    grid.style.setProperty('--logo-url', `url(${LOGO_DATA_URL})`);
    grid.style.gridTemplateColumns = `repeat(${GRID_COLS}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${GRID_ROWS}, 1fr)`;

    const total = GRID_COLS * GRID_ROWS;
    const order = [];
    for (let i = 0; i < total; i++) order.push(i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = order[i]; order[i] = order[j]; order[j] = t;
    }
    const outOrder = [...order].sort(() => Math.random() - 0.5);

    const tiles = [];
    for (let idx = 0; idx < total; idx++) {
      const row = Math.floor(idx / GRID_COLS);
      const col = idx % GRID_COLS;
      const tile = document.createElement('div');
      tile.className = 'pixel';
      tile.style.backgroundPosition = `${col / (GRID_COLS - 1) * 100}% ${row / (GRID_ROWS - 1) * 100}%`;
      tile.style.setProperty('--grid-cols', `${GRID_COLS * 100}%`);
      tile.style.setProperty('--grid-rows', `${GRID_ROWS * 100}%`);

      const buildDelay = BUILD_START + order.indexOf(idx) * BUILD_STAGGER;
      tile.style.setProperty('--d', `${buildDelay}s`);

      // relative to the moment the "out" class is added
      const outDelay = outOrder.indexOf(idx) * DISSOLVE_STAGGER;
      tile.style.setProperty('--d-out', `${outDelay}s`);

      grid.appendChild(tile);
      tiles.push(tile);
    }

    const logoStage = document.getElementById('logoStage');
    if (logoStage) logoStage.classList.add('visible');

    const loaderInner = document.getElementById('loaderInner');
    const loaderRoot = document.getElementById('so-loader');

    const t1 = setTimeout(() => {
      tiles.forEach(t => t.classList.add('out'));
      if (loaderInner) loaderInner.classList.add('dissolve');
    }, DISSOLVE_START * 1000);

    let t3;
    const t2 = setTimeout(() => {
      if (loaderRoot) loaderRoot.classList.add('hide');
      // start the page's reveal while the overlay fades, so the two blend
      finish();
      t3 = setTimeout(() => setShow(false), FADE_OUT);
    }, TOTAL_DURATION);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!show) return null;

  return (
    <div id="so-loader" aria-hidden="true">
      <div className="glow glow-pulse"></div>
      <div className="wash"></div>
      <div className="loader-inner" id="loaderInner">
        <div className="logo-stage" id="logoStage">
          <div className="pixel-grid" id="pixelGrid"></div>
        </div>
        <div className="wordmark">SO Digital</div>
      </div>
    </div>
  );
};
