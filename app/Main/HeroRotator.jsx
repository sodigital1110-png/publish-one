"use client";
import { useEffect, useRef, useState } from "react";

// "Where ___ Meets ___": "Where" and "Meets" stay put while the pairs rotate.
// Each pair speaks to what SO Digital does or why clients trust it.
// The first pair is server-rendered, so crawlers and no-JS visitors see one clean headline.
// Every slot reserves the width of its longest word (invisible ::before sizers, which add no text to the page),
// so rotating words never move the rest of the headline or push the page down (no layout shift).
export const HERO_PAIRS = [
  ["Strategy", "Stunning Design"],
  ["Innovation", "Creativity"],
  ["Vision", "Results"],
  ["Creativity", "Conversions"],
  ["Design", "Performance"],
  ["Ideas", "Real Growth"],
  ["Passion", "Precision"],
  ["Trust", "Honest Pricing"],
];

const HOLD_MS = 2800;
const OUT_MS = 550;

function Slot({ words, index, prev, delay = 0 }) {
  return (
    <span className="so-rot" style={{ "--rot-delay": `${delay}ms` }}>
      {words.map((w) => (
        <span key={`s-${w}`} className="so-rot-sizer" data-w={w} aria-hidden="true" />
      ))}
      {prev !== null && prev !== index && (
        <span key={`out-${prev}`} className="so-rot-word so-rot-out" aria-hidden="true">
          {words[prev]}
        </span>
      )}
      <span key={`in-${index}`} className={`so-rot-word${prev !== null ? " so-rot-in" : ""}`}>
        {words[index]}
      </span>
    </span>
  );
}

export function HeroRotator({ start = true }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const current = useRef(0);

  useEffect(() => {
    if (!start) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let clear;
    const tick = () => {
      if (document.hidden) return;
      const was = current.current;
      current.current = (was + 1) % HERO_PAIRS.length;
      setPrev(was);
      setIndex(current.current);
      clearTimeout(clear);
      clear = setTimeout(() => setPrev(null), OUT_MS + 150);
    };
    const id = setInterval(tick, HOLD_MS);
    return () => {
      clearInterval(id);
      clearTimeout(clear);
    };
  }, [start]);

  const xs = HERO_PAIRS.map((p) => p[0]);
  const ys = HERO_PAIRS.map((p) => p[1]);
  return (
    <>
      Where <Slot words={xs} index={index} prev={prev} /> <br />
      Meets <Slot words={ys} index={index} prev={prev} delay={90} />
    </>
  );
}
