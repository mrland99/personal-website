import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/gallery.css';

/* Portrait Images */
import maroon_bells from '../images/gallery-images/maroon_bells.jpg';
import maroon_bells_trail from '../images/gallery-images/maroon_bells_trail.jpg';
import glacier_point_sunset from '../images/gallery-images/glacier_point_sunset.jpg';
import john_muirs_trail from '../images/gallery-images/john_muirs_trail.jpg';
import sur from '../images/gallery-images/sur.jpg';
import golden_gate2 from '../images/gallery-images/golden_gate2.jpg';

/* Landscape Images */
import golden_gate1 from '../images/gallery-images/golden_gate1.jpg'
import pale_swallowtail from '../images/gallery-images/pale_swallowtail.jpg'
import poe_field from '../images/gallery-images/poe_field.jpg'
import poe_field_blinds from '../images/gallery-images/poe_field_blinds.jpg'
import thomas_lab from '../images/gallery-images/thomas_lab.jpg'
import old_city from '../images/gallery-images/old_city.jpg'
import blair from '../images/gallery-images/blair.jpg'
import richardson from '../images/gallery-images/richardson.jpg'

function Gallery() {
  return (
    <div className="Gallery" class="gallery">
        <Helmet>
            <title>Max's Photos</title>
            <meta name="description" content="Check out photos by Max Land. " />
        </Helmet>
        <p class="heading"> Landscape Gallery</p>
        <div class="gallery-image-landscape">    
            <div class="img-box-landscape">
                <img src={maroon_bells} alt="" />
                <div class="transparent-box-landscape">
                <div class="caption">
                    <p>Maroon Bells</p>
                    <p class="opacity-low">Shot on GoPro HERO7 -- with Daniel Chae</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-landscape">
                <img src={maroon_bells_trail} alt="" />
                <div class="transparent-box-landscape">
                <div class="caption">
                    <p>Maroon Bells Trail</p>
                    <p class="opacity-low">Shot on GoPro HERO7 -- with Daniel Chae</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-landscape">
                <img src={glacier_point_sunset} alt="" />
                <div class="transparent-box-landscape">
                <div class="caption">
                    <p>Glacier Point</p>
                    <p class="opacity-low">Shot on Pixel -- with Brandy Chen</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-landscape">
                <img src={john_muirs_trail} alt="" />
                <div class="transparent-box-landscape">
                <div class="caption">
                    <p>Half Dome</p>
                    <p class="opacity-low">Shot on Pixel -- with Brandy Chen</p>
                </div>
                </div>
            </div>
            
            <div class="img-box-landscape">
                <img src={sur} alt="" />
                <div class="transparent-box-landscape">
                <div class="caption">
                    <p>Bixby Creek Bridge</p>
                    <p class="opacity-low">Shot on Pixel -- with Brandy Chen</p>
                </div>
                </div>
            </div>
            
            <div class="img-box-landscape">
                <img src={golden_gate2} alt="" />
                <div class="transparent-box-landscape">
                <div class="caption">
                    <p>Golden Gate Bridge</p>
                    <p class="opacity-low">Shot on Huawei P30 -- with Kate Land</p>
                </div>
                </div> 
            </div>
   
        </div>
 
        <p class="heading"> Portrait Gallery</p>
        <div class="gallery-image-portrait">  
            <div class="img-box-portrait">
                <img src={golden_gate1} alt="" />
                <div class="transparent-box-portrait">
                <div class="caption">
                    <p>Golden Gate Bridge</p>
                    <p class="opacity-low">Shot on Huawei p30 -- with Kate Land</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-portrait">
                <img src={pale_swallowtail} alt="" />
                <div class="transparent-box-portrait">
                <div class="caption">
                    <p>Pale Swallotail Butterfly</p>
                    <p class="opacity-low">Shot on Huawei Mate 9</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-portrait">
                <img src={poe_field} alt="" />
                <div class="transparent-box-portrait">
                <div class="caption">
                    <p>Poe Field</p>
                    <p class="opacity-low">Shot on Google Nexus 6</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-portrait">
                <img src={poe_field_blinds} alt="" />
                <div class="transparent-box-portrait">
                <div class="caption">
                    <p>Poe Field</p>
                    <p class="opacity-low">Shot on Google Nexus 6</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-portrait">
                <img src={thomas_lab} alt="" />
                <div class="transparent-box-portrait">
                <div class="caption">
                    <p>Thomas Lab</p>
                    <p class="opacity-low">Shot on Google Nexus 6</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-portrait">
                <img src={old_city} alt="" />
                <div class="transparent-box-portrait">
                <div class="caption">
                    <p>City</p>
                    <p class="opacity-low">Shot on Google Nexus 6</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-portrait">
                <img src={blair} alt="" />
                <div class="transparent-box-portrait">
                <div class="caption">
                    <p>Blair</p>
                    <p class="opacity-low">Shot on Google Nexus 6</p>
                </div>
                </div> 
            </div>
            
            <div class="img-box-portrait">
                <img src={richardson} alt="" />
                <div class="transparent-box-portrait">
                <div class="caption">
                    <p>Richardson Auditorium</p>
                    <p class="opacity-low">Shot on Google Nexus 6</p>
                </div>
                </div> 
            </div>
        
        </div>
    </div>
  );
}

export default Gallery;