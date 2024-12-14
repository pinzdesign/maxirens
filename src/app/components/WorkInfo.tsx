// OBS pga nogle problemer med min google konto, relatelet til billing,
// kan jeg ikke bruge GoogleMap API som den ellers skal bruges, og blot indlejrer en iframe fra google map
// selvom googlemaps er installeret i denne projekt så bliver den ikke brugt

// ikke brugt
import Googlemap from "./Googlemap";

export default function WorkInfo() {
    return (
        <div className="container-fluid colorDeepblue">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="workHours">
                    <h3>Åbningstider</h3>
                    <ul>
                        <li>Man - Fre: 10:00 - 17:30</li>
                        <li>Lørdag: 10:00 - 13:00</li>
                        <li>Søndag: Lukket</li>
                    </ul>
                    <p>Både aflevering og afhentning af tøj sker kun indenfor arbejdstimer på virksomheds adresse, medmindre andet er aftalt.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4500.216192948879!2d12.552997376574679!3d55.66972039838766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525374f443a2e3%3A0xc2aa4f9b8b5d17db!2sMaxi%20Rens!5e0!3m2!1sda!2sdk!4v1733405061212!5m2!1sda!2sdk" width="600" height="450" loading="lazy"></iframe>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}