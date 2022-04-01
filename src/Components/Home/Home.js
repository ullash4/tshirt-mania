import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../Hooks/useProducts';
import Tshirt from './Tshirt';

const Home = () => {
    const [tshirts, setTshirts] = useProducts();

    const [carts, setCart] = useState([]);

    const handleAddCart=(shirt)=>{
        const exits = carts.find(shirts=>shirts._id === shirt._id)

        if(!exits && carts.length<3){
            setCart([...carts, shirt])
        }else{
            alert('items alreary added')
        }
    }

    const handleRemoveFromCart=(shirt)=>{
        const rest = carts.filter(cart=> cart._id !== shirt._id)
        setCart(rest)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='row-span-1 md:col-span-3 bg-slate-300'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-6 m-5'>
                {
                    tshirts.map(shirt=><Tshirt key={shirt._id} shirt={shirt} handleAddCart={handleAddCart}></Tshirt>)
                }
                </div>
            </div>
            <div className='bg-slate-200 '>
                <Cart cart={carts} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;