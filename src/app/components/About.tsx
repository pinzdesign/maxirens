import Image from "next/image";

export default function About() {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="aboutLeft">
                        <Image src="/images/suit.png" alt="suit" width={1046} height={698}></Image>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="aboutRight">
                        <h3>Velkommen til Maxi Rens - din pålidelige partner for rensning, vask og reparation af tøj</h3>
                        <p>Hos os tror vi på, at rent og velplejet tøj er en del af en nemmere og mere komfortabel hverdag. Derfor har vi skabt en service, hvor kvalitet, pålidelighed og bæredygtighed går hånd i hånd. Vi er her for at hjælpe dig med alt fra den daglige vask til skånsom rens af dine mest værdifulde tekstiler - og vi tilbyder også reparationer, så dit tøj kan holde længere.</p>
                        <h3>Hvem er vi?</h3>
                        <p>Vi er et team af dedikerede fagfolk med mange års erfaring inden for tekstilpleje. Vores mål er at give dig den bedste oplevelse, uanset om det gælder en skjorte til en vigtig præsentation, din yndlingskjole eller et arvestykke, der kræver særlig pleje. Vi sætter en ære i at levere resultater, der overgår dine forventninger.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}