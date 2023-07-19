import React, { useEffect, useState } from 'react'
import './Poster.css';
import axios from 'axios';
function Poster({windowWidth, isBlur, isBlur2,item, heading}) {
  const [movie, setMovie] =useState();
  let posterContent = document.getElementsByClassName('posterContent');
  let moveNext = -50;
  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/${item}?api_key=2876a54758f8992fe8a0adf59bbccf0a`).then((response) => {
      setMovie(response.data.results);
      console.log(response.data.results)
    })
  },[])

  let handlePrevPost = () => {
    
  }
  const handleNextPost = ()=> {
    //moveNext -=10;
    //posterContent.style.transform =`translateX(${moveNext}%)`;
  }
  return (
    <div style={{ filter: isBlur ? 'blur(10px)':isBlur2&&'blur(25px)'}}>
      <div className='p-2 pt-1 pb-1 bg-dark d-flex align-items-center' style={{}}>
        <div className="leftIconBar">
          <svg onClick={() => handlePrevPost()} style={{ width: '2vw', height: '2vw' }} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path></svg>
        </div>
        <div className='entirePosterContent d-flex flex-column' style={{overflowY:'scroll'}}>
          <div className='posterHeading p-2'>
            <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '600', cursor: 'pointer', fontSize: '1.8vw' }}>{heading}</p>
          </div> {/* Poster Heading is Given */}
          <div className='posterContent d-flex flex-row' style={{ overflowY: 'scroll' }}>

            {/* Multiple Poster are entering Here */}
            {
              movie && movie.map((obj) => {
                return(
                  <div className="poster p-2">
                    <div className="posterImage">
                      <img src={'https://image.tmdb.org/t/p/w500/' + obj.backdrop_path} style={{ cursor: 'pointer', width: '21vw' }} className='posterImg' alt="" />
                    </div>
                    <div className="posterTitle pt-2 text-center">
                      <p style={{ color: '#fff', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontWeight: '500', cursor: 'pointer', fontSize: '1.5vw' }}>{obj.title}</p>
                    </div>
                  </div>
                )
              })
            }
           
           
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
