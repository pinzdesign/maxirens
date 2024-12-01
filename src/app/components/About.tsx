import React from 'react';
import IntroArticle from './IntroArticle';

const App = () => {
    const content = [
        {
            title: "Velkommen til Maxi Rens - din pålidelige partner for rensning, vask og reparation af tøj",
            text: "Hos os tror vi på, at rent og velplejet tøj er en del af en nemmere og mere komfortabel hverdag. Derfor har vi skabt en service, hvor kvalitet, pålidelighed og bæredygtighed går hånd i hånd. Vi er her for at hjælpe dig med alt fra den daglige vask til skånsom rens af dine mest værdifulde tekstiler - og vi tilbyder også reparationer, så dit tøj kan holde længere."
        },
        {
            title: "Hvem er vi?",
            text: "Vi er et team af dedikerede fagfolk med mange års erfaring inden for tekstilpleje. Vores mål er at give dig den bedste oplevelse, uanset om det gælder en skjorte til en vigtig præsentation, din yndlingskjole eller et arvestykke, der kræver særlig pleje. Vi sætter en ære i at levere resultater, der overgår dine forventninger."
        },
        {
            title: "Vores værdier",
            text: "Vi tror på bæredygtighed og kvalitet i alle aspekter af vores arbejde. Ved at reparere og pleje dit tøj hjælper vi dig med at reducere spild og forlænge levetiden på dine yndlingsstykker. Vi arbejder også aktivt for at minimere vores miljøaftryk ved at anvende moderne, energieffektive maskiner og miljøvenlige rengøringsmidler."
        }
    ];

    return (
        <IntroArticle 
            imagePath="/images/cloth.png" 
            imageAlt="tøj" 
            imageCircle={true} 
            content={content} 
        />
    );
};

export default App;
