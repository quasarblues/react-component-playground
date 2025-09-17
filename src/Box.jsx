import "./Box.css"

export default function Box({ toggleIsActive, isActive }) {
    return <div
        className="Box"
        style={{ backgroundColor: isActive ? 'red' : 'black' }}
        onClick={toggleIsActive}>
    </div>
}