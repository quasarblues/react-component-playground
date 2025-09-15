import "./Button.css"

export default function Button({ func }) {
    return <button className="Button" onClick={func}>Roll Again!</button>
}
