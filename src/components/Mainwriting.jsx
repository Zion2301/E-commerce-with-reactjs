

import "./Minwriting.css"
import Clothing from "../assets/Clothing.webp"
const Mainwriting = () => {
  return (
   <>
      <div className="container" style={{
        backgroundImage: `url("${Clothing}")`
      }}>
        <h1>Get Inspired</h1>
        <p>Browsing for your next long-haul trip, everyday journey or just a fancy look at whats new? From community favourites to about-to-sell-out items, see them all here.</p>
      </div>
   </>
  )
}

export default Mainwriting