import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import perturbseq from '../images/perturbseq.png';
import EasyGov_logo from '../images/EasyGov_logo.png';
import helix from '../images/helix.png';
import google_shopping from '../images/google-shopping.jpg'
import dnaCrypterImg from '../images/dna-crypter.png';

function Projects() {

    return (
    <div className="Projects">
        <Helmet>
            <title>Max's Projects</title>
            <meta name="description" content="Here are a list of my projects. EasyGov, dna-crypter, Perturbseq, helix-sandbox, and Google Intern (Shoppping App notification center)." />
        </Helmet>
        <div class="spotlight-container">
            <div class="heading"> 
                <h1>Projects</h1>
            </div>

            <div class="spotlight-divider"></div>
            <div class="spotlight">
                <div class="proj-image">
                    <img  src={EasyGov_logo} alt="EasyGov Logo" />
                </div>
                <div class="proj-content">
                    <h3>EasyGov <a href="https://www.easygov.app/" class="proj-link"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
                    <br></br>
                    <h4>Co-founder, Spring 2020 - Present</h4>
                    <br></br>
                    <p>EasyGov was created to expedite the process of filling government forms, especially for non-native English speakers.
                        Users select an online form to fill out in their native language and can then download the official English version as a PDF with their
                        responses recorded.
                    </p>
                </div>
            </div>

            <div class="spotlight">
                <div class="proj-image">
                    <img  src={dnaCrypterImg} alt="dna-crypter" />
                </div>
                <div class="proj-content">
                    <h3>dna-crypter <a href="https://mrland99.github.io/dna-crypter/" class="proj-link"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
                    <br></br>
                    <h4>Personal Project</h4>
                    <br></br>
                    <p><b>dna-crypter</b> is a program that encodes ASCII text as a DNA sequence, and decodes vice versa. The source code is also available
                        for other developers to easily implement their own encryption algorithms.
                    </p>
                </div>
            </div>

            <div class="spotlight">
                <div class="proj-image">
                    <img  src={perturbseq} alt="Perturbseq" />
                </div>
                <div class="proj-content">
                    <h3>Perturbseq <a href="https://github.com/mrland99/Perturbseq" class="proj-link"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
                    <br></br>
                    <h4>QCB 455: Computational Biology, Fall 2019</h4>
                    <br></br>
                    <p>Performed cluster analysis on single-cell CRISPR data generated by a large-scale Perturb-seq experiment 
                        interrogating mammalian unfolded protein response and ER homeostasis using single cell and combinatorial CRISPR perturbations. 
                        Identified and annotated functionality of two additional gene clusters.</p>
                </div>
            </div>
        
            <div class="spotlight">
                <div class="proj-image">
                    <img src={helix} alt="DNA helix" />
                </div>
                <div class="proj-content">
                    <h3>helix-sandbox <a href="https://github.com/mrland99/helix-sandbox" class="proj-link"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
                    <br></br>
                    <h4>Personal Project</h4>
                    <br></br>
                    <p>Personal library of useful algorithms in computational biology (e.g. sequence aliginment). Each algorithm contains a demo along with the code.</p>
                </div>
            </div>

            <div class="spotlight">
                <div class="proj-image">
                    <img src={google_shopping} alt="Google Shopping" />
                </div>
                <div class="proj-content">
                    <h3>Notification Center</h3>
                    <br></br>
                    <h4>Google Intern, Summer 2019</h4>
                    <br></br>
                    <p>Co-lead for the Android Development of a new Notification Center in Google's Shopping App.
                         Added two brand-new features to Shopping App: Swipe to Dismiss, Batch Deletion.</p>
                </div>
            </div>
         </div>
    </div>
  );
}

export default Projects;
