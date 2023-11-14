import classes from "./UserProfile.module.css";

function UserProfile({ user }) {

    return (
        <div className={classes["profile-wrapper"]}>
            <div className={classes["user-info"]}>
                <h1>User Profile</h1>
                <div className={classes["inner-info"]}>                    
                    <p><span className="bold">First name:</span>   </p>
                    <p><span className="bold">Last name:</span>  </p>
                    <p><span className="bold">Email:</span> {user.email}</p>
                    <p><span className="bold">Card information:</span>  </p>
                </div>
            </div>
            <button className="purple-btn">Sign Out</button>
        </div>
    )
}

export default UserProfile;