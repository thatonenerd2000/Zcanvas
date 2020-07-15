import React from 'react'
import "../css/index.scss"
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom";

import paletteLogo from "../media/paint.png"
import painting from "../media/painting.png"
import about from "../media/person.png"

const Home = () => {
    return(
        <>
            <div id="Home_main">
                <Fade down delay={600}>
                    <div style={{zIndex:1}} id="Home_intro">
                        <h1 style={{fontSize:35}}>Zhilam's Canvas <img src={paletteLogo} alt="paletteLogo" title="Original designer: FreePik" style={{height:"1em"}}></img></h1>
                        <h3 style={{fontSize:20}}>"A Part, of Art"</h3>
                        <hr></hr>
                        <div className="Home_icon"><Link to="/gallery"><img className="Home_icon_img" style={{height:"5vh"}} src={painting} alt="gallery" title="Gallery || Icon designer: Freepik"></img></Link><p>Gallery</p></div>
                        <div className="Home_icon"><img className="Home_icon_img" style={{height:"5vh"}} src={about} alt="about" title="About || Icon designer: Prosymbols"></img><p>About</p></div>
                    </div>
                </Fade>
                <div style={{zIndex:-1}}>
                    <Fade left>
                        <div className="HomeSec" style={{backgroundColor:"#FFA06D"}}></div>
                    </Fade>
                    <Fade left delay={100}>
                        <div className="HomeSec" style={{backgroundColor:"#FF886B"}}></div>
                    </Fade>
                    <Fade left delay={200}>
                        <div className="HomeSec" style={{backgroundColor:"#E56469"}}></div>
                    </Fade>
                    <Fade left delay={300}>
                        <div className="HomeSec" style={{backgroundColor:"#B55669"}}></div>
                    </Fade>
                    <Fade left delay={400}>
                        <div className="HomeSec" style={{backgroundColor:"#5B4C75"}}></div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Home