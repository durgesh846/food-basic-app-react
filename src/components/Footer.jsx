import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='content'>
                <div className='footer-logo'>
                    <div className='logo-name'>
                        <h2 style={{color:'rgb(254, 80, 5)'}}>Swiggy</h2>
                    </div>
                    <div className='logo-name'>
                        <p>© 2024 Swiggy Limited</p>
                    </div>
                </div>
                <div className='company'>
                    <ul className='companyul'>
                        <li><a href="#company" style={{fontSize:'20px',fontWeight:'950'}}>Company</a></li>
                        <li><a href="#about-us">About Us</a></li>
                        <li><a href="#swiggy-corporate">Swiggy Corporate</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#swiggy-one">Swiggy One</a></li>
                        <li><a href="#swiggy-instamart">Swiggy Instamart</a></li>
                        <li><a href="#swiggy-dineout">Swiggy Dineout</a></li>
                        <li><a href="#swiggy-genie">Swiggy Genie</a></li>
                    </ul>
                </div>
                <div className='contact'>
                    <ul className='contactul'>
                        <li><a href="#contact-us" style={{fontSize:'20px',fontWeight:'950'}}>Contact Us</a></li>
                        <li><a href="#help-support">Help & Support</a></li>
                        <li><a href="#partner-with-us">Partner with Us</a></li>
                        <li><a href="#ride-with-us">Ride with Us</a></li>
                    </ul>
                </div>
                <div className='available'>
                    <ul className='availableul'>
                        <li><a href="#bangalore" style={{fontSize:'20px',fontWeight:'950'}}>Bangalore</a></li>
                        <li><a href="#gurgaon">Gurgaon</a></li>
                        <li><a href="#hyderabad">Hyderabad</a></li>
                        <li><a href="#delhi">Delhi</a></li>
                        <li><a href="#mumbai">Mumbai</a></li>
                        <li><a href="#pune">Pune</a></li>
                    </ul>
                </div>
                <div className='life'>
                    <ul className='lifeul'>
                        <li><a href="#life-at-swiggy" style={{fontSize:'20px',fontWeight:'950'}}>Life at Swiggy</a></li>
                        <li><a href="#explore-with-swiggy">Explore with Swiggy</a></li>
                        <li><a href="#swiggy-news">Swiggy News</a></li>
                        <li><a href="#swiggy-news">Snackable</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer