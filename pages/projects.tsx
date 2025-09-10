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

      <div className={styles.tableContainer}>
        <table className={styles.projectsTable}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Project</th>
              <th className={styles.tableHeader}>Description</th>
              <th className={styles.tableHeader}>Status</th>
              <th className={styles.tableHeader}>Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug} className={styles.tableRow}>
                <td className={styles.projectCell}>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectIcon}>📁</span>
                    <span className={styles.projectName}>{project.title}</span>
                  </div>
                </td>
                <td className={styles.descriptionCell}>
                  <span className={styles.description}>{project.description}</span>
                </td>
                <td className={styles.statusCell}>
                  <span className={styles.statusBadge}>In Development</span>
                </td>
                <td className={styles.linkCell}>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {project.link}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
