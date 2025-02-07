import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div >
             <Navbar />
             <div className='bg-white dark:bg-gray-900'> 
             <Outlet/>
             <Footer />
             </div>
            
        </div>
    );
}

export default Root;
