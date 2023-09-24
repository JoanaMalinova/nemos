import Welcome from "../components/home/welcome section/Wecome";
import Shop from "../components/home/shop section/Shop";
import BestSellers from "../components/home/best sellers/BestSellers";
import WhyChooseUS from "../components/home/why choose us/WhyChooseUs";
import Discount from "../components/home/discount section/Discount";
import Consider from "../components/home/consider section/Consider";
import Arrivals from "../components/home/arrivals section/Arrivals";
import { getBestSellers } from "../services/homeService";
import { getDiscountItems } from "../services/stroreService";
import { json } from "react-router-dom";


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

export default HomePage;

export const homeLoader = async () => {
    const [items, discountItems] = await Promise.all([getBestSellers(), getDiscountItems()]);
    return json({ items, discountItems });
}