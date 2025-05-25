import Button from "./button"
import texts from "../text"
import { useState } from "react";


function Menu (props) {
    const [text, setPartext] = useState("PROTERM S.R.L.");
    function handleClick (event) {
            const {value} = event.target;
            console.log(value);
            if (value === "Chi Siamo") {
                setPartext(texts.first);
                } else if (value === "Servizi") {
                   setPartext(texts.second);
                } else if (value === "Info e Contatti") {
                    setPartext(texts.third);
                }
    }
    return (
    <div>
    <div className={props.menuBar}>
        <div></div>
        <Button function={handleClick} buttonName={props.firstElement} />
        <Button function={handleClick} buttonName = {props.secondElement} />
        <Button function={handleClick} buttonName = {props.thirdElement} />
        <div></div>
    </div>
    <p className="text-style-small">
        {text}
    </p>
    </div>
    )
}

export default Menu;