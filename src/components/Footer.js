import React from 'react';
import './Footer.css';


const Footer = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className='section fotter_section mt-3' >
        <footer>
            <div className="footer_area">
            <h1 className="footer_subheadline" style={{ cursor: 'pointer' }} onClick={() => openInNewTab('https://notregsyrdev.web.app/') } >بني ❤️ بواسطة 
              <span> عمار حمدي حموش - codingammarhamdi@gmail.com </span>
               </h1>
            </div>

        </footer>
    </div>
  )
}

export default Footer