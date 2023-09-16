import React from 'react'
import playground from "../assets/svg/playground.svg"

const PlayGround = () => {
    return (
        <React.Fragment>
            <div className='rotate-star'>
                <img src={playground} className='playground-image' alt='playground' />
            </div>
        </React.Fragment>
    )
}

export default PlayGround