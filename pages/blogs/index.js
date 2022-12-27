import Link from "next/link";
import React from "react";
import styles from "../../styles/Blogs.module.css";
export const getStaticProps = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );

  const data = await response.json();
  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/blogs/` + post.id}>
          <div>
            <h2 className={styles.post}>{post.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
