import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServicePreview from "./components/ServicesPreview";
import IntroArticle from "./components/IntroArticle";
import CustomerComment from "./components/CustomerComment";
import WorkInfo from "./components/WorkInfo";

export default function Home() {
  return (
    <>
      <ServicePreview></ServicePreview>
      <IntroArticle></IntroArticle>
      <CustomerComment></CustomerComment>
      <WorkInfo></WorkInfo>
    </>
  )
}
