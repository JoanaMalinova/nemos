import { useRef, useState } from "react";
import classes from "./TextUs.module.css";
import Message from "./message/Message";

function TextUs() {

    const [isClicked, setIsClicked] = useState(false);
    const [formValue, setFormValue] = useState("");
    const messages = useRef([]);
    const date = new Date();
    const currTime = useRef(`${date.getHours()}:${date.getMinutes()}`);

    const onTextUsClick = () => {
        if (isClicked) {
            setIsClicked(false);
        } else {
            setIsClicked(true);
        }
    }

    const onTextSubmit = (ev) => {
        ev.preventDefault();

        if (formValue === "") {
            return
        }

        messages.current = [...messages.current, formValue];
        setFormValue("");
    }

    const onChange = (e) => {
        const { value } = e.target;
        setFormValue(value);
    }

    return (
        <>
            {isClicked &&
                <div className={classes["chat-wrapper"]}>
                    <div className={classes["chat-header"]}>
                        <h4>Contact Us</h4>
                        <p className={classes.logo}>NEMO's</p>
                        <p>We usually reply within the hour.</p>
                        <i className="fa-solid fa-chevron-down fa-sm" onClick={onTextUsClick}></i>
                    </div>
                    <div className={classes["text-section"]}>
                        <div className={classes.chat}>
                            <div className={classes["message-wrapper"]}>
                                <p className={classes.logo}>NEMO's</p>
                                <div className={classes.message}>
                                    <div>
                                        <p>Ask us a question!</p>
                                    </div>
                                    <p>Nemo's ~ {currTime.current}</p>
                                </div>
                            </div>
                            {messages.current.map((curr, i) => <Message key={i} message={curr} />)}
                        </div>
                        <form method="POST" onSubmit={onTextSubmit}>
                            <input
                                type="text"
                                id="text-us"
                                name="text-us"
                                placeholder="Enter your message or question here"
                                onChange={onChange}
                                value={formValue}
                            >
                            </input>
                            <button
                                type="submit"
                                className={classes["send-bttn"]}
                            >
                                <i className="fa-solid fa-location-arrow"></i>
                            </button>
                        </form>
                    </div>
                </div>}

            <div className={classes["text-us-wrapper"]} onClick={onTextUsClick}>
                {isClicked ?
                    <div className={classes["icon-wrapper"]}>
                        <i className="fa-solid fa-xmark fa-lg"></i>
                    </div>

                    :
                    <div className={classes["inner-wrapper"]}>
                        <i className="fa-solid fa-comment-dots fa-flip-horizontal"></i>
                        <span>Text us</span>
                    </div>
                }
            </div>
        </>
    )
}

export default TextUs;