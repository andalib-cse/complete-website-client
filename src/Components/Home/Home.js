import React from 'react';
import Header from './Header/Header';
import Section1_Banner from './Section1_Banner/Section1_Banner';
import Section2_Static_Service from './Section2_Static_Service/Section2_Static_Service';
import Section3_Dynamic_Service from './Section3_Dynamic_Service/Section3_Dynamic_Service';
import Section4_User_Reviews from './Section4_User_Reviews/Section4_User_Reviews';
import Section5_Map from './Section5_Map/Section5_Map';
import Section6_Footer from './Section6_Footer/Section6_Footer';

const Home = () => {

    return (
        <main>
            <Header />
            <Section1_Banner />
            <Section2_Static_Service />
            <Section3_Dynamic_Service />
            <Section4_User_Reviews />
            <Section5_Map />
            <Section6_Footer />
        </main>
    );
};

export default Home;