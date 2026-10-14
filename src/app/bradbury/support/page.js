import s from "../bradbury.module.css";

export const metadata = {
  title: "Bradbury — Support",
  description: "One painting and three readings a day. Help and contact.",
};

export default function Support() {
  return (
    <main className={s.page}>
      <div className={s.inner}>
        <p className={s.mark}>bb</p>

        <hr className={s.rule} />
        <p className={s.label}>Bradbury</p>
        <h1 className={s.title}>One painting and three readings a day.</h1>

        <p className={s.body}>
          A poem, an essay and a short story, chosen to be read in a sitting. The reading time is
          shown before you start. Everything comes from the public domain &mdash; the Metropolitan
          Museum of Art, Wikisource, Project Gutenberg and Standard Ebooks.
        </p>

        <h2 className={s.h2}>The day changes at midnight</h2>
        <p className={s.body}>
          A new painting and three new readings arrive each day, by your device&rsquo;s own clock.
          There is no way to read ahead, and yesterday stays in the archive.
        </p>

        <h2 className={s.h2}>The widget</h2>
        <p className={s.body}>
          Press and hold your Home Screen, choose Edit, then Add Widget, and find Bradbury. It
          shows the day&rsquo;s painting and changes overnight on its own.
        </p>

        <h2 className={s.h2}>Reading without a connection</h2>
        <p className={s.body}>
          What you have already opened stays available offline. The widget fetches
          tomorrow&rsquo;s painting ahead of time, so it turns over at midnight even without
          signal.
        </p>

        <h2 className={s.h2}>Listening</h2>
        <p className={s.body}>
          Tap the headphones in a reading to have it read aloud. It keeps going with the screen
          locked. For a better voice, download one in Settings &rsaquo; Accessibility &rsaquo;
          Spoken Content.
        </p>

        <h2 className={s.h2}>Sharing</h2>
        <p className={s.body}>
          Highlight a passage and choose Share as Card, or share the painting or your thought on a
          reading. Save the card to Photos, copy the text, or send it.
        </p>

        <h2 className={s.h2}>Your highlights and notes</h2>
        <p className={s.body}>
          They are kept on your device and, if you are signed in to iCloud, in your own iCloud
          account, so they follow you to another iPhone. Deleting the app on one phone leaves the
          iCloud copy. To remove them everywhere, delete Bradbury&rsquo;s data under iCloud
          storage in Settings.
        </p>

        <h2 className={s.h2}>Something wrong?</h2>
        <p className={s.body}>
          A text that reads oddly, a painting that will not load, anything else &mdash; write, and
          say which day it was. That is usually enough to find it.
        </p>

        <div className={s.foot}>
          <p>
            <a href="mailto:rajkarnikarjanit22@gmail.com">rajkarnikarjanit22@gmail.com</a>
          </p>
          <p>
            <a href="/bradbury/privacy">Privacy</a> &middot; <a href="/">anijani.github.io</a>
          </p>
        </div>
      </div>
    </main>
  );
}
