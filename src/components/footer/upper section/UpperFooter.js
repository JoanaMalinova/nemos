import styles from './UpperFooter.module.css';

function UpperFooter() {

    return (
        <section className={styles["upper-footer"]}>
            <ul>
                <li>
                    <div className={styles.address}>
                        <i className="fa-solid fa-location-dot fa-2xl"></i>
                        <h3>
                            Address
                        </h3>
                        <p>Some Str. 24 Sofia</p>
                    </div>
                </li>
                <li>
                    <div className={styles.email}>
                        <i className="fa-solid fa-envelope fa-2xl"></i>
                        <h3>Email</h3>
                        <p>nemos@info.com</p>
                    </div>
                </li>
                <li>
                    <div className={styles.phone}>
                        <i className="fa-solid fa-phone fa-2xl"></i>
                        <h3>Phone</h3>
                        <p>0884558319</p>
                    </div>
                </li>
                <li>
                    <div className={styles.media}>
                        <i className="fa-solid fa-link fa-2xl"></i>
                        <h3>Media</h3>
                        <div>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default UpperFooter;