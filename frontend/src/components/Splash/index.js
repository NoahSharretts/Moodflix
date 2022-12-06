import './Splash.css'
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <>
          <div className="main-div">
          <h1 className = "splash-main-header"> NEWCORD! STAY IN TOUCH </h1>
          <h2 className ="splash-sub-header"> A SITE THAT MAKES IT EASY TO TALK EVERY DAY AND HANG OUT MORE OFTEN</h2>
          <button className="splash-button">
          <Link to="/login" className="open">Open Newcord</Link>
          </button>
          </div>
        </>
    )
}

export default Splash;
