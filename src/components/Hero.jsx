import './Hero.css'
export default function Hero() {
    return (
        <div className="Hero">
            <img
                className="main-image"
                src="src/img/photo-grid.png"
                alt="Several tiles of images of cultural experiences"
            />
            <section className="description">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </section>
        </div>
    )
}
