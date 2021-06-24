import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserLoginContext } from '../../../Context/UserLoginContext';
import api from '../../../BaseURL';
import ClientMenu from '../ClientMenu';
import Header from '../../Header/Header';
import '../A_Service/A_Service.css';


const C_Review = () => {
    document.title = 'Review';

    const { loginUser } = useContext(UserLoginContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (userInfo, e) => {

        userInfo.photo = loginUser.photo;
        userInfo.time = new Date();

        const data = api.post('review', userInfo);
        if (data) {
            alert('Thanks For Your Review...');
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

                {/* Another Section */}
                <section className="interaction_area">

                    <form onSubmit={handleSubmit(onSubmit)} className="review_area">

                        <input
                            required
                            type="text"
                            placeholder="Your name"
                            className="user_input"
                            {...register("name")}
                        />

                        <input
                            required
                            type="text"
                            placeholder="Company Name | Designation"
                            className="user_input"
                            {...register("title")}
                        />

                        <textarea
                            rows="10"
                            cols="40"
                            className="user_input"
                            placeholder="Share Your Review With Us "
                            {...register("description")}
                        >
                        </textarea>

                        <button className="client_submit_btn" type="submit">Submit</button>

                    </form>
                </section>
            </main>
        </div>
    );
};

export default C_Review;