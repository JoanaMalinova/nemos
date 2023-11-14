import classes from "./UserProfile.module.css";
import { signOutUser } from "../../../services/authService";
import { useNavigate } from "react-router-dom";

function UserProfile({ user }) {

    const navigate= useNavigate();
    const userName = user.displayName.split(" ");

    const onSignOut = async ()=>{        
        await signOutUser();
        navigate("/");
    }

    return (
        <div className={classes["profile-wrapper"]}>
            <div className={classes["user-info"]}>
                <h1>User Profile</h1>
                <div className={classes["inner-info"]}>                    
                    <p><span className="bold">First name:</span> {userName[0]}</p>
                    <p><span className="bold">Last name:</span> {userName[1]}</p>
                    <p><span className="bold">Email:</span> {user.email}</p>
                    <p><span className="bold">Shippment information:</span> <button>Add Address</button> </p>
                </div>
            </div>
            <button className="purple-btn" onClick={onSignOut}>Sign Out</button>
        </div>
    )
}

export default UserProfile;