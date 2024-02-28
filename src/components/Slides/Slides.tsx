import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Slides.module.css";

const slides = [
  {
    key: "slide-1",
    src: "/screens/idle.png",
    alt: "app idle state",
  },
  {
    key: "slide-2",
    src: "/screens/capture.png",
    alt: "app recording state",
  },
  {
    key: "slide-3",
    src: "/screens/processing.png",
    alt: "app processing state",
  },
];

const Slides = () => {
  const [currentIndex, updateCurrentIndex] = useState(1);

  useEffect(() => {
    const autoPlay = setTimeout(() => {
      let nextValue;
      if (currentIndex <= slides.length) {
        nextValue = currentIndex + 1;
      } else {
        nextValue = 1;
      }

      const nextSlide = document.getElementById(`slide-${nextValue}`);

      nextSlide?.scrollIntoView({
        block: "nearest",
        behavior: nextValue === 1 ? "instant" : "smooth",
      });

      updateCurrentIndex(nextValue);
    }, 3000);

    return () => {
      clearTimeout(autoPlay);
    };
  }, [currentIndex]);

  return (
    <section className={styles.container}>
      <Image
        priority
        width={390}
        height={515}
        src="/frame.png"
        alt="iphone frame"
        className={styles.frame}
      />
      <div className={styles.slider}>
        <div className={styles.slides}>
          {slides.map(({ src, alt, key }) => (
            <Image
              id={key}
              key={key}
              src={src}
              alt={alt}
              width={186}
              height={450}
              className={styles.slide}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slides;
