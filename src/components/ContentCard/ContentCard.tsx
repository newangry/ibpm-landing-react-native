import { PropsWithChildren } from "react";
import styles from "./ContentCard.module.css";

const ContentCard = ({ children }: PropsWithChildren) => (
  <div className={styles.card}>{children}</div>
);

export default ContentCard;
