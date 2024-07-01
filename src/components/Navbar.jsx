import "@fontsource/inter"
import "./Navbar.css"
import { useState } from "react";
import { GiLightningSlashes } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {

     const [open, setOpen] = useState(false)

     const togglemenu = (e) => {
        e.preventDefault()
        setOpen(!open)
     }
  return (
      <>
        <nav>
            <h3 className="logo"> <span className="icon"><GiLightningSlashes/></span>ZeeStore™</h3>
            <div className="middleLinks">
                <a href="#" className="shop">Shop</a>
                <a href="#" className="shop">Collections</a>
                <a href="#" className="shop">Explore</a>
                <a href="" className="shop">...</a>
            </div>

            <div className="rightLinks">
                <a className="cartDiv" href="#">
                   <span className="icon"><MdOutlineShoppingBag/></span>
                    Cart
                </a>

                <a className="cartDiv" href="#">
                   <span className="icon"><RiAccountCircleLine />
                   </span>
                    My Account
                </a>
            </div>
              <div className="menudiv">
              <a href="" className="toggle" onClick={togglemenu}><FiMenu/></a>
              <ul className={`vanish${open ? 'open' : ''}`}>
              <li><a href="#" className="shop" onClick={(e)=> e.preventDefault()}>Shop</a></li>
                <li></li><a href="#" className="shop" onClick={(e)=> e.preventDefault()}>Collections</a>
               <li><a href="#" className="shop" onClick={(e)=> e.preventDefault()}>Explore</a> </li>
              </ul>
              </div>
           
        </nav>
        
      </>
  )
}

export default Navbar