import CustomerComment from "../components/CustomerComment";
import WorkInfo from "../components/WorkInfo";
import About from "../components/About";
import Values from "../components/Values";
import ContactForm from "../components/Contact";

export default function Home() {
    return (
        <>
        <About></About>
        <Values></Values>
        <CustomerComment></CustomerComment>
        <ContactForm></ContactForm>
        <WorkInfo></WorkInfo>
        </>
    )
}