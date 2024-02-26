"use client";
import cn from "clsx";
import Image from "next/image";
import Logo from "@/components/Logo";
import { WavyBackground } from "@/components/WavyBackground";
import styles from "./page.module.css";

const checkDarkTheme = () =>
  window && window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function Home() {
  return (
    <WavyBackground backgroundFill={checkDarkTheme() ? "black" : "white"}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.card}>
            <Logo />
            <p style={{ marginTop: 16 }}>
              <h2 style={{ marginBottom: 8 }}>
                Tired of tapping your phone to find the beat?
              </h2>
              <strong>iBPM</strong> is an app designed with a seamless user
              experience in mind that revolutionizes the way you experience
              rhythm. Using your microphone and the powerful Beatroot algorithm,
              iBPM analyzes ambient music and accurately determines its tempo.
              Say goodbye to tedious tap counting and hello to effortless beat
              detection.
              <br />
              <br />
              <ul style={{ paddingLeft: 16 }}>
                <li>
                  <strong>Capture the rhythm:</strong> Simply press the record
                  button and let iBPM analyze the ambient music.
                </li>
                <li>
                  <strong>Get your BPM:</strong> The app will display the exact
                  tempo of the music, allowing you to sync with the beat with
                  precision.
                </li>
                <li>
                  <strong>Effortless workflow:</strong> iBPM seamlessly
                  integrates with your music library and provides quick access
                  to your tempo history.
                </li>
                <li>
                  <strong>Offline first:</strong>
                  {
                    " Don't worry about internet connectivity. IBPM stores your tempo data locally, so you can access it anytime, anywhere."
                  }
                </li>
              </ul>
              <br />
              Stop tapping and start feeling the rhythm with iBPM. Download
              today and unlock the power of effortless beat detection.
            </p>
            <Image
              src="/appstore.svg"
              alt="get it on the ios app store"
              height={150}
              width={200}
              className={cn(styles.pointer, styles.centered)}
            />
          </div>
          <div className={styles.deviceFrame}>
            <Image
              width={400}
              height={640}
              src="/frame.png"
              alt="iphone frame"
              className={cn(styles.pointer, styles.nonInteractive)}
            />
          </div>
        </section>
      </main>
    </WavyBackground>
  );
}
