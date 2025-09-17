import './App.css'
import LuckyN from './LuckyN'
import { greaterThan12, allSameVAl, evenScore } from "./winCheck"
import BoxGrid from './BoxGrid'

function App() {

  return (
    <>
      {/* <LuckyN key="lucky1" numDice={3} winCheck={greaterThan12} gameName='Greater than 12' /> */}
      <BoxGrid />
    </>
  )
}

export default App
