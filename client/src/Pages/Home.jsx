import HomeHero from "@/Components/HomeHero";
import Sponsors from "@/Components/Sponsors";
import FunctionCards from "@/Components/FunctionCards";
import Footer from "@/Components/Footer";

export default function Home() {
    return (
        <div>
            <div className="scroll-smooth">
                <HomeHero />
                <Sponsors />
            </div>
            <div>
                <FunctionCards />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
