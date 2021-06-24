import React from 'react';
import './Section1_Banner.css';

const Section1_Banner = () => {
    document.title = 'Persona';

    return (
        <section className="banner_area">
            <div className="title_box">
                <h1>
                    Your Beauty <br /> is Our Priority
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, delectus ipsa recusandae molestias
                    nulla sit numquam laboriosam magnam porro explicabo?</p>
                <button>Service</button>
            </div>
            <div className="image_box">
                <img src="./img/banners/salon.jpg" alt="" />
            </div>
        </section>
    );
};

export default Section1_Banner;