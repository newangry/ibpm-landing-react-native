import { PropsWithChildren } from "react";
import { useDarkMode } from "@/utils";
import { Waves } from "./Waves";
import styles from "./WavyBackground.module.css";

function WavyBackground({ children }: PropsWithChildren) {
  const isDarkMode = useDarkMode();
  const backgroundFill = isDarkMode ? "black" : "white";

  return (
    <Waves
      key={backgroundFill}
      backgroundFill={backgroundFill}
      containerClassName={styles.waves}
    >
      <main className={styles.main}>{children}</main>
    </Waves>
  );
}

export default WavyBackground;
