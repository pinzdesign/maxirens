import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServicePreview from "./components/ServicesPreview";

export default function Home() {
  return (
    <ServicePreview></ServicePreview>
  )
}
