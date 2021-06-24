import { useContext, useEffect, useState } from 'react';
import ClientMenu from '../ClientMenu';
import api from '../../../BaseURL';
import Header from '../../Header/Header';
import SingleService from './SingleService/SingleService';
import { UserLoginContext } from '../../../Context/UserLoginContext';
import { Spinner } from 'react-bootstrap';
import './B_Service_List.css';

const B_Service_List = () => {
    document.title = 'Service List';

    const { loginUser } = useContext(UserLoginContext);
    const [requestedService, setRequestedService] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadUserData = async () => {
        const response = await api.get(`yourServiceList?email=${loginUser.email}`);
        if (response.status === 200) {
            setLoading(false);
            setRequestedService(response.data);
        }
    }
    useEffect(() => {
        loadUserData();
    }, [requestedService]);

    //##########################################################################################
    //##########################################################################################
    //##########################################################################################

    return (
        <div className="main_container_admin">
            <ClientMenu />
            <main className="heading_area">
                <Header />

                {/* Another Section */}
                <section className="interaction_area client_service_container">
                    {
                        loading ?
                            <Spinner animation="border" variant="danger" /> :
                            null
                    }
                    {
                        requestedService.map(service => <SingleService info={service} key={service._id} />)
                    }
                </section>

            </main>

        </div>
    );
};

export default B_Service_List;