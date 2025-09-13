import { sum } from "./utils"

function greaterThan12(dice) {
    return sum(dice) > 12;
}

function allSameVAl(dice) {
    return dice.every(die => die === dice[0])
}

function evenScore(dice) {
    return (sum(dice) % 2) === 0;
}

export { greaterThan12, allSameVAl, evenScore };