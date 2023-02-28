import React, { useEffect } from 'react'
import './Hero.css'
import header from '../img/photo-grid.png'
import AOS from 'aos'

export default function Hero() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section className="Hero">
            <img
                className="main-image"
                src={header}
                alt="Several tiles of images of cultural experiences"
                data-aos="fade-left"
            />
            <div className="description">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}
