import Image from "next/image"

import Developer from '../public/developer-1.png'

export default function Hero () {
    return (
        <section className="hero__container">
            <div className="hero__container-text">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consequuntur cum sequi autem dolor obcaecati magnam molestiae mollitia fugiat adipisci.</p>
            </div>
            <div className="hero__container-img">
            <Image 
                    src={Developer}
                    alt="developer-1"
                    className="dev-img"
                />
            </div>
        </section>
        
    )
}