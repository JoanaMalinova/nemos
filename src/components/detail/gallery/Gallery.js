import classes from "./Gallery.module.css";

function Gallery({ setModalDisplay, setActiveImage, activeImage, item }) {

    const onImageClick = (ev) => {
        if (ev.target.tagName === "IMG") {
            setActiveImage(ev.target.src);
        }
    }

    const onActiveImgClick = () => {
        setModalDisplay("block");
    }

    return (
        <div className={classes["gallery-wrapper"]}>
            <ul className={classes["aside-gallery"]} onClick={onImageClick}>
                {item.images.map(image => <li key={image}>
                    <img
                        src={image}
                        alt={item.species}
                        style={activeImage === image ? { "opacity": "0.7", "scale": "1.2" } : {}}
                    />
                </li>)}
            </ul>
            <div className={classes["active-image"]} onClick={onActiveImgClick}>
                <img src={activeImage} alt={item.species} />
            </div>
        </div>
    )
}

export default Gallery;