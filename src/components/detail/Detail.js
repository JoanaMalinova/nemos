import { useEffect, useState, Suspense } from "react";
import classes from "./Detail.module.css";
import Modal from "./modal/Modal";
import { useLoaderData, Await } from "react-router-dom";
import Gallery from "./gallery/Gallery";
import InnerNav from "../navigation/inner nav/InnerNav";
import DetailInfo from "./main detail info/DetailInfo";
import AdditionalInfo from "./addition detail info/AdditionalInfo";
import RelatedItems from "./related items/RelatedItems";
import storeInfo from "../../utils/storeInfo";
import { useCookies } from "react-cookie";
import Loader from "../special/loader/Loader";


function Detail() {

    const { item, items } = useLoaderData();
    const [activeImage, setActiveImage] = useState(item.images[0]);
    const [modalDisplay, setModalDisplay] = useState('none');
    const [cookies, setCookie] = useCookies(['cart']);

    useEffect(() => {
        setActiveImage(item.images[0]);

    }, [item]);


    return (
        <section className={classes["detail-wrapper"]}>
            <Suspense fallback={<Loader />}>
                <Await resolve={item}>
                    {(item) => <>
                        <InnerNav
                            currLink={storeInfo[item.type].name}
                            itemName={item.species || item.name} />
                        <section className={classes["upper-detail"]}>
                            <Gallery
                                activeImage={activeImage}
                                setActiveImage={setActiveImage}
                                setModalDisplay={setModalDisplay}
                                item={item}
                            />
                            < DetailInfo
                                item={item}
                                cookies={cookies}
                                setCookie={setCookie} />
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
                    </>}
                </Await>
            </Suspense>
            <hr className={classes["middle-hr"]} />
            <Suspense fallback={<Loader />}>
                <Await resolve={items}>
                    {() => <RelatedItems
                        cookies={cookies}
                        setCookie={setCookie}
                        cart={cookies.cart}
                        item={item}
                        items={items}
                    />}
                </Await>
            </Suspense>
        </section >

    )
}

export default Detail;