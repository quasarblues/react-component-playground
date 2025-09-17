import { useState } from "react";
import Box from "./Box";
import "./BoxGrid.css";

export default function BoxGrid() {
    const [boxes, setBoxes] = useState(Array.from({ length: 9 }, (_, i) => (
        { id: i, isActive: false }
    )));

    const toggleIsActive = (i) => {
        setBoxes(boxes.map(box => {
            if (box.id === i) {
                return { ...box, isActive: !box.isActive };
            } else {
                return box;
            }
        }))
    }

    return (
        <>
            <div className="BoxGrid">
                {boxes.map((box, i) => (
                    <span key={i}><Box toggleIsActive={() => toggleIsActive(box.id)} isActive={box.isActive} /></span>
                ))}
            </div>
        </>
    )
}