import { useState } from "react";
import { getRolls } from "./utils";
import "./LuckyN.css"
import Dice from "./Dice"

function LuckyN({ numDice = 2, winCheck, gameName }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const win = winCheck(dice);

    function roll() { setDice(getRolls(numDice)) }
    return (
        <main className="LuckyN">
            <h1>{gameName}</h1>
            {win && <h2>You Win 🏆🏆🏆</h2>}
            <Dice dice={dice} />
            <button onClick={roll}>Roll Again!</button>
        </main>
    )
}

export default LuckyN;