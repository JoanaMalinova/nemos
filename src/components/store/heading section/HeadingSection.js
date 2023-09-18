import classes from "./HeadingSection.module.css";

function HeadingSection({ imageUrl, heading }) {

    return (
        <section className={classes["store-heading"]}>
            <img src={imageUrl}
                alt="aquarium" />
            <div className={classes["store-info"]}>
                <h1>{heading}
                    <hr />
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus repellat doloribus
                    veritatis
                    rem, fuga facere, quaerat, cumque autem impedit officia corporis dolor expedita ea repudiandae
                    vel
                    saepe quidem. Odit quod modi, ab blanditiis consectetur deleniti a quis rerum veritatis maiores
                    soluta cupiditate voluptatem esse quaerat qui harum praesentium aperiam excepturi dolorum
                    voluptatum
                    at aliquam?</p>
            </div>
        </section>
    )
}

export default HeadingSection;