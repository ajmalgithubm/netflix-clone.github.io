import React from 'react'
import './Poster.css'
function Poster({windowWidth, isBlur, isBlur2}) {
  let posterContent = document.getElementsByClassName('posterContent');
  let moveNext = -50;
  let handlePrevPost = () => {
    
  }
  const handleNextPost = ()=> {
    moveNext -=10;
    posterContent.style.transform =`translateX(${moveNext}%)`;
  }
  return (
    <div style={{ filter: isBlur ? 'blur(10px)':isBlur2&&'blur(25px)'}}>
      <div className='p-2 pt-1 pb-1 bg-dark d-flex align-items-center' style={{}}>
        <div className="leftIconBar">
          <svg onClick={() => handlePrevPost()} style={{ width: '2vw', height: '2vw' }} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path></svg>
        </div>
        <div className='entirePosterContent d-flex flex-column' style={{overflowY:'scroll'}}>
          <div className='posterHeading p-2'>
            <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '600', cursor: 'pointer', fontSize: '1.8vw' }}>Popular On Netflix</p>
          </div> {/* Poster Heading is Given */}
          <div className='posterContent d-flex flex-row' style={{ overflowY: 'scroll' }}>
            {/* Multiple Poster are entering Here */}
            <div className="poster p-2">
              <div className="posterImage">
                <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer', width: '21vw' }} className='posterImg' alt="" />
              </div>
              <div className="posterTitle pt-2 text-center">
                <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>Money Heist</p>
              </div>
            </div>

            <div className="poster p-2">
              <div className="posterImage">
                <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer', width: '21vw' }} alt="" className='posterImg' />
              </div>
              <div className="posterTitle pt-2 text-center">
                <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>Money Heist</p>
              </div>
            </div>

            <div className="poster p-2">
              <div className="posterImage">
                <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer', width: '21vw' }} alt="" className='posterImg' />
              </div>
              <div className="posterTitle pt-2 text-center">
                <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>Money Heist</p>
              </div>
            </div>

            <div className="poster p-2">
              <div className="posterImage">
                <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer', width: '21vw' }} alt="" className='posterImg' />
              </div>
              <div className="posterTitle pt-2 text-center">
                <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>Money Heist</p>
              </div>
            </div>

            <div className="poster p-2">
              <div className="posterImage">
                <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer', width: '21vw' }} alt="" className='posterImg' />
              </div>
              <div className="posterTitle pt-2 text-center">
                <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>Money Heist</p>
              </div>
            </div>

            <div className="poster p-2">
              <div className="posterImage">
                <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer', width: '21vw' }} alt="" className='posterImg' />
              </div>
              <div className="posterTitle pt-2 text-center">
                <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>Money Heist</p>
              </div>
            </div>

            <div className="poster p-2">
              <div className="posterImage">
                <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer', width: '21vw' }} alt="" className='posterImg' />
              </div>
              <div className="posterTitle pt-2 text-center">
                <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>Money Heist</p>
              </div>
            </div>

            <div className="poster p-2">
              <div className="posterImage">
                <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer', width: '21vw' }} alt="" className='posterImg' />
              </div>
              <div className="posterTitle pt-2 text-center">
                <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>Money Heist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightIconBar">
          <svg onClick={() => handleNextPost()} style={{ width: '2vw', height: '2vw', transform: 'rotate(180deg)' }} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Poster
