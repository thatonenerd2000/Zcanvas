import React from "react"
import {Palette} from 'react-palette'
import "../css/index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import {isMobile} from "react-device-detect";

import temp1 from "../media/temp_drawings/temp1.jpg"
import temp2 from "../media/temp_drawings/temp2.jpg"
import temp3 from "../media/temp_drawings/temp3.jpeg"
import temp4 from "../media/temp_drawings/temp4.jpg"
import temp5 from "../media/temp_drawings/temp5.jpg"
import temp6 from "../media/temp_drawings/temp6.jpeg"

const Gallery = ()=>{
    function dynamicRender(data){
        let style = {}
        if (isMobile){
            style = {
                backgroundColor:data.vibrant,
                height:'100vh',
                width:'100vw',
                display:'inline-block',
                textAlign:'center'
            }
        }
        else{
            style={
                backgroundColor:data.vibrant,
                height:'70vh',
                width:'50vw',
                display:'inline-block',
                textAlign:'center'
            }
        }
        return style
    }
    return(
        <>
            <Palette src={temp1}>
            {({data}) => (
                <Fade>
                    <div className="Gallery_palette" style={dynamicRender(data)}>
                        <Fade delay={500}>
                            <img style={isMobile ? {height:"50vh",width:"70vw"}:{height:"50vh",width:"25vw"}} className="Gallery_canvas" src={temp1} alt="canvas_image"></img>
                        </Fade>
                    </div>
                </Fade>
            )}
            </Palette>


            <Palette src={temp2}>
            {({data}) => (
                <Fade>
                    <div className="Gallery_palette" style={dynamicRender(data)}>
                        <Fade delay={500}>
                            <img style={isMobile ? {height:"50vh",width:"70vw"}:{height:"50vh",width:"25vw"}} className="Gallery_canvas" src={temp2} alt="canvas_image"></img>
                        </Fade>
                    </div>
                </Fade>
            )}
            </Palette>


            <Palette src={temp3}>
            {({data}) => (
                <Fade>
                    <div className="Gallery_palette" style={dynamicRender(data)}>
                        <Fade delay={500}>
                            <img style={isMobile ? {height:"50vh",width:"70vw"}:{height:"50vh",width:"25vw"}} className="Gallery_canvas" src={temp3} alt="canvas_image"></img>
                        </Fade>
                    </div>
                </Fade>
            )}
            </Palette>


            <Palette src={temp4}>
            {({data}) => (
                <Fade>
                    <div className="Gallery_palette" style={dynamicRender(data)}>
                        <Fade delay={500}>
                            <img style={isMobile ? {height:"50vh",width:"70vw"}:{height:"50vh",width:"25vw"}} className="Gallery_canvas" src={temp4} alt="canvas_image"></img>
                        </Fade>
                    </div>
                </Fade>
            )}
            </Palette>


            <Palette src={temp5}>
            {({data}) => (
                <Fade>
                    <div className="Gallery_palette" style={dynamicRender(data)}>
                        <Fade delay={500}>
                            <img style={isMobile ? {height:"50vh",width:"70vw"}:{height:"50vh",width:"25vw"}} className="Gallery_canvas" src={temp5} alt="canvas_image"></img>
                        </Fade>
                    </div>
                </Fade>
            )}
            </Palette>


            <Palette src={temp6}>
            {({data}) => (
                <Fade>
                    <div className="Gallery_palette" style={dynamicRender(data)}>
                        <Fade delay={500}>
                            <img style={isMobile ? {height:"50vh",width:"70vw"}:{height:"50vh",width:"25vw"}} className="Gallery_canvas" src={temp6} alt="canvas_image"></img>
                        </Fade>
                    </div>
                </Fade>
            )}
            </Palette>
            
        </>
    )
}

export default Gallery