import LoginDeals from "../components/login/login deals/LoginDeals";
import ShoppingHeader from "../components/shopping cart/shopping header/ShoppingHeader";
import ShoppingMiddleSection from "../components/shopping cart/shopping middle section/ShoppingMiddleSection";

function ShoppingCartPage() {

    return (
        <>
            <ShoppingHeader />
            <ShoppingMiddleSection />
            <LoginDeals />
        </>
    )
}

export default ShoppingCartPage;