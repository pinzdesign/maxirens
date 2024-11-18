import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Maxi Rens</h1>
        <h2>Subheader</h2>
        <p>
          <FontAwesomeIcon icon="house" className="icon"/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Morbi odio dui, tincidunt sed elit vitae, mollis eleifend ex. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </main>
    </div>
  );
}
