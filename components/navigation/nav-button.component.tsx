import { NextPage } from "next";
import Link from "next/link";
import { Url } from "url";

interface NavBarProps {
  text?: string;
  href: string;
  active?: boolean;
}

const NavItem: NextPage<NavBarProps> = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a className={`nav__item ${active ? "active" : ""}`}>{text}</a>
    </Link>
  );
};

export default NavItem;
