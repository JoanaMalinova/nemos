import { useState } from "react";
import classes from "./Detail.module.css";
import Modal from "./modal/Modal";

function Detail() {

    const [activeImage, setActiveImage] = useState("https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20squamosa%20selten.png");
    const [modalDisplay, setModalDisplay] = useState('none');

    const onImageClick = (ev) => {
        if (ev.target.tagName === "IMG") {
            setActiveImage(ev.target.src);
        }
    }

    const onActiveImgClick = () => {
        setModalDisplay("block");
    }

    const imageArray = [
        "https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20squamosa%20selten.png",
        "https://coralaxy.de/img/beesblog/posts/28-post_default.png",
        "https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20derasa.png",
        "https://www.algaebarn.com/wp-content/uploads/2021/07/Biota-Sqamosa.png"

    ]

    return (
        <section className={classes["detail-wrapper"]}>
            <div className={classes["gallery-wrapper"]}>
                <ul className={classes["aside-gallery"]} onClick={onImageClick}>
                    <li>
                        <img
                            src="https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20squamosa%20selten.png"
                            alt=""
                            style={activeImage === "https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20squamosa%20selten.png" ? { "opacity": "0.7", "scale": "1.2" } : { "opacity": "1", "scale": "1" }}
                        />
                    </li>
                    <li>
                        <img
                            src="https://coralaxy.de/img/beesblog/posts/28-post_default.png"
                            alt=""
                            style={activeImage === "https://coralaxy.de/img/beesblog/posts/28-post_default.png" ? { "opacity": "0.7", "scale": "1.2" } : { "opacity": "1", "scale": "1" }}
                        />
                    </li>
                    <li>
                        <img
                            src="https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20derasa.png"
                            alt=""
                            style={activeImage === "https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20derasa.png" ? { "opacity": "0.7", "scale": "1.2" } : { "opacity": "1", "scale": "1" }}
                        />
                    </li>
                    <li>
                        <img
                            src="https://www.algaebarn.com/wp-content/uploads/2021/07/Biota-Sqamosa.png"
                            alt=""
                            style={activeImage === "https://www.algaebarn.com/wp-content/uploads/2021/07/Biota-Sqamosa.png" ? { "opacity": "0.7", "scale": "1.2" } : { "opacity": "1", "scale": "1" }}
                        />
                    </li>
                </ul>
                <div className={classes["active-image"]} onClick={onActiveImgClick}>
                    <img src={activeImage} alt="" />
                </div>
            </div>
            <div className={classes["info-wrapper"]}>
                <div>
                    <h1>Tridacna squamosa</h1>
                    <hr />
                </div>
                <h2>$180</h2>
                <button className="purple-btn">Add to cart</button>
                <div>
                    <h3>How to care for Tridacna squamosa </h3>
                    <hr />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, voluptate. Natus tenetur excepturi suscipit aliquam debitis hic corrupti necessitatibus blanditiis cupiditate totam nihil nisi quod vitae ullam praesentium, voluptate neque?
                    Fugit cum tempora, totam voluptates excepturi recusandae porro, animi doloremque repellendus quaerat deleniti, quod fuga nemo magni. Maxime repellat itaque, tempore ut amet sequi, nam enim minus veniam blanditiis nemo?</p>

            </div>
            <Modal
                display={modalDisplay}
                species="Tridacna squamosa"
                imageUrl={activeImage}
                setDisplay={setModalDisplay}
                images={imageArray}
            />
        </section>
    )
}

export default Detail;