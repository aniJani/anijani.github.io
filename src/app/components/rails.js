"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TRACKS = [
  { id: "222", title: "222", src: "/audio/222.mp3", side: "l" },
  { id: "2st", title: "2st", src: "/audio/2st.mp3", side: "r" },
];

const clock = (s) =>
  Number.isFinite(s)
    ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`
    : "—:——";

export default function Rails() {
  const [active, setActive] = useState(null);
  const [state, setState] = useState({});
  const audio = useRef({});

  const patch = useCallback(
    (id, next) => setState((s) => ({ ...s, [id]: { ...s[id], ...next } })),
    []
  );

  const toggle = useCallback(
    (id) => {
      const el = audio.current[id];
      if (!el) return;

      if (active === id && !el.paused) {
        el.pause();
        setActive(null);
        return;
      }

      // only one track at a time — rewind the other so it restarts cleanly
      for (const [key, other] of Object.entries(audio.current)) {
        if (key !== id && other && !other.paused) {
          other.pause();
          other.currentTime = 0;
        }
      }

      patch(id, { status: "loading", error: false });
      el.play()
        .then(() => {
          setActive(id);
          patch(id, { status: "playing" });
        })
        .catch(() => {
          setActive(null);
          patch(id, { status: "idle", error: true });
        });
    },
    [active, patch]
  );

  // pause everything if the tab goes away — nothing worse than hidden audio
  useEffect(() => {
    const onHide = () => {
      if (document.hidden) {
        Object.values(audio.current).forEach((a) => a && a.pause());
        setActive(null);
      }
    };
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, []);

  return (
    <section className="sound" id="sound" aria-label="Music">
      <h2 className="sound__label">Music</h2>
      <p className="sound__note">Two tracks I wrote and produced.</p>

      {TRACKS.map((t) => {
        const s = state[t.id] || {};
        const pct = s.duration ? (s.time / s.duration) * 100 : 0;
        const isPlaying = active === t.id && s.status === "playing";

        return (
          <div className={`rail rail--${t.side}`} key={t.id}>
            <p className="rail__by">Janit &mdash; {t.title}</p>
            <button
              type="button"
              className="rail__btn"
              onClick={() => toggle(t.id)}
              aria-pressed={isPlaying}
              aria-label={`${isPlaying ? "Pause" : "Play"} ${t.title}`}
              data-status={s.error ? "error" : s.status || "idle"}
            >
              {s.error ? "!" : s.status === "loading" ? "···" : isPlaying ? "❚❚" : "▶"}
            </button>

            <div
              className="rail__bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pct)}
              aria-label={`${t.title} progress`}
            >
              <span className="rail__fill" style={{ "--pct": `${pct}%` }} />
            </div>

            <p className="rail__time">{clock(s.time || 0)}</p>

            <audio
              ref={(el) => {
                audio.current[t.id] = el;
              }}
              src={t.src}
              preload="none"
              onLoadedMetadata={(e) => patch(t.id, { duration: e.target.duration })}
              onTimeUpdate={(e) => patch(t.id, { time: e.target.currentTime })}
              onEnded={() => {
                setActive(null);
                patch(t.id, { status: "idle", time: 0 });
              }}
              onError={() => patch(t.id, { status: "idle", error: true })}
            />
          </div>
        );
      })}
    </section>
  );
}
