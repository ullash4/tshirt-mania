import React from 'react';

const Tshirt = ({shirt, handleAddCart}) => {
    const {name, price, picture} = shirt;
    return (
        <div className='p-5 rounded-xl shadow-xl bg-white'>
            <img className='h-80 w-full mx-auto' src={picture} alt="" />
            <h1 className='text-xl font-bold'>{name}</h1>
            <p className='text-2xl font-semibold'>Price: ${price}</p>
            <button className="rounded-lg p-2 mt-5 bg-slate-400 text-white hover:bg-black hover:text-white" onClick={()=>handleAddCart(shirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;