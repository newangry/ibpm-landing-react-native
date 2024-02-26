import Image from "next/image";
import styles from "./Logo.module.css"

const Logo = () => (
  <span className={styles.container}>
    <Image
      width={58}
      height={58}
      src="/logo.png"
      alt="iBPM logo"
    />
    <h1>iBPM</h1>
  </span>
);

export default Logo
