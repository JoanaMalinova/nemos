import classes from "../AdditionalInfo.module.css";

function AddInfo({ species, addInfoDisplay }) {

    return (
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
                    <tr style={{ "display": species ? "table-row" : "none" }}>
                        <td className="blueviolet bold">CARE LEVEl</td>
                        <td>Easy</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddInfo;

