import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import spatial from '../images/spatial.png';
import coming_soon from '../images/coming_soon.png';
import human_atlas from '../images/human_atlas.png';

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
                        <h1>Research</h1>
                    </div>
        
                    <div className="spotlight-divider"></div>
                        <div className="spotlight">
                            <div className="proj-image">
                                <img  src={coming_soon} alt="EasyGov Logo" />
                            </div>
                            <div className="proj-content">
                                <h3>Tissue Alignment via Optimal Transport
                                </h3>
                                <br></br>
                                <h4>Raphael Lab, Summer 2020</h4>
                                <br></br>
                                <p>Currently developing a method based in Optimal Tranport Theory that utilizes both spatial and gene expression data to align
                                     tissue layers.
                                </p>
                            </div>
                        </div>
                        <div className="spotlight">
                            <div className="proj-image">
                                <img  src={spatial} alt="Spatial Tissue" />
                            </div>
                            <div className="proj-content">
                                <h3>Determining Cancerous Regions in Breast Cancer Tissue <a href="https://github.com/mrland99/spatial-research" className="proj-link">
                                    <FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
                                </h3>
                                <br></br>
                                <h4>Raphael Lab, Spring 2020</h4>
                                <br></br>
                                <p>Developed two novel methods to distinguish between normal cells and cancer cells
                                    without needing prior characterization and establishment of gene expression profiles for the cancer cells.  
                                    Instead, these methods consider the entire transcriptome as a whole and use PCA and percent dropout to reduce the data
                                    to one dimensional feature vectors.
                                </p>
                            </div>
                        </div>
                 </div>
            </div>
          );
    }
}

export default Research;
