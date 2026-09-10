import { useState } from "react"
import pads from "./pads"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color"
     *    properties yet)
     */

    const [padsBtn, setPadsBtn] = useState([pads])

    const padsEl = padsBtn.map(pad => (
        <button key={pad.id} style={{background: pad.color}}></button>
    ))
    return (
        <main>
            <div className="pad-container">
                {padsEl}
            </div>
        </main>
    )
}
