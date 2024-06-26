import React, { useEffect, useState } from 'react'
import { SlMenu } from 'react-icons/sl'
import { VscChromeClose } from 'react-icons/vsc'
import { createBrowserHistory } from 'history';
import { HashLink} from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import './styles.scss'
import { useLocation } from 'react-router';
export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [Bg ,setBg]=useState("")
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    const hist=createBrowserHistory()
    const currentPath = location.hash;
    //console.log(currentPath);
    const handleLinkClick = (link) => {
    setActiveLink(link);
    
    setMobileMenu(false)
    };
    useEffect(()=>{
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setMobileMenu(false)
                console.log("La largeur de la fenêtre est supérieure à 768 pixels");
            }}
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    },[])
    
    const controlNavbar = () => {
        if (window.scrollY > 150) {
            setBg("wBg")
        }
        else{
            setBg("")
        }
        setLastScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);
    useEffect(() => {
        function handleScroll() {
          const sections = document.querySelectorAll('section');
          
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            //console.log( "section",section);
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
             //console.log( window.scrollY ,sectionTop ,sectionHeight)
            if (sectionTop >=window.scrollY && window.scrollY <(sectionTop+ sectionHeight )) {
            
                setActiveLink(sectionId)
                const currentPath = hist.location.pathname;
                const trimmedPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
                hist.push(`${trimmedPath}#${sectionId}`);
              
              break;
            }
          }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [hist]);
    
  return (
    <header className={`header ${mobileMenu ? "mobileView" :""} ${Bg}`}>
        <div className="name">
            <NavLink to="/">BOUTAYNA LOUAHBI</NavLink> 
        </div>
        
        <ul className="menuItems">
        <li className={`menuItem ${(activeLink === 'Home' ) ? 'active' : ''}`}>
                {/* <a href="#Home" onClick={() => handleLinkClick('Home')}>Accueil</a> */}
                <HashLink to={"#Home"} onClick={() => handleLinkClick('Home')}>Accueil</HashLink>
            </li>
            <li className={`menuItem ${(activeLink === 'About' ) ? 'active' : ''}`}>
                {/* <a href="#About" onClick={() => handleLinkClick('About')}>Présentation</a> */}
                <HashLink smooth  to={"#About"} onClick={() => handleLinkClick('About')} >Présentation</HashLink>
            </li>
            <li className={`menuItem ${(activeLink === 'Portfolio' )? 'active' : ''}`}>
                {/* <a href="#Portfolio" onClick={() => handleLinkClick('Portfolio')}>Portfolio</a> */}
                <HashLink smooth  to={"#Portfolio"} onClick={() => handleLinkClick('Portfolio')}>Portfolio</HashLink>
            </li>
            <li className={`menuItem ${(activeLink === 'Resume' ) ? 'active' : ''}`}>
                {/* <a href="#Formation" onClick={() => handleLinkClick('Formation')}>Formation</a> */}
                <HashLink smooth  to={"#Resume"} onClick={() => handleLinkClick('Resume')}>Expériences/Formation</HashLink>
            </li>
            <li className={`menuItem ${(activeLink === 'Contact' ) ? 'active' : ''}`}>
                {/* <a href="#Contact" onClick={() => handleLinkClick('Contact')}>Contact</a> */}
                <HashLink smooth  to={"#Contact"} onClick={() => handleLinkClick('Contact')}>Contact</HashLink>
            </li>
        </ul>
        <div className="mobileMenuItems">
            {
                mobileMenu ? <VscChromeClose onClick={()=>setMobileMenu(false)}/> 
                :<SlMenu onClick={()=>setMobileMenu(true)}/>
            }
            
            
        </div>

        
    </header>
  )
}
