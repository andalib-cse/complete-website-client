import React, { useContext } from 'react';
import AdminMenu from '../AdminMenu';
import Header from '../../Header/Header';
import deleteImg from '../../../../img/admin/delete.png';
import api from '../../../BaseURL';
import { Spinner } from 'react-bootstrap';
import { AdminServiceContext } from '../../../Context/AdminServiceContext';
import '../A_OrderList/A_OrderList.css';

const D_ManageServices = () => {
    document.title = 'Manage Services';

    const { allRequestedService, loading } = useContext(AdminServiceContext);
    console.log(allRequestedService)

    const handleDelete = (id) => {
        if (window.confirm('Are you sure to delete this record?')) {
            const respons = api.delete('deleteClientService/' + id);
            console.log(respons)
            if (respons) {
                alert('Delete Successfully...')
            }
        }
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

                                        return <tr key={_id}>
                                            <td>{index + 1}</td>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{serviceName}</td>
                                            <td>{payment_method}</td>
                                            <td><img src={deleteImg} onClick={() => handleDelete(service._id)} className="delete_img" alt="" /></td>
                                        </tr>;
                                    })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default D_ManageServices;