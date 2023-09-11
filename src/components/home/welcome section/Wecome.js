import React from "react";
import styles from "./Welcome.module.css";

export const Welcome = () => {

    return (
        <section className={styles["welcome-wrapper"]}>
            <div className={styles["video-div"]}>
                <video autoplay muted loop >
                    <source src="images/fish-swimming.mp4" type="video/mp4" />
                </video>
            </div>
            <h3>WELCOME TO</h3>
            <h1><span className={styles.nemo}>NEMO's</span> <br />THE LARGEST RANGE<br />OF EXOTIC AQUARIUM FISH</h1>
        </section>
    )
}