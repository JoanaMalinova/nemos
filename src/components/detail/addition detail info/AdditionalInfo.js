import classes from "./AdditionalInfo.module.css";
import { useState } from "react";

function AdditionalInfo({ item }) {

    const [infoClass, setInfoClass] = useState({
        main: 'active',
        sec: 'inactive'
    });
    const [addInfoDisplay, setAddInfoDisplay] = useState(0);

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

    return (
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
                        <p><i className="fa-solid fa-fish-fins"></i> {item.species ? `Species -${item.species}` : `Color : some color`}</p>
                    </li>
                    <li>
                        <p><i className="fa-solid fa-fish-fins"></i> {item.species ? `Common Name - Electric Yellow` : `Brand : some brand`}</p>
                    </li>
                    <li>
                        <p><i className="fa-solid fa-fish-fins"></i> {item.species ? `Origin - Lake Malawi` : `Theme: Fairy`} </p>
                    </li>
                    <li>
                        <p><i className="fa-solid fa-fish-fins"></i> {item.species ? `Diet - Omnivore` : `Material: Resin`} </p>
                    </li>
                    <li>
                        <p><i className="fa-solid fa-fish-fins"></i> {item.species ? 'PH Range - Alkaline' : 'Style: Hobbit-Small'} </p>
                    </li>
                    <li style={{ "display": item.species ? "block" : "none" }}>
                        <p><i className="fa-solid fa-fish-fins"></i>  Water Type - Hard</p>
                    </li>
                    <li style={{ "display": item.species ? "block" : "none" }}>
                        <p><i className="fa-solid fa-fish-fins"></i> Temperature - Tropical 24°c - 26°c</p>
                    </li>
                    <li style={{ "display": item.species ? "block" : "none" }}>
                        <p><i className="fa-solid fa-fish-fins"></i> Breed Type- Mouth brooder</p>
                    </li>
                    <li style={{ "display": item.species ? "block" : "none" }}>
                        <p><i className="fa-solid fa-fish-fins"></i> Current Size - approximately 5cm (Grows to approximately 10cm)</p>
                    </li>
                    <li style={{ "display": item.species ? "block" : "none" }}>
                        <p><i className="fa-solid fa-fish-fins"></i>  Sex - Un-sexed</p>
                    </li>
                </ul>
            </div>
            <div className={classes["add-info"]} style={{ "display": addInfoDisplay ? "block" : "none" }} >
                <table>
                    <tbody>
                        <tr>
                            <td className="blueviolet bold">WEIGHT</td>
                            <td>0.1 kg</td>
                        </tr>
                        <tr>
                            <td className="blueviolet bold">DIMENSIONS</td>
                            <td>5 x 5 x 5 cm</td>
                        </tr>
                        <tr style={{ "display": item.species ? "table-row" : "none" }}>
                            <td className="blueviolet bold">CARE LEVEl</td>
                            <td>Easy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default AdditionalInfo;

