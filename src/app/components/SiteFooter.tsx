import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SiteFooter(){
    return (
        <div className="container-fluid colorGray">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="address">
                            <h3>Adresse</h3>
                            <ul>
                                <li><FontAwesomeIcon icon="house" className="icon" /> Istedgade 45</li>
                                <li><FontAwesomeIcon icon="hashtag" className="icon" /> DK-1650 København V</li>
                                <li><FontAwesomeIcon icon="phone" className="icon" /> Tlf.: 33 25 32 33</li>
                            </ul>
                        </div>
                        <p className="disclaimer">Denne webside er en multimediedesigner eksaminations projekt lavet af Ivan Popov</p>
                    </div>
                    <div className="col-md-6">
                        <div className="some">
                            <h3>Find os her...</h3>
                            <ul>
                                <li><a href="http://www.istedgadeshopping.dk/butik/maxi-rens-4330.html" target="_blank" rel="noopener noreferrer">istedgadeshopping.dk</a></li>
                                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}