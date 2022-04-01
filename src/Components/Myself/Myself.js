import React from 'react';
import Special from '../Special/Special';

const Myself = ({house, gift}) => {
    return (
        <div className='border-2 border-yellow-500 m-5 p-5'>
            <h1>This is Me and my houses are {house}</h1>
            <Special gift={gift}></Special>
        </div>
    );
};

export default Myself;