import './Card.css'
export default function Card() {
    return (
        <section className="Card">
            <div className="CardBody">
                <figure>
                    <img
                        src="src/img/katie-zaferes.png"
                        alt="An image of Katie Zaferes in her swimsuit with googles and a cap"
                    />
                    <span className="availability">SOLD OUT</span>
                </figure>
                <div className="information">
                    <div className="rating">
                        <img
                            src="src/img/star.png"
                            alt="A star icon"
                            className="star-icon"
                        />
                        <p className="rating-text">
                            5.0 <span className="grey">(6) • USA</span>
                        </p>
                    </div>
                    <p className="description">
                        Life lessons with Katie Zaferes
                    </p>
                    <p>
                        <strong>From $136</strong> / person
                    </p>
                </div>
            </div>
        </section>
    )
}
