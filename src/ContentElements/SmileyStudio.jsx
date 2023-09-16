import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const SmileyStudio = () => {

    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        // Use GSAP to create the animation
        gsap.from(element, {
            opacity: 0,       // Example opacity value
            rotation: 0,      // Example rotation value (in degrees)
            scale: 0,         // Example scale value
            ease: "power2.inOut" // Easing function (optional)
        });
        gsap.to(element, {
            opacity: 1,       // Example opacity value
            rotation: 360,      // Example rotation value (in degrees)
            scale: 1,         // Example scale value
            duration: 3,        // Duration of the animation in seconds
            ease: "power2.inOut" // Easing function (optional)
        });
    }, []);

    return (
        <React.Fragment>
            <div ref={elementRef} className='smiley-studio ease-in-out-anim' style={{ opacity: '1' }}>
                <img src='https://chungiyoo.com/img/faces/smile%2002.svg' className=' swing-smiley' />
            </div>
        </React.Fragment>
    )
}

export default SmileyStudio