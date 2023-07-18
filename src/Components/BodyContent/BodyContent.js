import React from 'react'
import './BodyContent.css'
import Poster from '../Poster/Poster'
function BodyContent({ windowWidth }) {
    return (
        <div className='bg-dark d-flex flex-column pt-3' style={{ marginTop: '70px'}}>
            <div className="BodyContent d-flex flex-column align-items-start p-4">
                <div className="headingDiv p-3">
                    <h1 className='heading'>Only on Netflix</h1>
                </div>
                <div className="discriptionDiv p-3" style={{maxWidth:'560px'}}>
                    <p className="discription">
                        Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you.
                    </p>
                </div>
            </div>
            <div className="posters">
                <Poster windowWidth={windowWidth} />
            </div>
            <div className="posters">
                <Poster windowWidth={windowWidth} />
            </div>
            <div className="posters">
                <Poster windowWidth={windowWidth} />
            </div>
            <div className="posters" style={{ backgroundImage: 'linear-gradient(to bottom,#333, #000000)' }}>
                <Poster windowWidth={windowWidth} isBlur/>
            </div>
            <div className="posters pb-5" style={{ backgroundImage:'linear-gradient(to bottom, #000000, #000000)'}}>
                <Poster windowWidth={windowWidth} isBlur2/>
            </div>
        </div>
    )
}

export default BodyContent
