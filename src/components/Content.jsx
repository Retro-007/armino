import React, { useEffect, useRef } from 'react'
import SmileyStudio from '../ContentElements/SmileyStudio'
import CurvedText from '../ContentElements/curvedText'
import CurvedImage from '../ContentElements/CurvedImage'
import EmailSecion from '../ContentElements/EmailSecion'
import gsap from 'gsap'

const Content = () => {
    const curvedRef = useRef(null);
    const emailRef = useRef(null);
    useEffect(() => {
        const object = curvedRef.current;

        // Set the initial position and scale
        gsap.set(object, { y: 300, scaleY: 0 });

        // Create the standing-up animation
        gsap.to(object, {
            duration: 3, // Animation duration in seconds
            y: 0,       // Final Y position (standing up)
            scaleY: 1,  // Final scale in Y (1 = normal size)
            ease: 'elastic.out(1, 0.5)' // Easing function
        });


        const tl = gsap.timeline();

        tl.set(emailRef.current, { opacity: 0, y: 50 }); // Start from opacity 0 and 50px below its normal position

        tl.to(emailRef.current, {
            opacity: 1,
            y: 0, // Move to its normal position
            duration: 1,
            ease: 'power2.out',
        });

        tl.play();

    }, []);

    return (
        <React.Fragment>
            <div className='content-s'>

                <div className='relative pt-40 content-body '>
                    <div className='relative pb-73'>

                        <div className='absolute top-0 left-0 w-full h-full'>
                            <div className='relative flex flex-row justify-center h-full perspective upper-row'>

                                <SmileyStudio />

                                <div className='absolute top-0 left-0 w-full fake-div bg-beige'></div>
                                <div className='curved-background ' ref={curvedRef}>

                                    <CurvedText />

                                    <CurvedImage />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={emailRef} className='relative z-50 flex flex-col items-center justify-center leading-none text-md top-decrease bg-primary-color '>
                        <span className='text-center ease-in-out-anim text-width-responsive' style={{ fontFamily: "KobeWeb-Regular", }}>
                            With passionate creatives
                        </span>
                        <span className='text-center ease-in-out-anim text-width-responsive' style={{ fontFamily: "KobeWeb-Regular", }}>
                            striving to create uniqueness.
                        </span>
                    </div>

                    <div className='relative z-50 flex flex-row justify-center bg-primary-color' >
                        <img src='https://chungiyoo.com/img/arrow-small.svg' className='arrow-img animate-bounce ' />
                    </div>
                    <div
                        className='relative z-50 flex flex-row justify-center pb-5 bg-primary-color pad-10'>
                        <span ref={emailRef} className='subpixel-antialiased ease-in-out-anim' style={{ fontFamily: 'Voyage-Regular', fontSize: "15vmin" }}>
                            If you like mails
                        </span>
                    </div>
                    <EmailSecion />

                </div>


            </div>

        </React.Fragment >
    )
}

export default Content