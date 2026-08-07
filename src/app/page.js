"use client";

import { MotionConfig } from "framer-motion";
import Navbar from "./components/navbar";
import Rails from "./components/rails";
import { Card, Carousel } from "./components/ui/apple-cards-carousel";
import {
  experience,
  openSource,
  profile,
  projects,
  publications,
} from "./site-data";

const num = (i) => String(i + 1).padStart(3, "0");
const stackOf = (p) => p.stack.slice(0, 3).join(" / ");

function Media({ project }) {
  const { media, name } = project;

  if (media.type === "video") {
    return (
      <figure className="media media--video">
        <iframe
          src={media.src}
          title={`${name} demo`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </figure>
    );
  }

  if (media.type === "spec") {
    return (
      <dl className="spec">
        {media.facts.map(([k, v]) => (
          <div className="spec__row" key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <Carousel
      items={media.images.map((src, i) => (
        <Card
          key={src}
          index={i}
          card={{
            src,
            alt: `${name} screenshot ${i + 1} of ${media.images.length}`,
          }}
        />
      ))}
    />
  );
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />

      <main>
        <p className="lede">
          Software engineer. Web, mobile, backend, and lately a lot of LLM
          tooling.
        </p>

        {/* ---- Experience ---- */}
        <section className="sheet" id="experience">
          <div className="sheet__head">
            <h2 className="sheet__title">Experience</h2>
            <p className="sheet__count">{experience.length} entries</p>
          </div>

          <ol className="rows rows--plain">
            {experience.map((job) => (
              <li className="job" key={job.id}>
                <p className="job__period">{job.period}</p>
                <div className="job__body">
                  <h3 className="job__role">
                    {job.role} — {job.company}
                  </h3>
                  {job.points.map((pt) => (
                    <p className="job__point" key={pt}>
                      {pt}
                    </p>
                  ))}
                  <ul className="tags">
                    {job.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---- Work · Index-First · the table IS the page ---- */}
        <section className="sheet" id="work">
          <div className="sheet__head">
            <h2 className="sheet__title">Work</h2>
            <p className="sheet__count">{projects.length} entries</p>
          </div>

          <div className="cols" aria-hidden="true">
            <span>No.</span>
            <span>Project</span>
            <span>Stack</span>
            <span>Link</span>
            <span />
          </div>

          <ol className="rows">
            {projects.map((p, i) => (
              <li key={p.id} id={p.id}>
                {/* native disclosure — keyboard + screen-reader support for free */}
                <details className="row" open={i === 0}>
                  <summary className="row__summary">
                    <span className="row__num">{num(i)}</span>
                    <span className="row__name">{p.name}</span>
                    <span className="row__stack">{stackOf(p)}</span>
                    <span className="row__link">
                      {p.links[0] ? p.links[0].label : "—"}
                    </span>
                    <span className="row__toggle" aria-hidden="true" />
                  </summary>

                  <div className="row__body">
                    <div className="row__text">
                      <p>{p.blurb}</p>
                      <ul className="tags">
                        {p.stack.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                      {p.links.length > 0 && (
                        <p className="row__links">
                          {p.links.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {l.label} <span aria-hidden="true">↗</span>
                            </a>
                          ))}
                        </p>
                      )}
                    </div>
                    <div className="row__media">
                      <Media project={p} />
                    </div>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </section>


        {/* ---- Papers ---- */}
        <section className="sheet" id="papers">
          <div className="sheet__head">
            <h2 className="sheet__title">Papers</h2>
            <p className="sheet__count">{publications.length} entries</p>
          </div>

          <ol className="rows rows--plain">
            {publications.map((p) => (
              <li className="paper" key={p.id} id={p.id}>
                <p className="paper__meta">
                  {p.position} · {p.year}
                </p>
                <div className="paper__body">
                  <h3 className="paper__title">
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer">
                        {p.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="paper__line">{p.authors}</p>
                  <p className="paper__line">
                    {p.venue} · {p.detail}
                  </p>
                  <p className="paper__note">{p.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---- Open source ---- */}
        <section className="sheet" id="open-source">
          <div className="sheet__head">
            <h2 className="sheet__title">Open source</h2>
            <p className="sheet__count">1 entry</p>
          </div>

          <div className="oss">
            <h3 className="oss__title">
              {openSource.project} <span>{openSource.label}</span>
            </h3>
            <p className="oss__blurb">{openSource.blurb}</p>
            <p className="row__links">
              <a
                href={openSource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/scrapy/scrapy <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </section>

        {/* ---- Info ---- */}
        <section className="sheet" id="info">
          <div className="sheet__head">
            <h2 className="sheet__title">Info</h2>
          </div>

          <dl className="info">
            <div>
              <dt>Study</dt>
              <dd>
                {profile.education.degree}, {profile.education.school},{" "}
                {profile.education.year}. {profile.education.detail}.
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  github.com/aniJani
                </a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in/janitrajkarnikar
                </a>
              </dd>
            </div>
            <div>
              <dt>CV</dt>
              <dd>
                <a href={profile.cv} target="_blank" rel="noopener noreferrer">
                  Janit_Rajkarnikar_Resume.pdf
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </main>

      <Rails />

      {/* ---- Ft1 · mast-headed ---- */}
      <footer className="foot">
        <p className="foot__mark">{profile.name}</p>
      </footer>
    </MotionConfig>
  );
}
