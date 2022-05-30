import { useState } from 'react'
import './App.css'
import Card from './components/QuoteBox'
import quotes from './json/quotes.json'


const colorBackground = [
  '#DFF2B4','#E8E544','#88C2F2', '#FB90EC', '#6CE99C', '#ABDAF0'
]

const colorMain = [
  '##4959F1','#54574E','#6D234E', '#AD3109', '#0D171D', '#28148D', '#0F2312', '#60870B', '#000'
]


function App() {

  //Numero Random entre los 102 elementos del array  
  const numberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const i = numberRandom(array)
    return array[i]
  }

  const [quoteRandom, setquoteRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setcolorRandom] = useState(getElementRandom(colorBackground))
  const [colorMainRandom, setcolorMainRandom] = useState(getElementRandom(colorMain))

  const clickButton = () => {
    setquoteRandom(getElementRandom(quotes))
    setcolorRandom(getElementRandom(colorBackground))
    setcolorMainRandom(getElementRandom(colorMain))
  }

  const appStyle = {
    backgroundColor : colorRandom
  }
  const cardStyle = {
    backgroundColor : colorMainRandom
  }

  return (
    <div style={appStyle} className="App">
      <div style={cardStyle} className="quote">
        <Card
          quoteRandom={quoteRandom}
          colorRandom={colorRandom}
          clickButton={clickButton}     
        />
      </div>
    </div>

    
  )
}

export default App
