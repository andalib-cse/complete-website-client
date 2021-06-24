import { useEffect, useState } from 'react';
import star from '../../../img/star.png';
import api from '../../BaseURL';
import './Section4_User_Reviews.css';

const Section4_User_Reviews = () => {

    const [allUsersReviews, setAllUsersReviews] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await api.get('allReview');
            setAllUsersReviews(response.data);
        })();
    }, [])

    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <section className="user_review_area">

            <h2>Our Clients Reviews</h2>

            <div className="user_review_card_container">
                {
                    allUsersReviews.map(review => {
                        const { _id, photo, name, title, description } = review;
                        return (
                            <div className="user_review_card" key={_id}>
                                <div className="user_box">
                                    <div className="user_img">
                                        <img src={photo} alt="" />
                                    </div>
                                    <div className="user_info">
                                        <h4>{name}</h4>
                                        <h6>{title}</h6>
                                    </div>
                                </div>

                                <div className="user_review">
                                    <p>{description}</p>
                                </div>

                                <div className="user_rating">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Section4_User_Reviews;