import Die from "./Die"
import "./Dice.css"

function Dice({ dice = [1, 4], color = 'slateblue' }) {
    return (
        <section className="Dice">
            {dice.map((v, i) => (
                <Die key={i} val={v} color={color} />
            ))}
        </section>
    )
}

export default Dice