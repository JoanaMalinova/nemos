import classes from "./Loader.module.css";

function Loader() {

    return (
        <div className={classes["loader-wrapper"]}>
            <span className={classes.loader}></span>
        </div>
    )
}

export default Loader;


