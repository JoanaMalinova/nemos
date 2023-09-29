import classes from "./LoginDeals.module.css";

function LoginDeals() {
    return (
        <section className={classes["login-deals-wrapper"]}>
            <div>
                <i className="fa-solid fa-truck-fast"></i>
                <div className={classes["text-wrapper"]}>
                    <h3>Free shipping</h3>
                    <p>Shipping is free for orders over $130</p>
                </div>
            </div>
            <div>
                <i className="fa-solid fa-headphones"></i>
                <div className={classes["text-wrapper"]}>
                    <h3>Customer Support</h3>
                    <p>Plesase call if any kind of problem with your order, we hade 24/7 customer service</p>
                </div>
            </div>
            <div>
                <i className="fa-solid fa-thumbs-up"></i>
                <div className={classes["text-wrapper"]}>
                    <h3>10-Day Guarantee</h3>
                    <p>Our hassle free guarantee covers all shipments</p>
                </div>
            </div>
        </section>
    )
}

export default LoginDeals;