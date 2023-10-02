import Welcome from "../components/home/welcome section/Wecome";
import Shop from "../components/home/shop section/Shop";
import BestSellers from "../components/home/best sellers/BestSellers";
import WhyChooseUs from "../components/home/why choose us/WhyChooseUs";
import Discount from "../components/home/discount section/Discount";
import Consider from "../components/home/consider section/Consider";
import Arrivals from "../components/home/arrivals section/Arrivals";
import { getBestSellers, getDiscountItems, getNewestItems } from "../services/homeService";
import { json } from "react-router-dom";


function HomePage() {

    return (
        <>
            <Welcome />
            <Shop />
            <BestSellers />
            <WhyChooseUs />
            <Discount />
            <Consider />
            <Arrivals />
        </>
    )
}

export default HomePage;

export const homeLoader = async () => {
    const [items, discountItems, arrivals] = await Promise.all([getBestSellers(), getDiscountItems(), getNewestItems()]);
    return json({ items, discountItems, arrivals });
}