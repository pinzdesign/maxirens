import MainMenu from "./MainMenu";
import Jumbotron from "./Jumbotron";

export default function SiteHeader(){
    return (
        <header>
            <MainMenu></MainMenu>
            <Jumbotron></Jumbotron>
        </header>
    );
}