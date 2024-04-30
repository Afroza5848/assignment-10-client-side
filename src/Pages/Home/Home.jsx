import Banner from "../../components/Banner/Banner";
import Charts from "../../components/Charts/Charts";
import CraftCategories from "../../components/CraftCategories/CraftCategories";
import Offer from "../../components/Offer/Offer";
import CraftItems from "./CraftItems";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <Offer></Offer>
            <CraftCategories></CraftCategories>
            <Charts></Charts>
        </div>
    );
};

export default Home;