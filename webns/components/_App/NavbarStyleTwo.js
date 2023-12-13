import React, { useState } from "react"
import Link from '@/utils/ActiveLink'
import axios from 'axios';
import API_BASE_URL from '@/utils/apiBaseUrl';

const NavbarStyleTwo = () => {
    const [menu, setMenu] = React.useState(true)
    const toggleNavbar = () => {
        setMenu(!menu)
    }
    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });  
        window.scrollTo(0, 0); 
    }) 

    const [LogoData, setLogoData] =  React.useState({});
  
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}core/logo/list/`)
        .then(response => {
            const data = response.data
            let image  = data[0].image
            setLogoData(image);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    console.log("logo image 13", LogoData)

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="main-navbar">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/" legacyBehavior>
                                <a className="navbar-brand">
                                    <img
                                        src={LogoData}
                                        height={120}
                                        width={120}
                                        alt="Site Logo"
                                    />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active" legacyBehavior>
                                            <a onClick={toggleNavbar} >
                                                Home 
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#" legacyBehavior>
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Pages <i className="ri-arrow-down-s-line"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link href="/about" activeClassName="active" legacyBehavior>
                                                    <a onClick={toggleNavbar}>About</a>
                                                </Link>
                                            </li>
                                            
                                            <li>
                                                <Link href="/team" activeClassName="active" legacyBehavior>
                                                    <a onClick={toggleNavbar}>Teachers Information</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/gallery" activeClassName="active" legacyBehavior>
                                                    <a onClick={toggleNavbar}>Gallery</a>
                                                </Link>
                                            </li>
                                           
                                            <li>
                                                <Link href="/testimonials" activeClassName="active" legacyBehavior>
                                                    <a onClick={toggleNavbar}>Testimonials</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/career" legacyBehavior>
                                                    <a onClick={toggleNavbar} className="dropdown-toggle nav-link">
                                                        Career <i className="ri-arrow-right-s-line"></i>
                                                    </a>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/career" activeClassName="active" legacyBehavior>
                                                            <a onClick={toggleNavbar} className="nav-link">Career</a>
                                                        </Link>
                                                    </li> 
                                                </ul>
                                            </li>
                                        </ul>   
                                    </li> 

                                    <li className="nav-item">
                                        <Link href="/products" legacyBehavior>
                                            <a onClick={toggleNavbar}>
                                                Admission
                                            </a>
                                        </Link>
                                        
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services" legacyBehavior>
                                            <a onClick={toggleNavbar}>
                                                Academic 
                                            </a>
                                        </Link>
                                        
                                    </li>
 
                                    <li className="nav-item">
                                        <Link href="/case-studies" legacyBehavior>
                                            <a onClick={toggleNavbar} >
                                                Blogs 
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/blog" legacyBehavior>
                                            <a onClick={toggleNavbar} >
                                            News Events
                                            </a>
                                        </Link>
                                        
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active" legacyBehavior>
                                            <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <div className="search-box" onClick={handleToggleSearchModal}>
                                        <i className="ri-search-line"></i>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <a href="tel:15143125678" className="default-btn">
                                        +8801988-000800
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        
            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        
                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input 
                                    type="text" 
                                    className="input-search" 
                                    placeholder="Search here..." 
                                />
                                <button type="submit">
                                    <i className="ri-search-2-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
}

export default NavbarStyleTwo;