import { useEffect, useRef, useState } from "react";
import classes from "./Modal.module.css";


function Modal({ imageUrl, species, display, setDisplay, images }) {

    const [modalImg, setModalImg] = useState(imageUrl);

    const modalRef = useRef(null);

    useEffect(() => {

        setModalImg(imageUrl);
        modalRef.current.focus();

    }, [imageUrl, display]);

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

    const onArrowsDown = (ev) => {
        const key = ev.key;
        console.log(key);
        if (ev.key === "ArrowLeft") {
            onLeftClick();
        } else if (ev.key === "ArrowRight") {
            onRightClick()
        } else if (ev.key === "Escape") {
            setDisplay('none');
        }
    }

    return (
        <div tabIndex={0} className={classes.modal} ref={modalRef} onClick={onModalClick} style={{ "display": display }} onKeyDown={onArrowsDown}>
            <i className="fa-solid fa-chevron-left fa-2xl" onClick={onLeftClick}></i>
            <div className={classes["modal-content"]}>
                <img src={modalImg} alt={species} />
                <span className={classes.close} onClick={onModalClick}>&times;</span>
            </div>
            <i className="fa-solid fa-chevron-right fa-2xl" onClick={onRightClick}></i>
        </div >
    )
}

export default Modal;