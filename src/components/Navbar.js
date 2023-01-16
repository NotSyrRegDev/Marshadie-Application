import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [mobileSection , setMobileSection] = useState(false);

  return (
    <div>
        <div className="iwaiter_navbar">

        <div className="search_div">
            <img src="/images/icons/search.png" alt="" />
            </div>

            <div className="logo_div">
            <img src="/images/icons/Marshadie-Logo.png" alt="" />
            </div>

          

            
            <div className="menu_div">
                <div className="menu_icon_div" onClick={() => setMobileSection(!mobileSection)} >
                    <div className="box_navbar"></div>
                    <div className="box_navbar"></div>
                    <div className="box_navbar"></div>
                </div>
            </div>


        </div>
        
        { /* MOBILE SECTION */}

   
      <div className={`main_mobile_section ${mobileSection ? 'active' : '' }`}>
          <img src="" alt="" />
          <ul className="mobile_ul">

            <li>
             <Link className='active'> الرئيسية </Link>
            </li>

            <li>
             <Link  > تسجيل جديد </Link>
            </li>

            <li>
             <Link> تسجيل الدخول </Link>
            </li>

          </ul>
      </div>
   
     

        { /* END MOBILE SECTION */}
    </div>
  )
}

export default Navbar