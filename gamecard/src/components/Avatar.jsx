import { CgGhostCharacter } from "react-icons/cg";

const Avatar = () => {

    return (
        <>
        <div className="avatar-container">
            <div className="header">
                <CgGhostCharacter style={{
                    fontSize: "28px",
                    color: "#120632"
                }} />
            <div className="title">Wolfie White</div>
            </div>
        </div>
        <div className="pubg-avatar"></div>
        </>
    )
}

export default Avatar