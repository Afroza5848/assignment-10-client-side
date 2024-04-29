import Banner from "../../components/Banner/Banner";
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
        </div>
    );
};

export default Home;