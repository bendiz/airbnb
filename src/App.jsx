import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Card from './components/Card'
import swimmer from './img/katie.jpg'
import weddingPhoto from './img/pexels-rocsana-nicoleta-gurza-948185.jpg'
import biker from './img/pexels-carissa-rogers-1504207.jpg'
import studioPhoto from './img/pexels-cottonbro-studio-4629627.jpg'
import monkey from './img/pexels-pixabay-38280.jpg'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <div className="cards">{createCards(array)}</div>
        </div>
    )
}
const createCards = () => {
    /**
     * Creates cards displaying different information
     * loops over the prop items in an object
     */

    const cards = array.map((n) => (
        <Card
            rating={rating[n]}
            description={description[n]}
            price={price[n]}
            image={image[n]}
            key={n}
        />
    ))
    return <div className="card-components">{cards}</div>
}
const array = [0, 1, 2, 3, 4]
let experiences = {
    rating: [5.0, 5.0, 4.8, 3.2, 4.6],
    price: [136, 125, 50, 99, 39],
    description: [
        'Life lessons with Katie Zaferes',
        'Learn Wedding Photography',
        'Group Mountain Biking',
        'Photoshoot at location',
        'Go on a safari',
    ],
    image: [swimmer, weddingPhoto, biker, studioPhoto, monkey],
}
const { rating, price, image, description } = experiences

export default App
