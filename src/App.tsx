import { useState } from "react"
import Block from "./components/Block"
import './App.css'

function App() {

  const [state, setState] = useState(Array(9).fill(null))
  const [currentTurn, setCurrentTurn] = useState('X')

  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [1, 4, 7]
    ]

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i]

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true
      }
    }
    return false
  }

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state)

    if (stateCopy[index] !== null) return

    stateCopy[index] = currentTurn;

    //check winner
    const win = checkWinner(stateCopy)

    if (win) {
      alert(`${currentTurn} won`)
      setState(Array(9).fill(null))
    } else if (!stateCopy.includes(null)) {
      alert('Its a draw');
      setState(Array(9).fill(null))
    } else {
      setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
      setState(stateCopy)
    }


  }

  return (
    <div>
      <h1>Let's play Tic-Tac-Toe</h1>
      <p>The first player will be <span className="player-sign">'X'</span></p>
      <div className="board">
        <div className="row">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>
      </div>
    </div>

  )
}
export default App
