"use client";

import { profile } from "../site-data";

export default function CV() {
    return (
        <main className="wrap sec">
            <header className="sec__head">
                <p className="sec__label">Document</p>
                <h2 className="sec__title">Résumé</h2>
                <p className="sec__note">{profile.name}</p>
            </header>

            <div className="media" style={{ height: "min(80vh, 60rem)" }}>
                <iframe
                    src={profile.cv}
                    title={`${profile.name} résumé`}
                    style={{ width: "100%", height: "100%", border: 0 }}
                />
            </div>

            <div className="entry__links">
                <a className="tlink" href={profile.cv} download>
                    Download PDF<span aria-hidden="true">→</span>
                </a>
                <a className="tlink" href="/">
                    Back to work<span aria-hidden="true">→</span>
                </a>
            </div>
        </main>
    );
}
