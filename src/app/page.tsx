import Image from "next/image";
import styles from "./page.module.css";
import BabylonScene from "@/components/BabylonScene";

export default function Home() {
  return (
    <div className={styles.page}>
      3D editor
      <BabylonScene/>
    </div>
  );
}
