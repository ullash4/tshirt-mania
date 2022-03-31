import React from 'react';
import useProducts from '../Hooks/useProducts';
import Tshirt from './Tshirt';

const Home = () => {
    const [tshirts, setTshirts] = useProducts()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='row-span-1 md:col-span-2 bg-slate-300'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-5'>
                {
                    tshirts.map(shirt=><Tshirt key={shirt._id} shirt={shirt}></Tshirt>)
                }
                </div>
            </div>
            <div className='bg-blue-500'>
                thsi is cart
            </div>
        </div>
    );
};

export default Home;