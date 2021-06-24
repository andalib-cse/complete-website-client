import './Section2_Static_Service.css';

const Section2_Static_Service = () => {
    return (
        <section className="running_service_area">

            <div className="static_title">
                <h4>Services with soft touch</h4>
                <h5>Discover out inner beauty with us which may change your life</h5>
            </div>

            <div className="service_thumbnail_container">

                <div className="service_thumbnail hover_effect">
                    <figure><img src="./img/banners/p2.png" alt="" /></figure>
                    <p className="title">Face makeup with a brush...</p>
                    <p> Dhaka, Bangladesh</p>
                </div>

                <div className="service_thumbnail hover_effect">
                    <figure><img src="./img/banners/p3.png" alt="" /></figure>
                    <p className="title">Facial</p>
                    <p> Dhaka, Bangladesh</p>
                </div>

                <div className="service_thumbnail hover_effect">
                    <figure> <img src="./img/banners/p1.png" alt="" /></figure>
                    <p className="title">Pedicure </p>
                    <p> Dhaka, Bangladesh</p>
                </div>
            </div>
        </section>
    );
};

export default Section2_Static_Service;