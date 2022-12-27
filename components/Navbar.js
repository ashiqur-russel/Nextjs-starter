import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={77} height={77} alt="logo"></Image>
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
