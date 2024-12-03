import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServicePreview from "../components/ServicesPreview";
import IntroArticle from "../components/IntroArticle";
import CustomerComment from "../components/CustomerComment";
import WorkInfo from "../components/WorkInfo";
import About from "../components/About";
import Values from "../components/Values";
import Pricebox from "../components/Pricebox";

export default function Home() {
    
    const content = [
        {
            title: "Vores Servicer",
            text: "Hos Maxi Rens tilbyder vi en bred vifte af løsninger til dit tøj - alt fra professionel rensning og omhyggelig vask til reparation af dine favoritstykker. Uanset om det handler om at få tøjet til at se ud som nyt, forlænge dets levetid eller bare gøre din hverdag lettere, står vi klar til at hjælpe med ekspertise og omtanke."
        }
    ];
    
    const contentPrice1 = [
        {
            title: "Skjorte",
            price: "25,-"
        },
        {
            title: "Benklæde",
            price: "85,-"
        },
        {
            title: "Smokingjakke",
            price: "95,-"
        },
        {
            title: "Kjole",
            price: "175,-"
        },
        {
            title: "Nederdel",
            price: "85,-"
        },
        {
            title: "Vest",
            price: "65,-"
        },
        {
            title: "Slips",
            price: "55,-"
        }
    ];

    const contentPrice2 = [
        {
            title: "Bluse",
            price: "55,-",
        },
        {
            title: "Strik",
            price: "55,-",
        },
        {
            title: "Tørklæde",
            price: "55,-",
        },
        {
            title: "Vindjakke",
            price: "135,-",
        },
        {
            title: "Frakke",
            price: "200,-",
        },
        {
            title: "Dunjakke",
            price: "250,-",
        },
        {
            title: "Canada Goose",
            price: "350,-",
        }
    ];

    const contentPrice3 = [
        {
            title: "Kilovask",
            price: "85,-",
        },
        {
            title: "Rullevask",
            price: "125,-",
        },
        {
            title: "Kilorens",
            price: "100,-",
        },
        {
            title: "Dyne",
            price: "250,-",
        },
        {
            title: "Dobbeltdyne",
            price: "350,-",
        },
        {
            title: "Hovedpude",
            price: "85,-",
        },
        {
            title: "And.sengetøj",
            price: "fra 85,-",
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
            <div className="container">
                <div className="row">
                    <Pricebox
                    content={contentPrice1}
                    />
                    <Pricebox
                    content={contentPrice2}
                    />
                    <Pricebox
                    content={contentPrice3}
                    />
                </div>
            </div>
            <CustomerComment></CustomerComment>
            <WorkInfo></WorkInfo>
        </>
    )
}
