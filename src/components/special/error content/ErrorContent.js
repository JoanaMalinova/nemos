import classes from "./ErrorContent.module.css";

function ErrorContent({ status, title, message }) {
    return (
        <div className={`${classes["error-wrapper"]} blueviolet`}>
            <img src="images/Dory-PNG-Isolated-Pic.png" alt="doryAndMarlin" />
            <div className={classes["inner-error"]}>
                <p>{status}</p>
                <h1 >{title}</h1>
                <hr />
                <h2>{message}</h2>
            </div>
        </div>
    )
}

export default ErrorContent;