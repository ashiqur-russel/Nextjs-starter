import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>My Blog</h1>
      </div>
      <div className="nav_link">
        <Link href="/">Home</Link>
        <Link href="/blogs">Post</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Nav;
