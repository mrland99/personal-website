import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import spatial from '../images/spatial.png';
import half_dome from '../images/half_dome.jpg';
import profile_pic from '../images/profile.jpg';
import binary_cloud from '../images/binary_cloud.png';

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="Home">
                <Helmet>
                    <title>Max Land's Website</title>
                    <meta name="description" content="Hello, I'm Max Land and this is my personal website. I'm currently a computational biologist at Memorial Sloan Kettering Cancer Center." />
                </Helmet>
                <div className="header-container">
                    <div className="spotlight row-reverse">
                        <div className="image square-image">
                            <img  src={profile_pic} alt="profile pic" />
                        </div>
                        <div className="spotlight-content font24 text-center">
                            <h3>Hello, I'm Max. </h3>
                            <br></br>
                            <p>I'm currently a computational biologist at Memorial Sloan Kettering Cancer Center. </p>
                            <br></br>
                            <Link className="learn-more-button" to="#one"><button><FontAwesomeIcon icon={faChevronDown}/> Learn more</button></Link>
                        </div>
                    </div>
                </div>
        
                <div id="one" className="spotlight-container">
                    <div className="heading"> 
                        <h1>About Me:</h1>
                    </div>

                    <div className="spotlight-divider"></div>
                    <div className="spotlight">
                        <div className="image circle-image">
                            <img src={binary_cloud} alt="binary cloud" />
                        </div>
                        <div className="spotlight-content font18">
                            <h3>Background</h3>
                            <br></br>
                            <p>I studied math and computer science at Princeton as an undergrad. During my time there, I conducted computational genomics
                                 research under Ben Raphael. I've also previously done stints as a software engineer at various places including Google. </p>
                        </div>
                    </div>

                  

                    <div className="spotlight-divider"></div>
                    <div className="spotlight row-reverse">
                        <div className="image circle-image">
                            <img src={spatial} alt="" />
                        </div>
                        <div className="spotlight-content font18">
                            <h3>Research</h3>
                            <br></br>
                            <p>I'm interested in developing computational methods for genomics data. 
                                If you're interested in learning more, check out my research 
                                <Link to="/research" className="html5-link"> page</Link>. </p>
                        </div>
                    </div>
        
                    <div className="spotlight-divider"></div>
                    <div className="spotlight">
                    <div className="image circle-image">
                        <img src={half_dome} alt="" />
                    </div>
                    <div className="spotlight-content font18">
                        <h3>Other</h3>
                        <br></br>
                        <p>I hike and code in my free time. Check out some of my photos in my <Link to="/gallery" className="html5-link">gallery</Link>, or
                        look through my past projects <Link to="/projects" className="html5-link">here</Link>.  </p>
                    </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default Home;
