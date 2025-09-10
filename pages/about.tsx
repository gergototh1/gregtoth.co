import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Greg Toth</h1>
        <div className={styles.subtitle}>Business guy turned vibe coder</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              I&apos;ve spent 10+ years in business development and marketing, and even ran my own software development company as CEO – without ever being a developer myself.
            </p>
            <p className={styles.paragraph}>
              I always had bold product ideas, but until recently, turning them into real software felt out of reach.
            </p>
            <p className={styles.paragraph}>
              That changed with AI and vibe coding.
            </p>
            <p className={styles.paragraph}>
              Now I can build my own products from scratch, combining my business instincts with AI-powered development. No dev team, no endless blockers – just me, my ideas, and the tools to ship them.
            </p>
            <p className={styles.paragraph}>
              I love exploring the intersection of AI and product creation. For me, it&apos;s not just about coding – it&apos;s about creating new solutions, faster than ever, and actually bringing them to life.
            </p>
            <p className={styles.paragraph}>
              Outside of building, you&apos;ll probably catch me geeking out on the latest AI breakthroughs, startup trends, or sketching out the next &quot;crazy but doable&quot; product idea.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
