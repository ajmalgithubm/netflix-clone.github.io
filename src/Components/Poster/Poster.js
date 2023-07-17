import React from 'react'
import './poster.css'
function Poster() {
  return (
    <div className='p-2 bg-dark'>
      <div className='entirePosterContent d-flex flex-column'>
        <div className='posterHeading'>
          <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '600', cursor: 'pointer' }}>Popular On Netflix</p>
        </div> {/* Poster Heading is Given */}
        <div className='posterContent d-flex flex-row' style={{overflowY:'scroll'}}>
          {/* Multiple Poster are entering Here */}
          <div className="poster">
            <div className="posterImage">
              <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{cursor:'pointer'}} alt="" />
            </div>
            <div className="posterTitle pt-2 text-center">
              <p style={{ color: '#fff', fontFamily:'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',fontWeight:'500',cursor:'pointer'}}>Money Heist</p>
            </div>
          </div>

          <div className="poster">
            <div className="posterImage">
              <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer' }} alt="" />
            </div>
            <div className="posterTitle pt-2 text-center">
              <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer' }}>Money Heist</p>
            </div>
          </div>

          <div className="poster">
            <div className="posterImage">
              <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer' }} alt="" />
            </div>
            <div className="posterTitle pt-2 text-center">
              <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer' }}>Money Heist</p>
            </div>
          </div>

          <div className="poster">
            <div className="posterImage">
              <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer' }} alt="" />
            </div>
            <div className="posterTitle pt-2 text-center">
              <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer' }}>Money Heist</p>
            </div>
          </div>

          <div className="poster">
            <div className="posterImage">
              <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326" style={{ cursor: 'pointer' }} alt="" />
            </div>
            <div className="posterTitle pt-2 text-center">
              <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer' }}>Money Heist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster
