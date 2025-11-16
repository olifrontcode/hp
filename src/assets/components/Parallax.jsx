
// react
import { useRef } from 'react';

// gsap
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// img
import gryffindor from '../pics/g1.jpg';
import hufflepuff from '../pics/h.jpg';
import ravenclaw from '../pics/r.jpg';
import slytherin from '../pics/s.jpg';


function Parallax() {

    const slideRef = useRef([]);

    const contnet = [
        {
            img: gryffindor,
            title: 'Courage',
            subtitle: "There's a fire in your hands."
        },
        {
            img: hufflepuff,
            title: 'Kindness',
            subtitle: "There's the sunlight in your heart."
          },
          {
            img: ravenclaw,
            title: 'Wisdom',
            subtitle: "There's Utopia in your minds."
          },
          {
            img: slytherin,
            title: 'F YOU',
            subtitle: "You have nothing, I hate you."
          },
    ]

    useGSAP(() => {
        if(!slideRef.current.length) return;

        slideRef.current.forEach((element) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    toggleActions: 'play none none reset',
                },
                opacity: 0,
                duration: 3,
                scale: 0.8
            })
        })

    }, [])

    return (
        <>
            {
                contnet.map((item, index) => {
                    return(
                        <div key={item.title} className="slide">
                            <div className="slide-bg" style={{backgroundImage: `url(${item.img})`}}></div>
                            <div className="slide-overlay"></div>
                            <div ref={(element) => slideRef.current[index] = element} className="slide-content">
                                <h3 className="slide-title">
                                    { item.title }
                                </h3>
                                <p className="slide-subtitle">
                                    { item.subtitle }
                                </p>
                            </div>
                    </div>
                    )
                })
            }
            
        </>
    )
}

export default Parallax