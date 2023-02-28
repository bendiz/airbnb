import React, { useEffect } from 'react'
import './Card.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Card(props) {
    let badgeText = undefined
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="CardBody " data-aos="fade-up">
            <figure>
                <img
                    src={`/src/img/${props.coverImg}`}
                    alt={props.description}
                />
                {badgeText && <span className="availability">{badgeText}</span>}
            </figure>
            <div className="information">
                <div className="rating">
                    <img
                        src="/src/img/star.png"
                        alt="A star icon"
                        className="star-icon"
                    />
                    <p className="rating-text">
                        {props.stats.rating}
                        <span className="grey">
                            {' '}
                            ({props.stats.reviewCount}) • {props.location}
                        </span>
                    </p>
                </div>
                <p className="description">{props.title}</p>
                <p>
                    <strong>From ${props.price}</strong> / person
                </p>
            </div>
        </div>
    )
}
