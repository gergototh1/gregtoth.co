import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Greg Toth</h1>
        <div className={styles.subtitle}>Indie Hacker & AI Fanatic</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m an indie hacker and AI enthusiast from Hungary. I&apos;m passionate about 
              building products that solve real problems and exploring the intersection of AI and productivity.
            </p>
            <p className={styles.paragraph}>
              I work across the full stack with modern technologies like React, Node.js, and Python, 
              but my true passion lies in leveraging AI to create innovative solutions that make people&apos;s lives easier.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Indie Hacking Journey</h2>
            <p className={styles.paragraph}>
              I&apos;m currently building <span className={styles.highlight}>AI-powered productivity tools</span> 
              that help individuals and small teams work more efficiently. My focus is on creating 
              simple yet powerful solutions that leverage the latest AI capabilities.
            </p>
            <p className={styles.paragraph}>
              From idea validation to product launch, I handle every aspect of the development process. 
              I believe in shipping fast, iterating based on user feedback, and building products that 
              people actually want to use.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>AI & Learning</h2>
            <p className={styles.paragraph}>
              I&apos;m constantly experimenting with the latest AI technologies and frameworks. 
              From <span className={styles.highlight}>OpenAI&apos;s GPT models</span> to 
              <span className={styles.highlight}> vector databases</span> and 
              <span className={styles.highlight}> machine learning pipelines</span>, 
              I love exploring how AI can be integrated into everyday applications.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I&apos;m not coding or experimenting with AI, you&apos;ll find me exploring 
              the latest tech trends, reading about startup culture, or working on side projects 
              that push the boundaries of what&apos;s possible with current technology.
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
