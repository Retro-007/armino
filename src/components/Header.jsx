import React from 'react'
import Logo from '../HeaderElements/Logo'
import Menubar from '../HeaderElements/Menubar'
import PlayGround from '../HeaderElements/PlayGround'

const Header = () => {
    return (
        <React.Fragment>
            <div className='fixed top-0 z-10 flex items-center content-center justify-between flex-auto w-full p-12 flex-column md:flex-row '>
                <div className='w-10 transition duration-300 ease-in-out delay-150 ease-in-out-anim hover:-translate-y-1 hover:scale-110 '>
                    <Logo />
                </div>
                <div className=' shrink basis-0 ease-in-out-anim'>
                    <Menubar />
                </div>
                <div className='flex-none portrait:hidden ease-in-out-anim'>
                    <PlayGround />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header