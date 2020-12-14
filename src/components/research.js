import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import spatial from '../images/spatial.png';
import coming_soon from '../images/coming_soon.png';

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
                        <div className="proj-image">
                            <img  src={coming_soon} alt="Coming Soon" />
                        </div>
                        <div className="proj-content">
                            <h3>PASTE: Probabilistic Alignment of ST Experiments &nbsp;<a href="https://github.com/raphael-group/paste" className="proj-link">
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
                            </h3>
                            <br></br>
                            <h4>Raphael Lab, 2020</h4>
                            <br></br>
                            <p>Developed a new computational method (PASTE) to align spots across adjacent spatial transcriptomics (ST) layers and integrate multiple ST replicates 
                                by leveraging both transcriptional similarity and spatial distances between spots.
                            </p>
                        </div>
                    </div>
                    <div className="spotlight">
                        <div className="proj-image">
                            <img  src={spatial} alt="Spatial Tissue" />
                        </div>
                        <div className="proj-content">
                            <h3>Determining Cancerous Regions in Breast Cancer Tissue &nbsp;<a href="https://github.com/mrland99/spatial-research" className="proj-link">
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
                            </h3>
                            <br></br>
                            <h4>Raphael Lab, 2020</h4>
                            <br></br>
                            <p> Showed PCA and percent dropout are strong predictors for identifying tumor region in spatial transcriptomics data of breast cancer tissue.  
                                Eliminated the need for prior characterization and establishment of gene expression profiles of specific cancer cell types.
                            </p>
                        </div>
                    </div>
                    <div className="heading"> 
                        <h1>Publications</h1>
                    </div>
        
                    <div className="spotlight-divider"></div>
                    <div className="publication-box">
                        <h3>STARCH: Copy number and clone inference from spatial transcriptomics data</h3>
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
