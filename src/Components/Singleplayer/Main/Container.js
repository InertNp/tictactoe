import { Button } from "./Button"
import { useState } from "react"
import { arr ,rules ,reload } from '../../../Rules/Rules'
export const Container = () => {

    const [icon, SetIcon] = useState(true)
    const [click , SetClick] = useState(0);
    const handleChangeIcon = () => {
        if (icon === true) {
            SetIcon(false)
        }
        else if (icon === false) {
            SetIcon(true)
        }
        else {
            console.log("error")
        }
    }
    const handleIncreaser = () => {
        SetClick(click+1)
    }

    if(click >= 4){
        rules();
        console.log(click)
        if(click >= 9){
            reload();
        }
    }

    return <div className="container">
        {arr.map((n) => {
            return <Button externalIcon={icon} changeIcon={handleChangeIcon} key={n.id}
                value={(e) => {n.icon = e}}
                clickIncreaser={handleIncreaser}
                />
        })}
    </div>
}
