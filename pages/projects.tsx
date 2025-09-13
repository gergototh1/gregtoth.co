import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <p className={styles.pageSubtitle}>
        Here&apos;s a collection of my recent work. These projects showcase my
        skills in web development, design, and problem-solving.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.projectCard}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.projectMeta}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
