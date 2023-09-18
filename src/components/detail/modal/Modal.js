import { useEffect, useState } from "react";
import classes from "./Modal.module.css";


function Modal({ imageUrl, species, display, setDisplay, images }) {

    const [modalImg, setModalImg] = useState(imageUrl);

    useEffect(() => {

        setModalImg(imageUrl);

    }, [imageUrl]);

    const onModalClick = (ev) => {
        if (ev.target === ev.currentTarget) {
            setDisplay("none");
        }
    }

    const activeIndex = images.indexOf(modalImg);

    const onLeftClick = () => {
        if (activeIndex === 0) {
            setModalImg(images[images.length - 1]);
        } else {
            setModalImg(images[activeIndex - 1])
        }
    }

    const onRightClick = () => {
        if (activeIndex === images.length - 1) {
            setModalImg(images[0]);
        } else {
            setModalImg(images[activeIndex + 1])
        }

    }

    return (
        <div class={classes.modal} onClick={onModalClick} style={{ "display": display }}>
            <i class="fa-solid fa-chevron-left fa-2xl" onClick={onLeftClick}></i>
            <div class={classes["modal-content"]}>
                <img src={modalImg} alt={species} />
                <span class={classes.close} onClick={onModalClick}>&times;</span>
            </div>
            <i class="fa-solid fa-chevron-right fa-2xl" onClick={onRightClick}></i>
        </div >
    )
}

export default Modal;