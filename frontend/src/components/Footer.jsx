import React from "react";
import styles from "../styles/Footer.module.css";

import { Link } from "./Link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Made by <Link href="https://www.lucabergman.nl">Luca Bergman</Link> for{" "}
        <Link href="https://husite.nl/open-ict/">Open-ICT</Link>
      </div>
      <div>
        <Link href="https://github.com/spark-156/hboi-domeinbeschrijving">
          Source Code
        </Link>{" "}
        &amp; my <Link href="https://github.com/spark-156/">Github</Link>
      </div>
    </footer>
  );
}
