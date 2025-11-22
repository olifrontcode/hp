// react
import { useRef } from 'react'

// img
import owlImg from '../pics/owl.png'

// gsap
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// helper
import { moveOwl, rotateOwl } from '../helper/owlMotion';

function Welcome() {

    const owlRef = useRef(null);

    const mainAnimation = (tl, from) => {
        tl.from(owlRef.current, {
            x: from,
            duration: 2,
            ease: "bounce"
        });

        tl.to(owlRef.current, moveOwl([
            { x: -150, y: 80 },
            { x: -300, y: 20 },
        ], 1, 2, "bounce.in"))

        tl.to(owlRef.current, {
            scaleX: -1,
            motionPath: {
                path: [
                    { x: -300, y: 0 },
                ],
                curviness: 1,
            },
            duration: 1,
        })

        tl.to(owlRef.current, moveOwl([
            { x: -300, y: -50 },
            { x: 100, y: -50 },
            { x: 130, y: 0 },
        ], 1, 3.5, "power1.inOut"))

        tl.to(owlRef.current, rotateOwl(1 , "power1.inOut"))

        tl.to(owlRef.current, moveOwl( [{ x: -50, y: -30 }] , 1, 2, "power1.inOut"))

        tl.to(owlRef.current, {
            scaleX: -1,
            ease: "power1.inOut"
        })
    }

    const moveAgain = () => {
        if(!owlRef.current) return;

        const tl = gsap.timeline();
        
        tl.to(owlRef.current, rotateOwl(-1 , "power1.inOut"))

        tl.to(owlRef.current, {
            x: 2000,
            y: 0,
            duration: 4,
            ease: 'power2.out'
        })

        tl.to(owlRef.current, rotateOwl(1 , "power1.inOut"))

        setTimeout(() => {
            mainAnimation(tl, 2000);
        }, 1000);
    }

    useGSAP(() => {
        if(!owlRef.current) return;
        const tl = gsap.timeline();
        mainAnimation(tl, 400);
    }, [])

    return (
        <header className="welcomeHolder">
            <h1>
                Welcome
            </h1>
            <img 
                ref={owlRef} 
                width={50} 
                src={owlImg} 
                alt="flying owl" 
                onClick={moveAgain}
                className='pointer'
            />
        </header>
    )
}

export default Welcome