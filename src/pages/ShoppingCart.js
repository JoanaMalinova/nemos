import { useCookies } from "react-cookie";
import LoginDeals from "../components/login/login deals/LoginDeals";
import ShoppingMain from "../components/shopping cart/shopping main/ShpoppingMain";
import EmptyCart from "../components/shopping cart/cart is empty/EmptyCart";

function ShoppingCartPage() {

    const [cookies] = useCookies();
    const cart = cookies.cart;

    return (
        <>
            {!cart.length ?
                <EmptyCart /> :
                <ShoppingMain />
            }

            <LoginDeals />
        </>
    )
}

export default ShoppingCartPage;