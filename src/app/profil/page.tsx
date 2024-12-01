import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServicePreview from "../components/ServicesPreview";
import IntroArticle from "../components/IntroArticle";
import CustomerComment from "../components/CustomerComment";
import WorkInfo from "../components/WorkInfo";
import About from "../components/About";
import Values from "../components/Values";

export default function Home() {
    return (
        <>
        <About></About>
        <Values></Values>
        <CustomerComment></CustomerComment>
        <WorkInfo></WorkInfo>
        </>
    )
}