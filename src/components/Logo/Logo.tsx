import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = {
  label?: string;
};

const Logo = ({ label = "iBPM" }: LogoProps) => (
  <span className={styles.container}>
    <Image width={58} height={58} src="/logo.png" alt="iBPM logo" />
    <h1>{label}</h1>
  </span>
);

export default Logo;
