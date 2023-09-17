import LowerNav from "../components/navigation/lower navbar/LowerNav";
import Welcome from "../components/home/welcome section/Wecome";
import Shop from "../components/home/shop section/Shop";
import BestSellers from "../components/home/best sellers/BestSellers";
import WhyChooseUS from "../components/home/why choose us/WhyChooseUs";
import Discount from "../components/home/discount section/Discount";
import Consider from "../components/home/consider section/Consider";
import Arrivals from "../components/home/arrivals section/Arrivals";


function HomePage() {

    return (
        <>
            <Welcome />
            <Shop />
            <BestSellers />
            <WhyChooseUS />
            <Discount />
            <Consider />
            <Arrivals />
        </>
    )
}

export default HomePage