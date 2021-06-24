import { createContext, useEffect, useState } from "react";
import api from '../BaseURL';

export const AdminServiceContext = createContext();

const AdminServiceContextProvider = ({ children }) => {

    const [allServices, setAllServices] = useState([]);
    const [allRequestedService, setAllRequestedService] = useState([]);
    const [loading, setLoading] = useState(true);


    const loadAllServicesFromAdmin = async () => {
        const response = await api.get('allServices')
        setAllServices(response.data);
    }

    const loadAllServiceRequest = async () => {
        const response = await api.get('allServiceRequest')
        setLoading(false);
        setAllRequestedService(response.data)
    }

    useEffect(() => {
        loadAllServicesFromAdmin();
    }, [allServices]);


    useEffect(() => {
        loadAllServiceRequest();
    }, [allRequestedService]);

    return (
        <AdminServiceContext.Provider value={{
            allServices, allRequestedService, loading
        }}>
            {children}
        </AdminServiceContext.Provider>
    );
};

export default AdminServiceContextProvider;