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
    
    const content = [
        {
            title: "Vores Servicer",
            text: "Hos Maxi Rens tilbyder vi en bred vifte af løsninger til dit tøj - alt fra professionel rensning og omhyggelig vask til reparation af dine favoritstykker. Uanset om det handler om at få tøjet til at se ud som nyt, forlænge dets levetid eller bare gøre din hverdag lettere, står vi klar til at hjælpe med ekspertise og omtanke."
        }
    ];

    return (
        <>
        <ServicePreview></ServicePreview>
        <IntroArticle 
        imagePath="/images/shirts.png" 
        imageAlt="tøj" 
        imageCircle={true} 
        content={content} 
        />
        <h2 className="centered">Priser</h2>
        <CustomerComment></CustomerComment>
        <WorkInfo></WorkInfo>
        </>
    )
}
