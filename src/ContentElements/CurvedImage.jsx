import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CurvedImage = () => {
    const scaleRef = useRef(null);

    useEffect(() => {
        const object = scaleRef.current;

        // Create a function to handle the scaling animation
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Adjust the scale factor based on the scroll position
            const scale = 1 + scrollY * 0.001;
            if (scale < 1.2) {

                // Use GSAP to animate the scale of the object
                gsap.to(object, {
                    scale: scale,
                    duration: 0.5, // Animation duration in seconds
                });
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <div className='flex flex-row justify-center curved-image'
                ref={scaleRef}
            >
                <img
                    className='curved-img'
                    src='https://images.ctfassets.net/8b1jz4cf6kyy/DFViCTj7kZvz7vKa9MXPi/05563fe4ae894a10925311a6e6bc2a81/Swimming.svg?w=480&fl=progressive&q=92' />
            </div>

        </React.Fragment>
    )
}

export default CurvedImage