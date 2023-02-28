import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
    const cards = data.map((item) => {
        return <Card id={item.id} {...item} />
    })

    return (
        <div className="App">
            <Navigation />
            <Hero />
            <div className="Card">{cards}</div>
        </div>
    )
}
export default App
