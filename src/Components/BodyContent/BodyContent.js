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
                <Poster windowWidth={windowWidth} item='movie/top_rated' heading ='Top rated'/>
            </div>
            <div className="posters">
                <Poster windowWidth={windowWidth} item='movie/now_playing' heading='Now playing'/>
            </div>
            <div className="posters">
                <Poster windowWidth={windowWidth} item='discover/tv' heading='Up coming'/>
            </div>
            <div className="posters" style={{ backgroundImage: 'linear-gradient(to bottom,  #212529, transparent 0)' }}>
                <Poster windowWidth={windowWidth} isBlur item='discover/movie' heading='tv series'/>
            </div>
            <div className="posters pb-5" style={{ backgroundImage: "linear-gradient(180deg, transparent 0, #181818)"}}>
                <Poster windowWidth={windowWidth} isBlur2 item='movie/popular' heading='movie'/>
            </div>
        </div>
    )
}

export default BodyContent
