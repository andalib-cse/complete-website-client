import React, { useState } from 'react';
import './C_MakeAdmin.css';
import AdminMenu from '../AdminMenu';
import Header from '../../Header/Header';
import { baseURL } from '../../../BaseURL';

const C_MakeAdmin = () => {

    document.title = 'Make Admin';

    const [adminEmail, setAdminEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (adminEmail) {

            const email = { adminEmail };

            const url = baseURL + `addAdmin`;
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(email)
            })
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        alert('Admin Added Successfully...');
                    }
                })
                .catch(err => console.log(err));
        }

        // clear input values from input field...
        e.target.reset();
    }


    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <div className="main_container_admin">

            <AdminMenu />

            <main className="heading_area">

                <Header />

                {/* <!-- Another Section --> */}
                <section className="interaction_area">

                    <div className="admin_making_area">


                        <form onSubmit={handleSubmit} method="post" className="admin_making_input">
                            <div className="input_flex">
                                <label htmlFor="admin_email">Email</label>
                                <input
                                    required
                                    type="email"
                                    id="admin_email"
                                    placeholder="jon@gmail.com"
                                    onChange={event => setAdminEmail(event.target.value)} />
                            </div>

                            <div>
                                <button className="make_admin_submit_btn" type="submit">Submit</button>
                            </div>
                        </form>

                    </div>
                </section>
            </main>
        </div>
    );
};

export default C_MakeAdmin;