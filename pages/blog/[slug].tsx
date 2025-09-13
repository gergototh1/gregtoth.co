import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { BlogPost } from '@/types';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';

import styles from '@/styles/BlogPost.module.css';

interface BlogPostPageProps {
  post: BlogPost;
  mdxSource: MDXRemoteSerializeResult;
}

const BlogPostPage = ({ post, mdxSource }: BlogPostPageProps) => {
  return (
    <div className={styles.layout}>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <time className={styles.date}>{post.date}</time>
            <span className={styles.author}>by {post.author}</span>
          </div>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className={styles.content}>
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content);

  return {
    props: {
      title: post.title,
      post,
      mdxSource,
    },
  };
};

export default BlogPostPage;