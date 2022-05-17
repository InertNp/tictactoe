import { Main } from './Components/Singleplayer/Main'
import { useState } from "react"
import './Styles/loadscreen.css'
// will be adding some more features so i left if else statement
export function LoadScreen() {
    const [selected, setSelected] = useState("")
    if (selected === "") {
        return <main>
            <SelectScreen onclick={() => setSelected("main")} vsai={() => setSelected("vsai")} />
        </main>
    }

    else if (selected === "main") {
        console.log(selected)
        return <main>
            <Main />
        </main>
    }
    else {
        console.log(selected)
        return <main>

        </main>
    }
 
}

function SelectScreen({ onclick, vsai }) {
    return <div className="select">
        <button className='single' onClick={onclick}>Singleplayer</button>
        {/* <button className='single' onClick={vsai}>VS AI</button> */}
    </div>
}

