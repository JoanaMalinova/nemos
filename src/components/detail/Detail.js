import { useState } from "react";
import classes from "./Detail.module.css";
import Modal from "./modal/Modal";

function Detail() {

    const [activeImage, setActiveImage] = useState("https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20squamosa%20selten.png");
    const [modalDisplay, setModalDisplay] = useState('none');
    const [infoClass, setInfoClass] = useState({
        main: 'active',
        sec: 'inactive'
    });
    const [addInfoDisplay, setAddInfoDisplay] = useState(0);

    const onImageClick = (ev) => {
        if (ev.target.tagName === "IMG") {
            setActiveImage(ev.target.src);
        }
    }

    const onActiveImgClick = () => {
        setModalDisplay("block");
    }

    const onAddInfoClick = (ev) => {

        if (ev.target.tagName === "SPAN") {
            if (infoClass.main === 'active') {
                setInfoClass({ main: 'inactive', sec: 'active' });
                setAddInfoDisplay(1);
            } else {
                setInfoClass({ sec: 'inactive', main: 'active' });
                setAddInfoDisplay(0);
            }
        }
    }

    const imageArray = [
        "https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20squamosa%20selten.png",
        "https://coralaxy.de/img/beesblog/posts/28-post_default.png",
        "https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20derasa.png",
        "https://www.algaebarn.com/wp-content/uploads/2021/07/Biota-Sqamosa.png"
    ]

    return (

        <section className={classes["detail-wrapper"]}>
            <section className={classes["upper-detail"]}>
                <div className={classes["gallery-wrapper"]}>
                    <ul className={classes["aside-gallery"]} onClick={onImageClick}>
                        <li>
                            <img
                                src="https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20squamosa%20selten.png"
                                alt=""
                                style={activeImage === "https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20squamosa%20selten.png" ? { "opacity": "0.7", "scale": "1.2" } : {}}
                            />
                        </li>
                        <li>
                            <img
                                src="https://coralaxy.de/img/beesblog/posts/28-post_default.png"
                                alt=""
                                style={activeImage === "https://coralaxy.de/img/beesblog/posts/28-post_default.png" ? { "opacity": "0.7", "scale": "1.2" } : {}}
                            />
                        </li>
                        <li>
                            <img
                                src="https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20derasa.png"
                                alt=""
                                style={activeImage === "https://coralaxy.de/img/cms/blog%20Bilder/Tridacna%20derasa.png" ? { "opacity": "0.7", "scale": "1.2" } : {}}
                            />
                        </li>
                        <li>
                            <img
                                src="https://www.algaebarn.com/wp-content/uploads/2021/07/Biota-Sqamosa.png"
                                alt=""
                                style={activeImage === "https://www.algaebarn.com/wp-content/uploads/2021/07/Biota-Sqamosa.png" ? { "opacity": "0.7", "scale": "1.2" } : {}}
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
                    <button className="purple-btn">Add to cart <i class="fa-solid fa-cart-plus fa-sm"></i></button>
                    <div>
                        <h3>How to care for Tridacna squamosa </h3>
                        <hr />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, voluptate. Natus tenetur excepturi suscipit aliquam debitis hic corrupti necessitatibus blanditiis cupiditate totam nihil nisi quod vitae ullam praesentium, voluptate neque?</p>
                    <p><span className="bold blueviolet">Placement: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure ab voluptatum rerum tenetur laboriosam dolor quibusdam nam mollitia libero ipsum magni eligendi porro nulla, ea iusto dolorum laudantium ad?</p>
                    <p><span className="bold blueviolet">Feeding: </span> A, consectetur molestias officia et expedita reprehenderit officiis eum dolore aliquam voluptatem, maiores ea. Asperiores adipisci beatae minima blanditiis quos obcaecati, architecto vel nam minus iure ipsam quas tempore illo!</p>
                    <p ><span className="bold blueviolet">Lighting & Flow Requirements: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur tenetur pariatur quae at aut et veritatis, modi nihil incidunt blanditiis optio nostrum dolor quas quos unde fuga voluptatem obcaecati quasi!
                        Eos dolor sed voluptatem ullam tempore nisi facere deserunt eveniet maxime architecto incidunt iure perspiciatis fugit repudiandae, in sunt temporibus. Modi natus ab molestiae aspernatur dicta ipsam, architecto eveniet libero.
                        Ad, delectus sed tenetur asperiores reprehenderit vel numquam optio odio sapiente voluptates iure vero, hic quod ratione culpa veritatis modi. Excepturi ullam sequi voluptatibus mollitia delectus, rerum aspernatur praesentium voluptate!
                        Minus sit mollitia error culpa odit labore nam sed vitae totam consequuntur rem quos voluptate itaque, quasi nemo repudiandae corrupti natus iure est, ut laudantium. A autem voluptatem earum numquam! </p>
                </div>
                <Modal
                    display={modalDisplay}
                    species="Tridacna squamosa"
                    imageUrl={activeImage}
                    setDisplay={setModalDisplay}
                    images={imageArray}
                />
            </section>
            <hr className={classes["middle-hr"]} />
            <section className={classes["additional-info"]}>
                <ul onClick={onAddInfoClick}>
                    <li>
                        <span className={classes[infoClass.main]}>Description</span>
                    </li>
                    <li>
                        <span className={classes[infoClass.sec]}>Addition Information</span>
                    </li>
                </ul>
                <div className={classes["description"]} style={{ "display": !addInfoDisplay ? "block" : "none" }}>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quos vel, placeat veritatis temporibus saepe beatae nobis, vero animi aut tempore perspiciatis consequatur sint, inventore quas corporis blanditiis id?
                    </p>
                    <ul>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i> Species - Labidochromis Caeruleus</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i>   Common Name - Electric Yellow</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i>  Origin - Lake Malawi</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i>  Diet - Omnivore</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i> PH Range - Alkaline</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i>  Water Type - Hard</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i> Temperature - Tropical 24°c - 26°c</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i> Breed Type- Mouth brooder</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i> Current Size - approximately 5cm (Grows to approximately 10cm)</p>
                        </li>
                        <li>
                            <p><i class="fa-solid fa-fish-fins"></i>  Sex - Un-sexed</p>
                        </li>
                    </ul>
                </div>
                <div className={classes["add-info"]} style={{ "display": addInfoDisplay ? "block" : "none" }} >
                    <table>
                        <tr>
                            <td className="blueviolet bold">WEIGHT</td>
                            <td>0.1 kg</td>
                        </tr>
                        <tr>
                            <td className="blueviolet bold">DIMENSIONS</td>
                            <td>5 x 5 x 5 cm</td>
                        </tr>
                        <tr>
                            <td className="blueviolet bold">CARE LEVEl</td>
                            <td>Easy</td>
                        </tr>
                    </table>
                </div>
            </section>
            <hr className={classes["middle-hr"]} />
            <section className={classes["related-items"]}>
                <h2>You May ALso Like</h2>
                <div className={classes["inner-wrapper"]}>
                    <div className={classes.card}>
                        <div className={classes["img-wrapper"]}>
                            <img src="https://www.freshnmarine.com/cdn/shop/products/371885.jpg?v=1470937504" alt="" />
                        </div>
                        <div className={classes["card-info-wrapper"]}>
                            <p>Balistoides conspicillum</p>
                            <p className="bold blueviolet">$260</p>
                            <button className="purple-btn">Add to Cart</button>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes["img-wrapper"]}>
                            <img src="https://coralandfishstore.nl/modules/wkwebp/views/img/product/13102-home_default.webp" alt="" />
                        </div>
                        <div className={classes["card-info-wrapper"]}>
                            <p>Pseudanthias pleurotaenia</p>
                            <p className="bold blueviolet">$80</p>
                            <button className="purple-btn">Add to Cart</button>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes["img-wrapper"]}>
                            <img src="https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_E_una_specie_ermafrodita_proterogina_con_femmine_cioe_che_possono_diventar_maschi_invecchiando_c_Giuseppe_Mazza.jpg" alt="" />
                        </div>
                        <div className={classes["card-info-wrapper"]}>
                            <p>Panulirus vesicolor</p>
                            <p className="bold blueviolet">$220</p>
                            <button className="purple-btn">Add to Cart</button>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes["img-wrapper"]}>
                            <img src="https://shrimplovers.com.au/upload/modules/cart/product/originals/1413/decorator-urchin-shrimplovers.jpg" alt="" />
                        </div>
                        <div className={classes["card-info-wrapper"]}>
                            <p>Tripneustes gratilla</p>
                            <p className="bold blueviolet">$110</p>
                            <button className="purple-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </section >

    )
}

export default Detail;