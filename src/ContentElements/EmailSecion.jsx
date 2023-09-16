import gsap from 'gsap';
import React, { useRef } from 'react'

const EmailSecion = () => {

    const spanRefs = useRef([]);

    const animateSpan = (span, delay) => {
        const randomY = Math.random() * (window.innerHeight - 100) + 100; // Generate a random Y-axis position within the viewport
        const randomX = (Math.random() - 0.5) * 20; // Generate a random X-axis position between -10 and 10

        const timeline = gsap.timeline();

        timeline.to(span, {
            opacity: 0,
            y: randomY,
            x: randomX,
            duration: 0.2,
            delay: delay,
        }).to(span, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.2,
        });
    };

    const handleHover = () => {
        const animationTimeline = gsap.timeline();

        // Define the order and delay for falling characters
        const fallingOrder = ['c', 'r', 'm', 'o', 'k', 'i', 'm', 'k', 'a', 'h', 'd', 'r', 'a', 'g', 'k', 'a', 'a', 'n', 'a', 'a', 'n', 'l', 'a', '.', 'a', 'a']



            ;

        fallingOrder.forEach((char, index) => {
            const span = spanRefs.current.find(ref => ref.getAttribute('data-char') === char);
            if (span) {
                animateSpan(span, index * 0.2); // Adjust the delay as needed
                animationTimeline.addPause(0.2); // Adjust the delay between characters falling
            }
        });
    };
    const characters = "kadakkadanraihangmail.com";

    return (
        <React.Fragment>
            <div className='relative z-50 flex flex-col'>

                <div className='flex flex-row items-center justify-center py-5 bg-primary-color'>
                    <div className='p-1 px-5 py-6 border-2 border-black rounded-full md:px-10 md:py-5'>
                        <p
                            onMouseEnter={handleHover}
                            className='text-lg font-medium uppercase break-all md:text-2xl text-break' style={{ fontFamily: "Staff-Medium" }}>

                            {characters.split("").map((char, index) => (
                                <span
                                    key={index}
                                    ref={(el) => (spanRefs.current[index] = el)}
                                    data-char={char}
                                >
                                    {char}
                                </span>
                            ))}
                        </p>
                    </div>

                </div>
                <div className='flex flex-row items-center justify-center py-5 bg-primary-color'>
                    <span className='text-base subpixel-antialiased font-medium text-center md:text-2xl' style={{ fontFamily: "Staff-Medium" }}>
                        IF YOU WANT TO TALK
                        <br />
                        SHOOT ME A MESSAGE FOR DETAILS.
                    </span>

                </div>
            </div>
            {/* <div className='relative z-50 flex flex-row justify-center py-10 talk-to-us bg-primary-color'>

            </div> */}
        </React.Fragment>
    )
}

export default EmailSecion