import '../styleF.css'


import { Link, useMatch, useResolvedPath } from "react-router-dom"

import LogInPage from '../pages/LogInPage'

const path = window.location.pathname

export default function Footer(){
    return(
      <div >
      
      <div class="foo">For more info, check out our &nbsp; <ScrollLinkAbout>About page</ScrollLinkAbout></div> 
  
      <div class="foo">Or login on the page &nbsp; <ScrollLinkLogin>Login</ScrollLinkLogin></div> 

</div>
    )}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return(
        <li className={path === to ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
        )
    }

    function ScrollLinkAbout({ children }) {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
      return (
        <CustomLink to="/about" className="link" onClick={scrollToTop}>
          {children}
        </CustomLink>
      );
    }

    function ScrollLinkLogin({ children }) {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
      return (
        <CustomLink to="/login" className="link" onClick={scrollToTop}>
          {children}
        </CustomLink>
      );
    }

