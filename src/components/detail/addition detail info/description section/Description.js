import classes from "../AdditionalInfo.module.css"

function Description({ species, addInfoDisplay }) {
    return (
        <div className={classes["description"]} style={{ "display": !addInfoDisplay ? "block" : "none" }}>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quos vel, placeat veritatis temporibus saepe beatae nobis, vero animi aut tempore perspiciatis consequatur sint, inventore quas corporis blanditiis id?
            </p>
            <ul>
                <li>
                    <p><i className="fa-solid fa-fish-fins"></i> {species ? `Species -${species}` : `Color : some color`}</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-fish-fins"></i> {species ? `Common Name - Electric Yellow` : `Brand : some brand`}</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-fish-fins"></i> {species ? `Origin - Lake Malawi` : `Theme: Fairy`} </p>
                </li>
                <li>
                    <p><i className="fa-solid fa-fish-fins"></i> {species ? `Diet - Omnivore` : `Material: Resin`} </p>
                </li>
                <li>
                    <p><i className="fa-solid fa-fish-fins"></i> {species ? 'PH Range - Alkaline' : 'Style: Hobbit-Small'} </p>
                </li>
                <li style={{ "display": species ? "block" : "none" }}>
                    <p><i className="fa-solid fa-fish-fins"></i>  Water Type - Hard</p>
                </li>
                <li style={{ "display": species ? "block" : "none" }}>
                    <p><i className="fa-solid fa-fish-fins"></i> Temperature - Tropical 24°c - 26°c</p>
                </li>
                <li style={{ "display": species ? "block" : "none" }}>
                    <p><i className="fa-solid fa-fish-fins"></i> Breed Type- Mouth brooder</p>
                </li>
                <li style={{ "display": species ? "block" : "none" }}>
                    <p><i className="fa-solid fa-fish-fins"></i> Current Size - approximately 5cm (Grows to approximately 10cm)</p>
                </li>
                <li style={{ "display": species ? "block" : "none" }}>
                    <p><i className="fa-solid fa-fish-fins"></i>  Sex - Un-sexed</p>
                </li>
            </ul>
        </div>
    )
}

export default Description;