import React from 'react';

const Tshirt = ({shirt}) => {
    const {name, price, picture} = shirt;
    return (
        <div className='p-5 rounded-xl shadow-xl bg-white'>
            <img className='h-80' src={picture} alt="" />
            <h1 className='text-xl font-bold'>{shirt.name}</h1>
            <p className='text-2xl font-semibold'>Price: ${price}</p>
            <button class="rounded-lg p-2 m-3 bg-slate-400 text-white hover:bg-black hover:text-white">Add to cart</button>
        </div>
    );
};

export default Tshirt;