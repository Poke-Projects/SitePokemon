import Image from "next/image";
import styles from "./page.module.css";
import map from "../../public/map.svg";
import teambuilder from "../../public/teambuilder.svg";
import battlesimulator from "../../public/battlesimulator.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Pokemon</h1>

      <a href="">
        <Image src={teambuilder} alt="" />
      </a>
      <a href="">
        <Image src={map} alt="" />
      </a>
      <a href="">
        <Image src={battlesimulator} alt="" />
      </a>
    </main>
  );
}
