import { IoMdCheckmark } from "react-icons/io";

const Content = () => {

    return (
        <>
        <div className="content-box">
            <div className="main-content">
                <p className="battle-text">Battle Ground India</p>
                <p className="play-text">Playground!</p>
                    <ul className="features">
                        <li>
                            <div className="list">
                                <IoMdCheckmark className="tick" />
                                <p className="list-content">Free Royal Pass</p>
                            </div>
                        </li>
                        <li>
                            <div className="list">
                                <IoMdCheckmark className="tick" />
                                <p className="list-content">Erangel Sanhok</p>
                            </div>
                        </li>
                        <li>
                            <div className="list">
                                <IoMdCheckmark className="tick" />
                                <p className="list-content">Enemies ahead</p>
                            </div>
                        </li>
                    </ul>
                    <div className="price">
                        <p>From <span style={{textDecoration: "line-through"}}>&#8377;399</span> <span style={{color: "#90c", fontWeight: "bolder", fontSize: "1.3rem"}}>&#8377;0</span></p>
                    </div>
                    <div className="btn">
                        <button onClick={() => console.log("Cheese")}>Start Free Trail</button>
                    </div>
                    <p className="footer">&copy; ROLEXSERNFT</p>
            </div>
        </div>
        </>
    )
}

export default Content