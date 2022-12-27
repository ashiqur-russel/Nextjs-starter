import React from "react";

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
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;
