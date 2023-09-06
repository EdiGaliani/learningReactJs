// CSS
import './App.css';

// React

// Data
import { wordsList } from './data/words';
import { useState } from 'react';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    // Pick a Random Category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]
    console.log(category)

    // Pick a Random Word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return { word, category }
  }

  // Starts the Secret Word Game
  const startGame = () => {
    // Pick Word and Pick Category
    const {word, category} = pickWordAndCategory()

    // Create an array of letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())


    console.log(word, category)
    console.log(wordLetters)

    // Fill States
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  // Process The Letter Input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
    

    
    