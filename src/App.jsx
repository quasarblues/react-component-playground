import './App.css'
import LuckyN from './LuckyN'
import { greaterThan12, allSameVAl, evenScore } from "./winCheck"

function App() {

  return (
    <>
      <LuckyN key="lucky1" numDice={3} winCheck={greaterThan12} gameName='Greater than 12' />
      <LuckyN key="lucky2" numDice={2} winCheck={allSameVAl} gameName='Get the same Number' />
      <LuckyN key="lucky3" numDice={3} winCheck={evenScore} gameName='Even Score' />
    </>
  )
}

export default App
