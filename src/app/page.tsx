"use client";
import { useDarkMode } from "@/utils";
import Slides from "@/components/Slides";
import ContentCard from "@/components/ContentCard";
import { WavyBackground } from "@/components/WavyBackground";
import styles from "./page.module.css";

export default function Home() {
  const isDarkMode = useDarkMode();
  const backgroundFill = isDarkMode ? "black" : "white";

  return (
    <WavyBackground key={backgroundFill} backgroundFill={backgroundFill}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <ContentCard />
          <Slides />
        </section>
      </main>
    </WavyBackground>
  );
}
