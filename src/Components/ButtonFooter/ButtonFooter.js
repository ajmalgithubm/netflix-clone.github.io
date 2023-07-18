import React from 'react'
import './ButtonFooter.css'
function ButtonFooter() {
  return (
    <div style={{ backgroundColor:'#181818'}}>
      <div className="footerContent p-3 pt-0">
        <div className="content d-flex flex-column align-items-center p-4 pt-0">
            <div className="text-center">
                      <h1  style={{ fontFamily:'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',fontWeight:'500',color:'white',fontSize:'4vw',wordBreak:'break-word'}}>There’s even more to watch.</h1>
            </div>
            <div className="discriptionContent text-center" style={{maxWidth:'500px'}}>
                      <p className="" style={{ fontFamily:'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',color:'white',wordBreak:'break-word',fontSize:'1.9vw'}}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.</p>
            </div>
            <div className="btnContent text-center">
                      <button style={{ padding: '10px 30px', backgroundColor: '#e50914', color: '#fff', border: "none", fontFamily:'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',fontWeight:'500'}}>JOIN NOW</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonFooter
