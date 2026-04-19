"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/layout.module.css";

export default function NavHeader() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Início" },
    { href: "/dashboard", label: "Agenda" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          🐾 PetCare
        </Link>
        <nav className={styles.nav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}