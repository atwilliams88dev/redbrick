import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/redbricknobg.png"
          alt="Redbrick logo"
          width={425}
          height={425}
          priority
        />
        <h1 className={styles.info}>Coming Soon</h1>
      </main>
    </div>
  );
}
