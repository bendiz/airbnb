import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Card from './components/Card'
import swimmer from './img/katie-zaferes.png'
import weddingPhoto from './img/pexels-rocsana-nicoleta-gurza-948185.jpg'
import biker from './img/pexels-carissa-rogers-1504207.jpg'
import studioPhoto from './img/pexels-cottonbro-studio-4629627.jpg'

function App() {
    const createCards = () => {
        const cards = array.map((n) => (
            <Card
                rating={rating[n]}
                description={description[n]}
                price={price[n]}
                image={image[n]}
            />
        ))
        return <div className="card-components">{cards}</div>
    }
    const array = [0, 1, 2, 3]
    const rating = [5.0, 5.0, 4.8, 3.2]
    const price = [136, 125, 50, 99]
    const description = [
        'Life lessons with Katie Zaferes',
        'Learn Wedding Photography',
        'Group Mountain Biking',
        'Photoshoot at location',
    ]
    const image = [swimmer, weddingPhoto, biker, studioPhoto]

    return (
        <div className="App">
            <Navigation />
            <Hero />
            <div className="cards">{createCards(array)}</div>
        </div>
    )
}

export default App
