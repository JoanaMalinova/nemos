import React from "react";
import styles from "./Welcome.module.css";

function Welcome() {

    return (
        <section className={styles["welcome-wrapper"]}>
            <div className={styles["video-div"]}>
                <video autoPlay="autoplay" muted="muted" loop="loop" >
                    <source src="images/fish-swimming.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles["heading-wrapper"]}>
                <h3>WELCOME TO</h3>
                <h1><span className={styles.nemo}>NEMO's</span> <br />THE LARGEST RANGE<br />OF EXOTIC AQUARIUM FISH</h1>
            </div>
        </section>
    )
}

export default Welcome;