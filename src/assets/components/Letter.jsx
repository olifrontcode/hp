
// react
import { useRef } from 'react'

// img
import letterImg from '../pics/letter.png';

// state
import { letterText } from '../states/quotes';

// gsap
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function Letter() {

    const imgLetterRef = useRef(null);
    const quoteCharRef = useRef(null);

    const randomNumber = getRandomInt(12);
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useGSAP(() => {
        if(!imgLetterRef.current) return;

        const tl = gsap.timeline();

        tl.fromTo(imgLetterRef.current, {
            clipPath: 'inset(0% 0% 75% 0%)' 
        }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 5,
            ease: 'power4.out'
        })

        tl.from(quoteCharRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'power2.in'
        })
    }, [])

    return (
        <>
            <img 
                src={letterImg}
                alt="Hagowarts Letter"
                ref={imgLetterRef}
                className='flipLetter' 
            />

            <div className="openLetter">
                <span className='quote'>
                    { letterText[randomNumber]?.text??"" }
                </span>
                <span ref={quoteCharRef} className='quoteChar'>
                    { letterText[randomNumber]?.person??"" }
                </span>
            </div>
        </>
    )
}

export default Letter