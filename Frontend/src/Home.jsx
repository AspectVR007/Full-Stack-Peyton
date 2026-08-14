import './Base_styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import myownPHOTO from './images/wphoto.jpg';
import gameDESIGN from './images/firstclass.png';
import vrDESIGN from './images/vrimage.png';
import mineCRAFT from './images/mcimage.png';
import vrHORROR from './images/vrimage2.png';
import cDESIGN from './images/c++gd.png';
import pythonGAME from './images/python.png';
import nvidiaAI from './images/nvidia.png';
import sideWALK from './images/jetsonniv.png';
import jediSURVIVOR from './images/pythonrpg.webp';
import pixelGAME from './images/pixelSTARS.png';
import tntAUDIO from './audio/TNT.mp3';
import backinblackAUDIO from './audio/back in black.mp3';

import WebThreads from './WebThreads.jsx';


function Home(){

    


    const [scrollYvalue, setScrollYvalue] = useState(0);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    window.addEventListener('scroll', () => {
        setScrollYvalue(window.scrollY);
    });


    if(document.querySelector("#main_bg_div")){
        if(scrollYvalue > 500){
            const bg_element = document.querySelector("#main_bg_div");

            bg_element.style.filter = "brightness(50%)";
        } else {
            const bg_element = document.querySelector("#main_bg_div");

            bg_element.style.filter = "brightness(100%)";
        }
    }

    function gotoHome(){
        document.getElementById("homepage").scrollIntoView({behavior: "smooth"});
    }

    function gotoTime(){
        document.getElementById("idtechyears").scrollIntoView({behavior: "smooth"});
    }

    function gotoProjects(){
        document.getElementById("idprojects").scrollIntoView({behavior: "smooth"});
    }

    function gotoAudio(){
        document.getElementById("acdcaudio").scrollIntoView({behavior: "smooth"});
    }

    function gotoContact(){
        document.getElementById("contactme").scrollIntoView({behavior: "smooth"});
    }

    const env_route_link = import.meta.env.VITE_ROUTE_LINK;
    console.log(env_route_link);

    const submit_form = async (e) => {
        e.preventDefault();

        const response = await fetch(`${env_route_link}/sendmail`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                message,
            }),
        });

        const data = await response.json();

    }

    //old spread val 0.42
    return (
        <>
    
        <div className="navbar">

            <div className="innerbutton">

                <button className="navigation" onClick={gotoHome}>
                    <FontAwesomeIcon icon={faHouse} /> Home
                </button>

                <button className="navigation" onClick={gotoTime}>
                    <FontAwesomeIcon icon={faRobot} /> Time at iD Tech
                </button>

                <button className="navigation" onClick={gotoProjects}>
                    <FontAwesomeIcon icon={faFolder} /> Projects
                </button>

                <button className="navigation" onClick={gotoAudio}>
                    AC<FontAwesomeIcon icon={faBoltLightning}/>DC
                </button>

                <button className="navigation" onClick={gotoContact}>
                    <FontAwesomeIcon icon={faPhone} /> Contact
                </button>

            </div>
            
        </div>

        
        <div id="main_bg_div" style={{ width: '100%', height: '600px', position: 'fixed', zIndex: '-1', height: '100vh', transitionDuration: '1.0s' }}>
            <WebThreads
                color1="#3700ff"
                color2="#ffffff"
                color3="#052e86"
                speed={0.5}
                threadCount={10}
                frequency={5}
                spread={0.22}
                taper={0.95}
                position={0.5}
                fanMode="center"
                glow={0.021}
                falloff={0.6}
                thickness={1.1}
                brightness={0.65}
                opacity={1}
                mirror
                shimmer={false}
                grain
                grainIntensity={0.05}
                mouseInteraction={false}
                mouseStrength={0.3}
            />
        </div>
        
        <div id="homepage" className="header">

            <div>
                <h1 style={{ fontSize: '80px', color: 'white'}}>Hello! My name is Peyton and I'm an <span style={{color: 'rgb(169, 255, 84)'}}>iD Tech</span> instructor in training!</h1>
                <span style={{color: 'white', fontSize: '22px'}}>Some of my favorite things to do are to play video games and collect Star Wars light sabers. I also collect old roman/medieval armor and swords. Amongst all that I absolutely love the band AC/DC. They are my favourite band of all time. </span>
            </div>

            <img width="700px" height="700px" style={{borderRadius: '50%'}} src={myownPHOTO}/>
        </div>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div id="idtechyears" className="timeatidtech">

            <div>
                <h1 style={{ fontSize: '80px', color: 'white'}}>My time at <span style={{color: 'rgb(169, 255, 84)'}}>iD Tech</span>!</h1>
                <div style={{ width: '67%' }}>
                <p style={{color: 'white', fontSize: '20px'}}>I've done iD Tech for a while now, about to be 10 times after this last one. It's been one of my favorite things that I have done througout my summers. iD Tech has helepd me learn so much about coding, game design, web development, etc. It has also helped me meet so much people that I relate with. So if you were ever thinking about signing up for a class I really recommened it. It is a great experience and you meet a lot of amazing people.</p>
                </div>
            </div>

        </div>

        <div style={{ width: '80%' }} className="firsttime">
            <img className="gdimage" src={gameDESIGN}/>
            <p style={{color: 'white', fontSize: '26px'}}> My first year at iD Tech was making me nervous because obviously this was my first year. The class I took was "Game Design 101". I do remember that it was a very fun class to be in, the instructor was great, the people were fun and I learned a lot. </p>
        </div>

        <div style={{ width: '80%' }} className="firsttime">
            <p style={{color: 'white', fontSize: '26px'}}>Now my second year was very different. It was "VR Game design with Unity and Meta Quest". I don't remember much from that particular year other than the instructor taught me so much stuff so I was able to make a game at my own house with my own stuff.</p>
            <img className="gdimage" src={vrDESIGN}/>
        </div>

        <div style={{ width: '80%' }} className="firsttime">
            <img className="gdimage" src={mineCRAFT}/>
            <p style={{color: 'white', fontSize: '26px'}}>For my third year I took the class of "Advanced Minecraft Modding with Java". Now that I can remember, it was such a fun class to be in along with the instructor and the kids. I took the advanced version and it was definitley up there in terms of modding capability. It was challenging at times but I was able to get through it fairly easily.</p>
        </div>

        <div style={{ width: '80%' }} className="firsttime">
            <p style={{color: 'white', fontSize: '26px'}}>The 4th time of iD Tech I took another VR game design class because I couldn't get enough of it the first time. It was pretty much the same as the first one I took other than new people and a new instructor which was perfectly fine.</p>
            <img className="gdimage" src={vrHORROR}/>
        </div>

        <div style={{ width: '80%' }} className="firsttime">
            <img className="gdimage" src={cDESIGN}/>
            <p style={{color: 'white', fontSize: '26px'}}>The 5th time at iD Tech was very different. This time it was a teen academy which is the one in Stanford that you stay in the dorms for about 2 weeks. It counts as 2 times of iD Tech which was nice. That time I took the class called "Game Coding Academy with C++". That one was very nice because it gave so much more time to focus on doing what you want instead of having to rush the project like the regular tech camps.</p>
        </div>

        <div style={{ width: '80%' }} className="firsttime">
            <p style={{color: 'white', fontSize: '26px'}}>The 6th time was my final tech camp I could do because I aged out of the tech camps. The class I took was "Python Coding & AI Agents". It was an overall well rounded class. It definitley helped me with finding jobs in the future by now knowing somewhat about how ai works and what it actually is.</p>
            <img className="gdimage" src={pythonGAME}/>
        </div>

        <div style={{ width: '80%' }} className="firsttime">
            <img className="gdimage" src={nvidiaAI}/>
            <p style={{color: 'white', fontSize: '26px'}}>The 7th time had to be one of my favourites. It helped me the most with developing my own ai system and using the given technology from nvidia. I really recommend this course to people looking for ai courses.</p>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


         <div id="idprojects" className="timeatidtech">

            <div>
                <h1 style={{ fontSize: '80px', color: 'white'}}>My <span style={{color: 'rgb(169, 255, 84)'}}>iD Tech</span> projects!</h1>
                <div style={{ width: '67%' }}>
                <p style={{color: 'white', fontSize: '20px'}}>Here are some of the projects that I have done during my time at iD Tech. From an AI Sidewalk/Road analyzer to Star Wars video games.</p>
                </div>
            </div>

        </div>

        <div className="Projects">
            <div>
                <img width="600px" height="600px" src={sideWALK}/>
                <h1>AI Sidewalk Analyzer</h1>
                <p>It analyzes sidewalks and roads to differentiate them from each other so that people with poor vision can know when they are about to step out on the road.</p>
                <br/>
                <div>
                    <span className="tech">VS Code</span> <span className="tech">Nvidia Jetson</span> <span className="tech">Python</span>
                </div>
            </div>

            <div>
                <img width="600px" height="600px" src={jediSURVIVOR}/>
                <h1>Star Wars: Jedi Survivor RPG</h1>
                <p>The project was based off of Jedi Survivor. It's an rpg game coded in Python that used aspects of Jedi Survivor to make a full functioning and fun Star Wars game.</p>
                <br/>
                <div>
                    <span className="tech">PyCharm</span> <span className="tech">Python</span>
                </div>
            </div>

            <div>
                <img width="600px" height="600px" src={pixelGAME}/>
                <h1>Pixel Art Star Wars Game</h1>
                <p>This project was a top down star wars game. You had to fight through waves of enemies to get to the next level. The more you went on the harder it got.</p>
                <br/>
                <div>
                    <span className="tech">Raylib Library</span> <span className="tech">C++</span> <span className="tech">VS Code</span>
                </div>
            </div>
        
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


         <div id="acdcaudio" className="timeatidtech">

            <div>
                <h1 style={{ fontSize: '80px'}}>My favourite <span style={{color: 'rgba(214, 28, 28, 0.63)'}}>AC<FontAwesomeIcon style={{color: 'rgba(214, 28, 28, 0.63)' }} icon={faBoltLightning} />DC</span> songs!</h1>
                <div style={{ width: '67%' }}>
                <p style={{color: 'white', fontSize: '20px'}}>AC<FontAwesomeIcon icon={faBoltLightning}/>DC is my favourite band. I enjoy classic music but AC/DC definitley takes the cake for me. My 2 favourite songs would have to be Back in Black and TNT. </p>
                </div>
            </div>

        </div>

        <div className="audio">

             <h1>T.N.T</h1>
            <audio controls loop>
                <source src={tntAUDIO}></source>
            </audio>

        </div>

        <div className="audio"> 
            <h1>Back in Black</h1>
            <audio controls loop>
                <source src={backinblackAUDIO}></source>
            </audio>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id='contactme' style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{fontSize: '80px'}}>Contact me for any further questions!</h1>
            <br/>

            <form style={{ display: 'flex', flexDirection: 'column', width: '40%'}} onSubmit={submit_form}>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%', gap: '12px', paddingBottom: '8px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <label htmlFor="fname" style={{color: 'white'}}>First Name: </label>
                        <input value={fname} style={{ backgroundColor: 'rgb(36, 36, 36)', border: 'none', color: 'white', borderRadius: '22px', padding: '8px' }} id='fname' name='fname' type="text" placeholder='John' onChange={(e) => setFname(e.target.value)}/>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <label htmlFor="lname" style={{color: 'white'}}>Last Name: </label>
                        <input value={lname} style={{ backgroundColor: 'rgb(36, 36, 36)', border: 'none', color: 'white', borderRadius: '22px', padding: '8px' }} id='lname' name='lname' type="text" placeholder='Doe' onChange={(e) => setLname(e.target.value)}/>
                    </div>
                </div>

                <label htmlFor="email" style={{color: 'white'}}>Email: </label>
                <input style={{ backgroundColor: 'rgb(36, 36, 36)', border: 'none', color: 'white', borderRadius: '22px', padding: '8px' }} id='email' name='email' type="email" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="message" style={{color: 'white'}}>Message: </label>
                <textarea style={{ backgroundColor: 'rgb(36, 36, 36)', border: 'none', color: 'white', borderRadius: '22px', padding: '8px', height: '100px', overflowY: 'none' }} id='message' name='message' type="text" placeholder='...' value={message} onChange={(e) => setMessage(e.target.value)}/>

                <br/>
                <input className="submit_button" style={{  border: 'none', borderRadius: '22px', padding: '8px' }} type="submit" value="Send"></input>

            </form>
            <br/>
            <br/>
        </div>

        </>
    );
}

export default Home;