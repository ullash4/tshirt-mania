import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    // const {name, picture} = cart;
    return (
        <div className='mt-5'>
            <h1 className='text-2xl text-center font-mono font-semibold'>Selected Items: {cart.length}</h1>
            {
                cart.map(shirt=><div className='flex justify-between items-center m-5 border-red-300 border p-2 bg-gray-600 rounded-md'>
                    <img className='h-16 w-16 rounded-full' src={shirt.picture} alt="" />
                    <h4 className='text-xl font-bold'>{shirt.name}</h4>
                    <button className='bg-red-400 p-2 m-2 rounded-lg' onClick={()=>handleRemoveFromCart(shirt)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Cart;