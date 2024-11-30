import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Values() {
    return (
        <div className="container-fluid colorLightblue">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="valuesLeft">
                            <Image src="/images/dress.png" alt="suit" width={1046} height={698}></Image>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="valuesRight">
                            <h3>Vores værdier</h3>
                            <p>
                                Vi tror på bæredygtighed og kvalitet i alle aspekter af vores arbejde. Ved at reparere og pleje dit tøj hjælper vi dig med at reducere spild og forlænge levetiden på dine yndlingsstykker. Vi arbejder også aktivt for at minimere vores miljøaftryk ved at anvende moderne, energieffektive maskiner og miljøvenlige rengøringsmidler.
                            </p>
                            <h3>Hvorfor vælge os?</h3>
                            <ul>
                                <li><FontAwesomeIcon icon="arrow-right" className="icon" />Professionel service med fokus på detaljerne</li>
                                <li><FontAwesomeIcon icon="arrow-right" className="icon" />Moderne faciliteter og miljøvenlige metoder</li>
                                <li><FontAwesomeIcon icon="arrow-right" className="icon" />Hurtig og fleksibel betjening, der passer ind i din hverdag</li>
                                <li><FontAwesomeIcon icon="arrow-right" className="icon" />Konkurrencedygtige priser</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}