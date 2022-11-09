import { useState } from "react";
import "./Burger.css"
import Menu from "./Menu";

const Burger = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        (!active) ? setActive(true) : setActive(false);
    }

    return (
        <>
            <div className={`burger ${active ? "opened" : ""}`} onClick={handleClick}>
                <div className={`burger-icon ${active ? "open" : ""}`} onClick={handleClick}>
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
                <Menu />
            </div>
            <div className="overlay" onClick={handleClick}></div>
        </>
    );
}

export default Burger;