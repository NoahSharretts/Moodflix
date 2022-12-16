import './Splash.css'
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <>
          <div className="main-div">
          <h1 className = "splash-main-header"> Moodflix </h1>
          <h2 className ="splash-sub-header"> Why not review media with more media? </h2>
          <button className="splash-button">
          <Link to="/login" className="open">Open Moodflix</Link>
          </button>
          </div>
        </>
    )
}

export default Splash;
