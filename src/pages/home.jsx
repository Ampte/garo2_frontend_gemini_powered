import React from 'react';
import Navbar from '../components/navbar';
import Form from '../components/form';


const Home = () => {
    return(
        <>
        <div className='container'>
            <div className='row mb-5'>
                <Navbar/>
            </div>
            <div className='row'>
                <div className='col mt-5'>
                    <Form/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;