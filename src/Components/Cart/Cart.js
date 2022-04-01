import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {

    // const {name, picture} = cart;
    let command;
    if(cart.length === 0){
        command = <p>Please add items</p>
    }else if(cart.length === 2){
        command = <p>Please add atleast 4 items</p>
    }else{
        command = <p>Thanks for adding items</p>
    }

    return (
        <div className='mt-5'>
            <h1 className='text-2xl text-center font-mono font-semibold'>Selected Items: {cart.length}</h1>
            <h1 className='text-2xl text-center text-orange-400 font-thin'>{command}</h1>
            {
                cart.map(shirt=><div className='flex justify-between items-center m-5 border-red-300 border p-2 bg-gray-600 rounded-md'>
                    <img className='h-16 w-16 rounded-full' src={shirt.picture} alt="" />
                    <h4 className='text-xl font-bold'>{shirt.name}</h4>
                    <button className='bg-red-400 p-2 m-2 rounded-lg' onClick={()=>handleRemoveFromCart(shirt)}>Delete</button>
                </div>)
            }
            {cart.length !== 4 ? <p className='text-2xl text-center  font-thin'>Please add 4 items to show clear btn</p> : <button className='bg-red-400 p-2 m-2 rounded-lg'>clear all</button>}
        </div>
    );
};

export default Cart;