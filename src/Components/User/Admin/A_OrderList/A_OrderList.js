import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { baseURL } from '../../../BaseURL';
import { AdminServiceContext } from '../../../Context/AdminServiceContext';
import AdminMenu from '../AdminMenu';
import Header from '../../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './A_OrderList.css';


const A_OrderList = () => {
    document.title = 'Order List';

    const { allRequestedService, loading } = useContext(AdminServiceContext);


    const handleStatus = (event) => {

        const id_status = event.target.value;
        const data = id_status.split(' ');

        const id = data[0];
        const status = data[1];

        updateStatus(id, status);
    }

    const updateStatus = (id, status) => {

        const url = baseURL + `update/${id}`;
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({ status }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }



    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <div className="main_container_admin">

            <AdminMenu />

            <main className="heading_area">

                <Header />

                <section className="interaction_area">

                    <table className="admin_table_service_list">
                        <thead>
                            <tr className="table_header">
                                <th>No</th>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Pay With</th>
                                <th>Status</th>
                            </tr>
                        </thead>


                        <tbody>
                            {
                                loading
                                    ? <Spinner animation="border" variant="danger" />
                                    : allRequestedService.map((service, index) => {

                                        const { _id, name, email, serviceName, payment_method } = service;

                                        return (
                                            <tr key={_id}>
                                                <td>{index + 1}</td>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{serviceName}</td>
                                                <td>{payment_method}</td>
                                                <td>
                                                    <select name="serviceStatus" onChange={handleStatus} >
                                                        <option className="pending" value={`${_id} Pending`}>Pending</option>
                                                        <option className="on_going" value={`${_id} On-Going`}>On Going</option>
                                                        <option className="done" value={`${_id} Done`}>Done</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default A_OrderList;