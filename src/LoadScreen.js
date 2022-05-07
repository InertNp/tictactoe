import { Main } from './Components/Singleplayer/Main'
import { useState } from "react"
import './Styles/loadscreen.css'
export function LoadScreen() {
    const [selected, setSelected] = useState("")
    if (selected === ""){
    return <main>
        <SelectScreen onclick = {() => setSelected("Main")} />
    </main>
    }
    else{
        return <main>
        <Main />
    </main>
    }

}

function SelectScreen({onclick}) {
    return <div className="select">
        <button className='single' onClick={onclick}>Singleplayer</button>
        {/* <button>Multiplayer</button> */}
    </div>
}

