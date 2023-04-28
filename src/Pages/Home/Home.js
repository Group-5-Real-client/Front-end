import ArrivalhomePage from "../../Component/arrivalhomePage/arrivalhomePage";
import SellershomePage from "../../Component/sellershomePage/sellershomePage";
import HeroSectionHome from "../../Component/heroSectionhomePage/heroSectionhome_page";
import Header from "../../Component/navbar/navbar";
function Home(){
    return(
        <div>

            <HeroSectionHome>
            <Header/>
            </HeroSectionHome>

            
            <ArrivalhomePage/>
            <SellershomePage/>
        </div>
    )
}
export default Home