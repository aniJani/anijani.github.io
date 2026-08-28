import s from "../bradbury.module.css";

export const metadata = {
  title: "Bradbury — Privacy",
  description: "Bradbury collects nothing. Everything you do stays on your device.",
};

export default function Privacy() {
  return (
    <main className={s.page}>
      <div className={s.inner}>
        <p className={s.mark}>
          <a href="/bradbury/support">bb</a>
        </p>

        <hr className={s.rule} />
        <p className={s.label}>Bradbury</p>
        <h1 className={s.title}>Privacy</h1>

        <p className={s.body}>
          Bradbury collects nothing about you. There are no accounts, no analytics, no
          advertising, and no tracking of any kind. No third-party analytics or advertising
          code is present in the app.
        </p>

        <h2 className={s.h2}>What stays on your device</h2>
        <p className={s.body}>
          Everything you do in the app is written to your device&rsquo;s own storage and is never
          sent anywhere: the passages you highlight, the notes you write, which days you have
          read, your reading-size and appearance settings.
        </p>
        <p className={s.body}>
          Deleting the app deletes all of it. Nobody else can see it, including us.
        </p>

        <h2 className={s.h2}>What the app connects to</h2>
        <p className={s.body}>Bradbury contacts two places, and only ever reads from them:</p>
        <ul className={s.list}>
          <li>
            A content host, to download each day&rsquo;s painting and readings. The app sends
            nothing but the request itself.
          </li>
          <li>
            A dictionary service, <code>freedictionaryapi.com</code>, and only when you tap a word
            to look it up. It receives that single word. It is not told who asked, and the app
            sends nothing else.
          </li>
        </ul>
        <p className={s.body}>
          As with any request to any website, those servers may keep ordinary technical logs,
          which can include an IP address. Neither we nor the app use such logs to identify or
          follow anyone.
        </p>

        <h2 className={s.h2}>Children</h2>
        <p className={s.body}>
          Bradbury has no accounts, no messaging, no user content shared between people, and no
          advertising. It collects nothing from anyone, of any age.
        </p>

        <h2 className={s.h2}>Changes</h2>
        <p className={s.body}>
          If this ever changes, this page changes with it, and the date below moves.
        </p>

        <div className={s.foot}>
          <p>Last updated 27 August 2026.</p>
          <p>
            Questions: <a href="mailto:rajkarnikarjanit22@gmail.com">rajkarnikarjanit22@gmail.com</a>
          </p>
          <p>
            <a href="/bradbury/support">Support</a> &middot; <a href="/">anijani.github.io</a>
          </p>
        </div>
      </div>
    </main>
  );
}
