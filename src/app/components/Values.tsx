import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Values() {
    return (
        <>
        <div className="container-fluid colorLightblue">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="valuesLeft">
                            <h3>Hvorfor vælge os?</h3>
                            <ul>
                                <li><FontAwesomeIcon icon={faArrowRight} className="icon" />Professionel service med fokus på detaljerne</li>
                                <li><FontAwesomeIcon icon={faArrowRight} className="icon" />Moderne faciliteter og miljøvenlige metoder</li>
                                <li><FontAwesomeIcon icon={faArrowRight} className="icon" />Hurtig og fleksibel betjening, der passer ind i din hverdag</li>
                                <li><FontAwesomeIcon icon={faArrowRight} className="icon" />Konkurrencedygtige priser</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="valuesRight">
                            <Image src="/images/suit.png" alt="suit" width={1046} height={698}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};