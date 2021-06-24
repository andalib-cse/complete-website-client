import React from 'react';
import './Section5_Map.css';

const Section5_Map = () => {

    // https://www.maps.ie/create-google-map


    return (
        <section className="map_area">
            <div style={{ width: '100%' }}>

                <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dhaka+(Our%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

                </iframe>

                <a href="https://www.maps.ie/draw-radius-circle-map/"> </a>

            </div>
        </section>
    );
};

export default Section5_Map;