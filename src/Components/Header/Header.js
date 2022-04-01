import React from 'react';
import CustomLink from './CustomLink';

const Header = () => {
    return (
        <div className='flex justify-around items-center p-5 bg-gray-100' >
            <div>
                <h4 className='text-2xl bold cursor-pointer hover:text-indigo-500 font-semibold'>Tshirts-Mania</h4>
            </div>
            <div className='flex justify-between items-center' >
                <CustomLink className='mr-5 text-xl' to={'/'}>Home</CustomLink>
                <CustomLink className='text-xl mr-5' to={'/orders'}>Order</CustomLink>
                <CustomLink className='text-xl' to={'/grandpa'}>Grandpa</CustomLink>
                
            </div>
        </div>
    );
};

export default Header;