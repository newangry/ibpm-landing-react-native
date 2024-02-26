import Image from "next/image";
import { cn } from "@/utils/cn";
import styles from "./Navbar.module.css";
import Logo from "../Logo"

const Navbar = () => (
  <nav className={styles.nav}>
    <Logo />
    <Image
      src="/appstore.svg"
      alt="get it on the ios app store"
      height={150}
      width={200}
      className={cn(styles.pointer, styles.rightAligned)}
    />
  </nav>
);

export default Navbar
