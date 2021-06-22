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
                        <div className="proj-image">
                            <img  src={profile_pic} alt="protein-tda" />
                        </div>
                        <div className="intro-content">
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
                        <div className="image">
                            <img src={binary_cloud} alt="" />
                        </div>
                        <div className="content">
                            <h3>Background</h3>
                            <br></br>
                            <p>I studied math and computer science at Princeton. During my time there, I conducted computational genomics
                                 research under Ben Raphael. I also previously interned as software engineer at Google. </p>
                        </div>
                    </div>

                  

                    <div className="spotlight-divider"></div>
                    <div className="spotlight row-reverse">
                        <div className="image">
                            <img src={spatial} alt="" />
                        </div>
                        <div className="content">
                            <h3>Research</h3>
                            <br></br>
                            <p>My research interests lie at the intersection of math and genomics. I enjoy developing algorithms to analyze large-scale genomic datasets. 
                                 If you're interested in learning more, check out my research <Link to="/research" className="html5-link">page</Link>. </p>
                        </div>
                    </div>
        
                    <div className="spotlight-divider"></div>
                    <div className="spotlight">
                    <div className="image">
                        <img src={half_dome} alt="" />
                    </div>
                    <div className="content">
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
