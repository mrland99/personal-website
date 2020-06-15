import React from 'react';
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import spatial from '../images/spatial.png';

function Research() {

  return (
    <div className="Projects">
        <div class="spotlight-container">
            <div class="heading"> 
                <h1>Research</h1>
            </div>

            <div class="spotlight-divider"></div>
            <div class="spotlight">
                <div class="proj-image">
                    <img  src={spatial} alt="EasyGov Logo" />
                </div>
                <div class="proj-content">
                    <h3>Determining Cancerous Regions in Breast Cancer Tissue <a href="https://github.com/mrland99/spatial-research" class="proj-link">
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
                    </h3>
                    <br></br>
                    <h4>Raphael Lab, Spring 2020</h4>
                    <br></br>
                    <p>Developed two novel methods to distinguish between normal cells and cancer cells
                        without requiring prior characterization and establishment of gene expression profiles of varioustypes of cancer cells.  
                        Instead, these methods consider the entire transcriptome as a whole and use PCA and percent dropout to reduce our data
                         to one dimensional feature vectors.
                    </p>
                </div>
            </div>
         </div>
    </div>
  );
}

export default Research;
