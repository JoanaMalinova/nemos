import { useLoaderData } from "react-router-dom";
import styles from "./Arrivals.module.css"
import Card from "../../store/card/Card";

function Arrivals() {

    const { arrivals } = useLoaderData();

    return (
        <section id="arrivals" className={styles["newest-arrivals"]}>
            <h2>New Arrivals</h2>
            <ul className={styles["inner-arrivals"]}>
                {arrivals.map(newItem => <Card item={newItem} />)}
            </ul>
        </section>
    )
}

export default Arrivals;