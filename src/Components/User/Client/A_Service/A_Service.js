import { useContext } from 'react';
import ClientMenu from '../ClientMenu';
import creditCard from '../../../../img/client/credit_card.png';
import payPal from '../../../../img/client/payPal.png';
import Header from '../../Header/Header';
import api from '../../../BaseURL';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserLoginContext } from '../../../Context/UserLoginContext';
import './A_Service.css';
import { useHistory } from 'react-router-dom';


const A_Service = () => {
    document.title = 'Service';

    const { register, handleSubmit } = useForm();
    const { loginUser } = useContext(UserLoginContext);
    const { name, email } = loginUser;
    const history = useHistory();


    const onSubmit = (userInfo, e) => {

        userInfo.time = new Date();
        userInfo.status = 'Pending';
        console.log(userInfo);

        const data = api.post('clientRequestService', userInfo);
        if (data) {
            alert('Your Service Listed Successfully.');
            history.push('/client/service_list');
        }
        e.target.reset();
    }


    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (

        <div className="main_container_admin">

            <ClientMenu />

            <main className="heading_area">

                <Header />

                <section className="interaction_area">

                    <form onSubmit={handleSubmit(onSubmit)} className="user_service_area">

                        <input
                            required
                            type="text"
                            value={name}
                            placeholder="Your Name"
                            className="user_input"
                            {...register("name")} />

                        <input
                            required
                            type="text"
                            value={email}
                            placeholder="Your Email"
                            className="user_input"
                            {...register("email")} />

                        <div className="service_options">

                            <select className="user_input serviceName"
                                {...register("serviceName")} >
                                <option value='HearCut'>Hear Cut</option>
                                <option value='MakeUp'>MakeUp</option>
                                <option value='Manicure'>Manicure</option>
                                <option value='Pedicure'>Pedicure</option>
                                <option value='HairColor'>Hair Color</option>
                                <option value='Facial'>Facial</option>
                            </select>

                            <input
                                required
                                type="text"
                                //value={servicePrice}
                                placeholder="Service Price"
                                className="user_input servicePrice"
                                {...register("servicePrice")} />
                        </div>

                        <p>Pay with</p>
                        <div className="payment_method">
                            <input
                                type="radio"
                                id="creditCard"
                                value="creditCard"
                                {...register("payment_method")} />
                            <label htmlFor="creditCard">
                                <img src={creditCard} alt="" />Credit Card
                            </label>

                            <input
                                type="radio"
                                id="payPal"
                                value="payPal"
                                {...register("payment_method")} />
                            <label htmlFor="payPal">
                                <img src={payPal} alt="" />Paypal
                            </label>
                        </div>

                        <input
                            required
                            type="text"
                            placeholder="Card Number"
                            className="user_input"
                            {...register("card_number")} />

                        <div className="user_card">
                            <input
                                required
                                type="text"
                                placeholder="MM/YY"
                                className="user_input"
                                {...register("mm_yy")} />

                            <input
                                required
                                type="text"
                                placeholder="CVC"
                                className="user_input"
                                {...register("cvc")} />
                        </div>

                        <div className="user_payment_amount">
                            {/* <p>Your Service Charged will be <strong>$1000</strong></p> */}
                            <button className="client_submit_btn fl_right" type="submit">Pay</button>
                        </div>
                    </form>


                </section>

            </main>
        </div>

    );
};

export default A_Service;