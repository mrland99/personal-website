import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import earth_care from '../images/earth_care.jpg';
import spatial from '../images/spatial.png';
import half_dome from '../images/half_dome.jpg';
import profile_pic from '../images/profile_long.jpg';
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
                    <meta name="description" content="Hello, I'm Max Land and this is my personal website. I'm currently a student at Princeton." />
                </Helmet>
                <div className="header-container">
                    <div className="header">
                        <div className="text-container">
                            <h1>Hello.</h1>
                            <br></br>
                            <p>I'm Max and I'm currently a senior studying math at Princeton. </p>
                            <br></br>
                            <Link to="#one"><button><FontAwesomeIcon icon={faChevronDown}/> Learn more</button></Link>
                        </div>
                        <div className="image">
                            <img src={profile_pic} alt="" />
                        </div>
                    </div>
                </div>
        
                <div id="one" className="spotlight-container">
                    <div className="heading"> 
                        <h1>Here are some of my interests:</h1>
                    </div>
                    <div className="spotlight-divider"></div>
                    <div className="spotlight">
                        <div className="image">
                            <img src={spatial} alt="" />
                        </div>
                        <div className="content">
                            <h3>Research</h3>
                            <br></br>
                            <p>My research interests lie in the intersection of math and biology. Currently, I'm working on developing novel
                                 computational methods to analyze spatial transcriptomics data. 
                                 If you're interested in learning more, check out my research <Link to="/research" className="html5-link">page</Link>. </p>
                        </div>
                    </div>
        
                    <div className="spotlight-divider"></div>
                    <div className="spotlight row-reverse">
                    <div className="image">
                        <img src={binary_cloud} alt="" />
                    </div>
                    <div className="content">
                        <h3>Coding</h3>
                        <br></br>
                        <p> In addition to research, I love tinkering with code. Through my projects, I aim to further explore my passion for computational genomics and also
                            develop products to help those in my community. Take a look <Link to="/projects" className="html5-link">here</Link>!   </p>
                    </div>
                    </div>
        
                    <div className="spotlight-divider"></div>
                    <div className="spotlight">
                    <div className="image">
                        <img src={earth_care} alt="" />
                    </div>
                    <div className="content">
                        <h3>Climate Action</h3>
                        <br></br>
                        <p>Global warming is happening. It affects us all. Let's all be a little more compassionate towards our home. 
                            Personally, I'm the webmaster and leadership for Princeton Student Climate Initiative.
                             We are a student group that engages with climate-related issues. 
                             Learn more: <a href="http://psci.princeton.edu" className="html5-link">psci.princeton.edu</a>  </p>
                    </div>
                    </div>
        
                    <div className="spotlight-divider"></div>
                    <div className="spotlight row-reverse">
                    <div className="image">
                        <img src={half_dome} alt="" />
                    </div>
                    <div className="content">
                        <h3>Photography</h3>
                        <br></br>
                        <p>I'm an avid hiker. I love the mountains. Favorite National Parks: Yosemite, Rocky Mountain.
                             Through my adventures, I've developed an interest in photography. 
                             Check out some of my photos in my <Link to="/gallery" className="html5-link">gallery</Link>! </p>
                    </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default Home;
