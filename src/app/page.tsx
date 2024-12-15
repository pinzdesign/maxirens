import ServicePreview from "./components/ServicesPreview";
import IntroArticle from "./components/IntroArticle";
import CustomerComment from "./components/CustomerComment";
import WorkInfo from "./components/WorkInfo";
import ContactForm from "./components/Contact";

export default function Home() {
  const content = [
    {
        title: "Velkommen til Maxi Rens - Din lokale vaskeri med professionel service",
        text: "Hos Maxi Rens forstår vi vigtigheden af rent og velplejet tøj i en travl hverdag. Vi tilbyder en bred vifte af vaske- og renseydelser, der er skræddersyet til dine behov, uanset om det handler om dagligdagsvask, rens af jakkesæt eller specialbehandling af særlige tekstiler som skind og pels."
    }
  ];

  return (
    <>
      <ServicePreview></ServicePreview>
      <IntroArticle 
            imagePath="/images/maxirens.webp" 
            imageAlt="tøj" 
            imageCircle={true} 
            content={content} 
      />
      <CustomerComment></CustomerComment>
      <ContactForm></ContactForm>
      <WorkInfo></WorkInfo>
    </>
  )
}
