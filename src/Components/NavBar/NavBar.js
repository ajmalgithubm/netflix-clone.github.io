import React from 'react';
import './NavBar.css';
function NavBar({windowWidth}) {
    return (
        <div style={{backgroundColor:'#000',position:'fixed',right:'0',left:'0',top:'0'}}>
            <div className='d-flex justify-content-between flex-wrap'>
                <div className='p-2'>
                    <img src={windowWidth > 600 ? "https://wallpaperaccess.com/full/6075689.png" :"https://blog.logomyway.com/wp-content/uploads/2020/08/netflix-logo-2-1.jpg"} className='img img-fluid' width={100} height={100} alt="" />
                </div>
                <div className='p-2 d-flex'>
                    {
                        (windowWidth > 700) && (<div className='p-2 pt-3'>
                            <p className='text-light' style={{ fontSize: '13px', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif' }}>UNLIMITED TV SHOWS & MOVIES</p>
                        </div>)
                    }
                    
                    <div className='p-2' >
                        <button className='navBarButton btn btn-sm pt-2 pb-2 pl-4 pr-4' style={{ fontSize: '12px', fontWeight: '400', backgroundColor: '#e50914', color: '#fff', fontFamily:'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', borderRadius:'2px'}}>JOIN NOW</button>
                    </div>
                    <div className='p-2'>
                        <button className='navBarButton btn btn-sm pt-2 pb-2 pl-4 pr-4' style={{ fontSize: '12px', fontWeight: '400', backgroundColor: '#111', color: '#fff', fontFamily: "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif", border:'1px solid #888',borderRadius:'2px'}}>SIGN IN</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar
