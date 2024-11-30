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
                </div>
            </div>
            <div className="col-md-6">
                <div className="location">
                    <p>google map here</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}