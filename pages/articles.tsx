import ArticleCard from '@/components/ArticleCard';

import { BlogPost } from '@/types';
import { getAllPosts } from '@/lib/mdx';

import styles from '@/styles/ArticlesPage.module.css';

interface ArticlesPageProps {
  posts: BlogPost[];
}

const ArticlesPage = ({ posts }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Articles</h1>
      <p className={styles.pageSubtitle}>
        Personal blog posts where I share insights and tutorials about web development.
      </p>
      <div className={styles.container}>
{posts && Array.isArray(posts) ? posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className={styles.articleCard}>
            <h2>{post.title}</h2>
            <p className={styles.date}>{post.date}</p>
            <p>{post.excerpt}</p>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </a>
        )) : <p>No articles found</p>}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { title: 'Articles', posts },
  };
}

export default ArticlesPage;