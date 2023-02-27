import './Card.css'
export default function Card(props) {
    return (
        <section className="Card">
            <div className="CardBody">
                <figure>
                    <img
                        src={props.image}
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
                            {props.rating.toFixed(1)}
                            <span className="grey"> (6) • USA</span>
                        </p>
                    </div>
                    <p className="description">{props.description}</p>
                    <p>
                        <strong>From ${props.price}</strong> / person
                    </p>
                </div>
            </div>
        </section>
    )
}
