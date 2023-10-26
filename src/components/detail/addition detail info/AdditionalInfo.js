import classes from "./AdditionalInfo.module.css";
import { useState } from "react";
import Description from "./description section/Description";
import AddInfo from "./additional info/AddInfo";
import { useMediaQuery } from "@mui/material";

function AdditionalInfo({ item }) {

    const [infoClass, setInfoClass] = useState({
        main: 'active',
        sec: 'inactive'
    });
    const [addInfoDisplay, setAddInfoDisplay] = useState(0);
    const matches = useMediaQuery("screen and (max-width:500px)");

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
                    <span className={classes[infoClass.sec]}>{matches ? "Additional" : "Additional Information"}</span>
                </li>
            </ul>
            <Description species={item.species} addInfoDisplay={addInfoDisplay} />
            <AddInfo species={item.species} addInfoDisplay={addInfoDisplay} />
        </section>
    )
}

export default AdditionalInfo;

