import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/gallery.css';

/* Portrait Images */
import maroon_bells from '../images/gallery-images/maroon_bells.jpg';
import maroon_bells_trail from '../images/gallery-images/maroon_bells_trail.jpg';
import glacier_point_sunset from '../images/gallery-images/glacier_point_sunset.jpg';
import john_muirs_trail from '../images/gallery-images/john_muirs_trail.jpg';
import sur from '../images/gallery-images/sur.jpg';
import golden_gate2 from '../images/gallery-images/golden_gate2.jpg';
import marigold_bee from '../images/gallery-images/bronx_marigold_bee.jpg'

/* Landscape Images */
import golden_gate1 from '../images/gallery-images/golden_gate1.jpg'
import pale_swallowtail from '../images/gallery-images/pale_swallowtail.jpg'
import poe_field from '../images/gallery-images/poe_field.jpg'
import poe_field_blinds from '../images/gallery-images/poe_field_blinds.jpg'
import thomas_lab from '../images/gallery-images/thomas_lab.jpg'
import old_city from '../images/gallery-images/old_city.jpg'
import blair from '../images/gallery-images/blair.jpg'
import richardson from '../images/gallery-images/richardson.jpg'
import sams_point from '../images/gallery-images/sams_point.jpg'

class Gallery extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="gallery">
                <Helmet>
                    <title>Max's Photos</title>
                    <meta name="description" content="Check out photos by Max Land. " />
                </Helmet>
                <p className="heading"> Landscape Gallery</p>
                <div className="gallery-image-landscape">    
                    <div className="img-box-landscape">
                        <img src={sams_point} alt="" />
                        <div className="transparent-box-landscape">
                        <div className="caption">
                            <p>Sam's Point</p>
                            <p className="opacity-low">Shot on Pxiel 5 -- with Brandy Chen</p>
                        </div>
                        </div> 
                    </div>

                    <div className="img-box-landscape">
                        <img src={maroon_bells} alt="" />
                        <div className="transparent-box-landscape">
                        <div className="caption">
                            <p>Maroon Bells</p>
                            <p className="opacity-low">Shot on GoPro HERO7 -- with Daniel Chae</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-landscape">
                        <img src={maroon_bells_trail} alt="" />
                        <div className="transparent-box-landscape">
                        <div className="caption">
                            <p>Maroon Bells Trail</p>
                            <p className="opacity-low">Shot on GoPro HERO7 -- with Daniel Chae</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-landscape">
                        <img src={glacier_point_sunset} alt="" />
                        <div className="transparent-box-landscape">
                        <div className="caption">
                            <p>Glacier Point</p>
                            <p className="opacity-low">Shot on Pixel 4a -- with Brandy Chen</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-landscape">
                        <img src={john_muirs_trail} alt="" />
                        <div className="transparent-box-landscape">
                        <div className="caption">
                            <p>Half Dome</p>
                            <p className="opacity-low">Shot on Pixel 4a -- with Brandy Chen</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="img-box-landscape">
                        <img src={sur} alt="" />
                        <div className="transparent-box-landscape">
                        <div className="caption">
                            <p>Bixby Creek Bridge</p>
                            <p className="opacity-low">Shot on Pixel 4a -- with Brandy Chen</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="img-box-landscape">
                        <img src={golden_gate2} alt="" />
                        <div className="transparent-box-landscape">
                        <div className="caption">
                            <p>Golden Gate Bridge</p>
                            <p className="opacity-low">Shot on Huawei P30 -- with Kate Land</p>
                        </div>
                        </div> 
                    </div>
           
                </div>
         
                <p className="heading"> Portrait Gallery</p>
                <div className="gallery-image-portrait"> 
                    <div className="img-box-portrait">
                        <img src={marigold_bee} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>Native NY Bee x Marigolds</p>
                            <p className="opacity-low">Shot on Pixel 4a</p>
                        </div>
                        </div> 
                    </div>

                    <div className="img-box-portrait">
                        <img src={golden_gate1} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>Golden Gate Bridge</p>
                            <p className="opacity-low">Shot on Huawei p30 -- with Kate Land</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-portrait">
                        <img src={pale_swallowtail} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>Pale Swallotail Butterfly</p>
                            <p className="opacity-low">Shot on Huawei Mate 9</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-portrait">
                        <img src={poe_field} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>Poe Field</p>
                            <p className="opacity-low">Shot on Google Nexus 6</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-portrait">
                        <img src={poe_field_blinds} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>Poe Field</p>
                            <p className="opacity-low">Shot on Google Nexus 6</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-portrait">
                        <img src={thomas_lab} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>Thomas Lab</p>
                            <p className="opacity-low">Shot on Google Nexus 6</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-portrait">
                        <img src={old_city} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>City</p>
                            <p className="opacity-low">Shot on Google Nexus 6</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-portrait">
                        <img src={blair} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>Blair</p>
                            <p className="opacity-low">Shot on Google Nexus 6</p>
                        </div>
                        </div> 
                    </div>
                    
                    <div className="img-box-portrait">
                        <img src={richardson} alt="" />
                        <div className="transparent-box-portrait">
                        <div className="caption">
                            <p>Richardson Auditorium</p>
                            <p className="opacity-low">Shot on Google Nexus 6</p>
                        </div>
                        </div> 
                    </div>
                
                </div>
            </div>
          );
    }
  
}

export default Gallery;