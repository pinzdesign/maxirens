import React from 'react';
import IntroArticle from './IntroArticle';

const App = () => {
    const content = [
        {
            title: "Velkommen til Maxi Rens",
            text: "Velkommen til Maxi Rens på Istedgade i København. Maxi Rens ligger placeret i det hyggelige kvarter ved Istedgade som har fået et helt nyt image. Hele området har fået en byfornyelse og tilbyder i dag på et fantastisk hyggeligt og stemningsfyldt gademiljø, med masser af liv. Med få minutters gang fra Hovedbanegården, kan du komme ned og besøge Maxi Rens. Maxi Rens ved Istedgade i København vil naturligvis hjælpe dig med den optimale service. Derudover har de enkelte steder parkeringspladser langs vejen samt flere parkeringspladser på de små sidegader, hvilket gør det nemt og komfortabelt for jer som kunder. Kontakt Maxi Rens ved Istedgade eller kom ned forbi dem."
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
            imagePath="/images/cloth.webp" 
            imageAlt="tøj" 
            imageCircle={true} 
            content={content} 
        />
    );
};

export default App;
