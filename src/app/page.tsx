import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/redbricknobg.png"
          alt="Redbrick logo"
          width={350}
          height={350}
          priority
        />
        <h1 className={styles.info}>
          Coming <br />
          Soon
        </h1>
      </main>
    </div>
  );
}
