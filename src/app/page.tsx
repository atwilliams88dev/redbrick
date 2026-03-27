import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header"
import Hero from "./hero"
import Footer from "./footer";
import FoodMenu from "./food";
import Team from "./team"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header/>
        <Hero/>
        <FoodMenu/>
        <Team/>
        <Footer/>
      </main>
    </div>
  );
}
