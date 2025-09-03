import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <h6>Cohort 1</h6>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/products"}>Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
