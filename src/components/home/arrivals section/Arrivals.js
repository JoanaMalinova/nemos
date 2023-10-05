import { useLoaderData } from "react-router-dom";
import styles from "./Arrivals.module.css"
import Card from "../../store/card/Card";
import { useCookies } from "react-cookie";

function Arrivals() {
    const [cookies, setCookie] = useCookies(['cart']);    

    const { arrivals } = useLoaderData();

    return (
        <section id="arrivals" className={styles["newest-arrivals"]}>
            <h2>New Arrivals</h2>
            <ul className={styles["inner-arrivals"]}>
                {arrivals.map(newItem => <Card 
                item={newItem} 
                key={newItem.id}
                setCookie={setCookie} 
                cart={cookies.cart}  />)}
            </ul>
        </section>
    )
}

export default Arrivals;