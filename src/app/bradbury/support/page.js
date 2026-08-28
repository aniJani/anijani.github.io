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
          Museum of Art, Wikisource and Standard Ebooks.
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
          What you have already opened stays available offline. Tomorrow&rsquo;s painting is fetched
          ahead of time while you have a connection, so a morning without signal still has a day
          in it.
        </p>

        <h2 className={s.h2}>Your highlights and notes</h2>
        <p className={s.body}>
          They live on your device only, and are never uploaded. Deleting the app deletes them,
          and there is no way to recover them afterwards.
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
