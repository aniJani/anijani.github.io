"use client";

import { profile } from "../site-data";

/* N9 · edge-aligned minimal — wordmark hard left, links hard right, nothing between */
export default function Navbar() {
  return (
    <header className="topbar" id="top">
      <p className="topbar__id">{profile.name}</p>
      <nav className="topbar__nav" aria-label="Primary">
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#papers">Papers</a>
        <a href="#info">Info</a>
        <a href={profile.cv} target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </nav>
    </header>
  );
}
