import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div style={{ backgroundColor: '#181818',marginBottom:'0',padding:'10px' }}>
            <div className="footerContainer d-flex flex-column align-items-start">
                <div className='p-5'>
                    <div className="footer-link-address mb-5">
                        <a href='#' style={{ color: '#737373', fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontSize: '16px' }}>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</a>
                    </div>
                    <div className="footer-contact-question">
                        <p style={{ fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif', fontSize: '16px',color:'#787878' }}>Questions? Contact us.</p>
                    </div>
                </div>
                <div className="footer-list-container p-3">
                    <ul className='footer-list-ul'>
                        <li className='footer-list-li'>
                            <a href='#' style={{fontFamily:''}} className='footer-list-a'>FAQ</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Help Center</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Account</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Media Center</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Investor Relations</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Jobs</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Way to Watch</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Terms of Use</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Privacy</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Cookie Preference</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Corporate Information</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Contact Us</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Speed Test</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Legal Notices</a>
                        </li>
                        <li className='footer-list-li'>
                            <a href='#' className='footer-list-a'>Only on Netflix</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
