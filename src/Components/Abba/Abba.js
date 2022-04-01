import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister'

const Abba = ({house, gift}) => {
    return (
        <div className='border-2 border-red-600 m-5 p-5'>
            <h1>This is Abba and his houses are : {house}</h1>
            <div>
                <Myself house={house} gift={gift}></Myself>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Abba;