import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import coming_soon from '../images/coming_soon.png';
import msk_logo from '../images/msk_logo.jpg'

class Research extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="Projects">
                <Helmet>
                    <title>Max's Research</title>
                    <meta name="description" content="Here are my research projects: Tissue Alignment via Optimal Transport and Determining Cancerous Regions in Breast Cancer Tissue. " />
                </Helmet>
                <div className="spotlight-container">
                    <div className="heading"> 
                        <h1>Current Research</h1>
                    </div>
                   
                    <div className="spotlight-divider"></div>
                    <div className="spotlight">
                        <div className="image square-image">
                            <img  src={msk_logo} alt="Coming Soon" />
                        </div>
                        <div className="spotlight-content font18">
                            <h3>Cancer Genomics</h3>
                            <br></br>
                            <h4>Pe'er Lab, 2021 - present</h4>
                            <br></br>
                            <p>Currently conducting research with Dana Pe'er as part of the Single Cell Research Initiative at 
                                Memorial Sloan Kettering Cancer Center.</p>
                        </div>
                    </div>
                    
                    <div className="heading"> 
                        <h1>Highlighted Research</h1>
                    </div>
        
                    <div className="spotlight-divider"></div>
                    <div className="spotlight">
                        <div className="image square-image">
                            <img  src={coming_soon} alt="Coming Soon" />
                        </div>
                        <div className="spotlight-content font18">
                            <h3>PASTE: Probabilistic Alignment of ST Experiments &nbsp;<a href="https://github.com/raphael-group/paste" className="proj-link">
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
                            </h3>
                            <br></br>
                            <h4>Raphael Lab, 2020 - 2021</h4>
                            <br></br>
                            <p>Developed a new computational method (PASTE) to align spots across adjacent spatial transcriptomics (ST) slices and integrate multiple ST replicates 
                                by leveraging both transcriptional similarity and spatial distances between spots.
                            </p>
                            <br></br>
                            <img className= "pepy-button" src= "https://static.pepy.tech/personalized-badge/paste-bio?period=total&units=international_system&left_color=black&right_color=blue&left_text=Downloads"></img>
                        </div>
                    </div>
                    <div className="heading"> 
                        <h1>Publications</h1>
                    </div>

                    <div className="spotlight-divider"></div>
                    <div className="publication-box">
                        <p>(*) denotes equal contribution. </p>
                    </div>

                    <div className="publication-box">
                        <h3>Alignment and Integration of Spatial Transcriptomics Data</h3>
                        <p>Ron Zeira*, Max Land*, Ben Raphael </p>
                        <br></br>
                        <p>RECOMB (2021)</p>
                    </div>
                    <div className="publication-box">
                        <h3>STARCH: Copy Number and Clone Inference from Spatial Transcriptomics Data</h3>
                        <p>Rebecca Elyanow, Ron Zeira, Max Land, Ben Raphael </p>
                        <br></br>
                        <p>Physical Biology: Special Issue (2020)</p>
                    </div>
                    <div className="publication-box">
                        <h3>An Upper Bound on the Burning Number of Graphs</h3>
                        <p>Max Land, Linyuan Lu</p>
                        <br></br>
                        <p>International Workshop on Algorithms and Models for the Web-Graph (2016)</p>
                    </div>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                </div>
            </div>
          );
    }
}

export default Research;
