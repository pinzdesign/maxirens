import Image from 'next/image';

export default function IntroArticle() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 article-img">
                    <Image
                    src="/images/maxirens.png"
                    alt="Maxi Rens udenfor"
                    width={250}
                    height={250}
                    className="img-round"
                    />
                </div>
                <div className="col-md-8 article-txt">
                    <h2>Velkommen til Maxi Rens - Dit lokale vaskeri med professionel service</h2>
                    <p>Hos Maxi Rens forstår vi vigtigheden af rent og velplejet tøj i en travl hverdag. Vi tilbyder en bred vifte af vaske- og renseydelser, der er skræddersyet til dine behov, uanset om det handler om dagligdagsvask, rens af jakkesæt eller specialbehandling af særlige tekstiler som skind og pels.</p>
                    <p><strong>Lad os gøre din hverdag lidt lettere - besøg Maxi Rens i dag, og oplev forskellen!</strong></p>
                </div>
            </div>
        </div>
    )
}