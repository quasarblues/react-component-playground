import './App.css'
import Dice from './Dice'

function App() {

  return (
    <>
      <h1>The Lucky 7 game</h1>
      <Dice dice={[1, 2, 3]} color='orange' />
      <Dice dice={[1, 2, 3]} />
    </>
  )
}

export default App
