import React, { useRef, useState } from 'react'

function Lumos() {

    const lumosRef = useRef(null);

    const [txt, setTxt] = useState({
        step: 0,
        list: ['Lumos', 'Hello', 'Who i am?', 'I am Tom,', 'why?', 'whyyyyyy?', 'like a whisper?', 'whissssperrrr']
    })

    const handleMouse = (e) => {
        if(!lumosRef.current) return;

        lumosRef.current.style.background =`
            radial-gradient(
            circle at ${e.clientX}px ${e.clientY}px, 
            rgba(255, 255, 150, 0.2) 20px, 
            rgba(0, 0, 0, 0.95) 200px)
        `
    }

    const changeTxt = () => {
        setTxt(prev => {
            if(prev.step < prev.list.length) {
                return {
                    ...prev,
                    step: prev.step + 1
                }
            }
        })
    }

    return (
        <div ref={lumosRef} className='lumos pointer' onMouseMove={handleMouse}>
            <span className='secret-txt' onClick={changeTxt}>
                { txt.list[txt.step] }
            </span>
        </div>
    )
}

export default Lumos