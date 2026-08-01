import { useEffect, useState } from 'react';
import styles from './HeroCarousel.module.css';

const slides = [
  {
    eyebrow: 'Farm-fresh essentials',
    title: 'Naturally mindful living for every day',
    text: 'Choose organic staples and wellness favorites that bring comfort, balance, and calm to your home.',
    gradient: 'linear-gradient(135deg, #f7ead7 0%, #e7f0d2 48%, #c2d08f 100%)',
  },
  {
    eyebrow: 'Gentle nourishment',
    title: 'A softer way to care for your body',
    text: 'Explore botanicals, wholesome ingredients, and thoughtfully made products rooted in nature.',
    gradient: 'linear-gradient(135deg, #f2e7dc 0%, #dfe6c5 50%, #b8c98d 100%)',
  },
  {
    eyebrow: 'Wellness in bloom',
    title: 'Organic beauty that feels effortless',
    text: 'Bring home refreshing rituals with earthy tones, comforting textures, and timeless simplicity.',
    gradient: 'linear-gradient(135deg, #f5efe4 0%, #e3ebcc 48%, #a8bc75 100%)',
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 12000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      className={styles.heroSection}
      aria-label="Featured organic products"
      aria-roledescription="carousel"
    >
      <div className={styles.carousel}>
        <div className={styles.track} aria-live="polite">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={slide.title}
                className={`${styles.slide} ${isActive ? styles.active : ''}`}
                style={{ background: slide.gradient }}
                aria-hidden={!isActive}
              >
                <div className={styles.content}>
                  <p className={styles.eyebrow}>{slide.eyebrow}</p>
                  <h1 className={styles.heading}>{slide.title}</h1>
                  <p className={styles.text}>{slide.text}</p>

                  <div className={styles.actions}>
                    <a className={styles.primaryButton} href="#">
                      Shop best sellers
                    </a>
                    <a className={styles.secondaryButton} href="#">
                      Discover more
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.dots} aria-label="Carousel pagination">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
