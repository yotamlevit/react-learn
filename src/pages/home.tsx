import React from 'react';
import { ReactComponent as AppLogo } from './logo.svg';
import logoGif from './giphy.gif'


function Home() {
    return (
        <div className='=App'>
            <img src={logoGif} alt="Gif" />
        </div>
    )
}


export default Home
