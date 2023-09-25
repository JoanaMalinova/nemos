import classes from "./MediaShare.module.css"

function MediaShare() {

    return (
        <ul className={classes.media}>
            <p>Share:</p>
            <li>
                <i className="fa-brands fa-twitter fa-lg"></i>
            </li>
            <li>
                <i className="fa-brands fa-facebook fa-lg"></i>
            </li>
            <li>
                <i className="fa-brands fa-pinterest fa-lg"></i>
            </li>
            <li>
                <i className="fa-solid fa-envelope fa-lg"></i>
            </li>
        </ul>
    )
}

export default MediaShare;