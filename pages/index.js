import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
          deleniti totam, illo iusto quis cupiditate excepturi labore officia
          saepe! Explicabo sint fuga exercitationem expedita provident,
          voluptate cupiditate, quibusdam vitae pariatur facilis deleniti quam
          nemo sunt ipsa officiis doloribus consequuntur voluptates.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
          deleniti totam, illo iusto quis cupiditate excepturi labore officia
          saepe! Explicabo sint fuga exercitationem expedita provident,
          voluptate cupiditate, quibusdam vitae pariatur facilis deleniti quam
          nemo sunt ipsa officiis doloribus consequuntur voluptates.
        </p>
      </div>
      <Link href="/blogs" className={styles.btn}>
        See Posts
      </Link>
    </>
  );
}
