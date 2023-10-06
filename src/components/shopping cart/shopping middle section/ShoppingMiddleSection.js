import ShoppingTable from "../shopping table/ShoppingTable";
import ShoppingTotal from "../shopping total/ShoppingTotal";
import classes from "./ShoppingMiddleSection.module.css";

function ShoppingMiddleSection(){   
     
    return(
        <div className={classes["middle-section"]}>
            <ShoppingTable/>
            <ShoppingTotal/>
        </div>
    )
}

export default ShoppingMiddleSection;