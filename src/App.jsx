import './App.css'
import Card from './components/card'

function App() {
 

  return (
    <div className='main'>
      <Card name="Samsung 8" price={300} description="Very nice phone" inStock={320} />
      <Card name="Iphone 10" price={800} description="Very expensive phone" inStock={3} />
      <Card name="Vivo 8" price={100} description="Very cheap phone" inStock={40} />
      <Card name="Motorola 2" price={900} description="Very old phone" inStock={10} />

    </div>
  )
}

export default App
