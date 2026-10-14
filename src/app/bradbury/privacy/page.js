import s from "../bradbury.module.css";

export const metadata = {
  title: "Bradbury — Privacy",
  description: "Bradbury collects nothing. Your reading stays on your device and in your own iCloud.",
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

        <h2 className={s.h2}>Where your reading lives</h2>
        <p className={s.body}>
          The passages you highlight, the notes and thoughts you write, the stars you give, which
          days you have read, and your reading settings are kept on your device.
        </p>
        <p className={s.body}>
          If you are signed in to iCloud, Bradbury also keeps a copy in your own iCloud account, so
          your reading follows you to another iPhone. That copy sits in your iCloud storage, which
          Apple keeps for you; we cannot see it. To remove it, delete Bradbury&rsquo;s data under
          iCloud storage in Settings. Deleting the app removes what is on the device.
        </p>

        <h2 className={s.h2}>What the app connects to</h2>
        <p className={s.body}>
          Besides your own iCloud account, Bradbury contacts one place, and only ever reads from
          it: a content host, to download each day&rsquo;s painting and readings. The app sends
          nothing but the request itself.
        </p>
        <p className={s.body}>
          As with any request to any website, that server may keep ordinary technical logs, which
          can include an IP address. Neither we nor the app use such logs to identify or follow
          anyone.
        </p>

        <h2 className={s.h2}>What it asks to use</h2>
        <ul className={s.list}>
          <li>
            Photos, only to add a card you choose to save. The app cannot see your library.
          </li>
          <li>Notifications, only if you turn on the daily reminder.</li>
        </ul>
        <p className={s.body}>
          Listening uses the voices on your iPhone; the text is not sent anywhere. Sharing sends
          only what you choose, through Messages or the share sheet.
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
          <p>Last updated 14 October 2026.</p>
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
