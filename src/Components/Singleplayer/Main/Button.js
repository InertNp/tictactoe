import { useState } from "react"

export const Button = ({ externalIcon, changeIcon , value , clickIncreaser}) => {
    const [icon, SetIcon] = useState("X")
    const [clicked, SetClicked] = useState(false)
    const [btnVisibitlity, SetVisibility] = useState("hidden");
    const btn = {
        visibility: btnVisibitlity,
    }
    const handleClick = (e) => {
        if (externalIcon === true) {
            SetIcon("X") 
            value("X")
        }
        else {
            SetIcon("O") 
            value("O") 
        }
        SetVisibility("visible");
        SetClicked(true);
        changeIcon();
        clickIncreaser();
    }
    return <div className="grid-item " ><button onClick={handleClick} disabled={clicked}>
        <p style={btn}>{icon}</p>
    </button>
    </div>
}