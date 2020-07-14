import React from 'react'
import "../css/index.scss"
import Fade from 'react-reveal/Fade';
import paletteLogo from "../media/paint.png"

const Home = () => {
    return(
        <>
            <div id="Home_main">
                <Fade down delay={600}>
                    <div style={{zIndex:1}} id="Home_intro">
                        <h1>Zhilam's Canvas <img id="paletteLogo" src={paletteLogo} alt="paletteLogo_by_FreePik" style={{height:"1em"}}></img></h1>
                        <h3>"A Part, of Art"</h3>
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