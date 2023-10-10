import classes from './Message.module.css'
import { useRef } from 'react';

function Message({ message }) {

    const date = new Date();
    const currTime = useRef(`${date.getHours()}:${date.getMinutes()}`);

    return (
        <div className={classes["message-wrapper"]}>
            <div className={classes.message}>
                <div>
                    <p>{message}</p>
                </div>
                <p>You ~ {currTime.current}</p>
            </div>
        </div>
    )
}

export default Message;