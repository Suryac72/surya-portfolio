import "./intro.scss"
import {init} from "ityped";
import {useEffect,useRef} from "react";
export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
      init(textRef.current, { showCursor: true, 
        backdelay:1500,backSpeed:50,
        strings: [' Developer', ' Designer'], });
    },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Surya Prakash Chaudhary</h1>
                    <h3>Website<span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}