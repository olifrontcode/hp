
// react
import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// img
import left_curtain from "../pics/left_curtain.png";
import right_curtain from "../pics/right_curtain.png";
import flip4u from '../pics/flip4u.jpeg';
import { useState } from "react";
import Letter from "./Letter";

function Theater() {

    const [showLetter, setShowLetter] = useState(false);

    const curtainContainer_ref = useRef(null)
    const curtainLeft_ref = useRef(null);
    const curtainRight_ref = useRef(null);
    const flip4u_ref = useRef(null);

    const openLetter = () => {
        const tl = gsap.timeline();

        tl.to(flip4u_ref.current, {
            rotateY: "+= 2070",
            transformOrigin: 'center center',
            duration: 2,
            ease: 'bounce'
        })

        setTimeout(() => {
            setShowLetter(true);
        }, 2000);
    }

    useGSAP(() => {
        if(!curtainContainer_ref.current) return

        const curtain = gsap.timeline({
            scrollTrigger: {
                trigger: curtainContainer_ref.current,
                start: 'top center',
                toggleActions: 'play none none reverse'
            }
        })

        curtain.to(curtainLeft_ref.current, {
            xPercent: -100,
            duration: 1.5,
            ease: 'power2.inOut'
        })

        curtain.to(curtainRight_ref.current, {
            xPercent: 100,
            duration: 1.5,
            ease: 'power2.inOut'
        })

       curtain.fromTo(flip4u_ref.current, {
            rotateY: 90,
            transformOrigin: 'center center'
       }, {
        rotateY: 0,
        duration: 1
       }) 
    }, [])

    return (
        <div ref={curtainContainer_ref} className="curtainContainer">
            <div ref={curtainLeft_ref} className="curtain_left">
                <img src={left_curtain} alt="hagowarts left curtain" />
            </div>
            <div ref={curtainRight_ref} className="curtain_right">
                <img src={right_curtain} alt="hagowarts right curtain" />
            </div>

            {
                showLetter
                ?
                    <Letter />
                :
                    <img 
                        ref={flip4u_ref}
                        src={flip4u} 
                        alt="hagowarts letter" 
                        className="flipLetter pointer"
                        onClick={openLetter}
                    />
            }
            
        </div>
    )
}

export default Theater