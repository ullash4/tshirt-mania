import React, { useContext } from 'react';
import { Myconstext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(Myconstext)
    return (
        <div className='border-2 border-yellow-500 m-5 p-5'>
            <h1>Special one!!!</h1>
            <h1>And my gift is: {ring}</h1>
        </div>
    );
};

export default Special;