import { useEffect, useState } from "react";
import classes from "./Detail.module.css";
import Modal from "./modal/Modal";
import { useLoaderData } from "react-router-dom";
import Gallery from "./gallery/Gallery";
import InnerNav from "../navigation/inner nav/InnerNav";
import DetailInfo from "./main detail info/DetailInfo";
import AdditionalInfo from "./addition detail info/AdditionalInfo";
import RelatedItems from "./related items/RelatedItems";


function Detail() {

    const { item } = useLoaderData();
    const [activeImage, setActiveImage] = useState(item.images[0]);
    const [modalDisplay, setModalDisplay] = useState('none');

    useEffect(() => {
        setActiveImage(item.images[0]);
    }, [item])


    return (
        <section className={classes["detail-wrapper"]}>
            {/* <InnerNav currLink={currLink} /> */}
            <section className={classes["upper-detail"]}>
                <Gallery activeImage={activeImage} setActiveImage={setActiveImage} setModalDisplay={setModalDisplay} item={item} />
                < DetailInfo item={item} />
                <Modal
                    display={modalDisplay}
                    species="Tridacna squamosa"
                    imageUrl={activeImage}
                    setDisplay={setModalDisplay}
                    images={item?.images}
                />
            </section>
            <hr className={classes["middle-hr"]} />
            <AdditionalInfo item={item} />
            <hr className={classes["middle-hr"]} />
            <RelatedItems />
        </section >

    )
}

export default Detail;