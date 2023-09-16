import React from 'react'
import { Cross as Hamburger } from 'hamburger-react'

const Menubar = () => {


    return (
        <React.Fragment>
            <div className='rotate-element' >
                <Hamburger

                    direction='right' />
            </div>
        </React.Fragment>
    )
}

export default Menubar