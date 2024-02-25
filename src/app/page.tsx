import cn from "clsx"
import Image from "next/image"
import { WavyBackground } from "@/components/WavyBackground";
import styles from "./page.module.css";

export default function Home() {
  return (
    <WavyBackground>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <span className={styles.pointer}>
            <Image src="/logo.png" alt="iBPM logo"  height={58} width={58} style={{ borderRadius: 4 }} />
            <h1>iBPM</h1>
          </span>
          <Image 
            src="/appstore.svg" 
            alt="get it on the ios app store" 
            height={150} 
            width={200} 
            className={cn([
              styles.pointer, 
              styles.rightAligned
            ])}
          />
        </nav>
        <Image 
          width={400} 
          height={640} 
          src="/frame.png" 
          alt="iphone frame" 
          className={styles.pointer}
        />
        <h2>On-Device Tempo Detection</h2>
      </main>
    </WavyBackground>
  );
}
