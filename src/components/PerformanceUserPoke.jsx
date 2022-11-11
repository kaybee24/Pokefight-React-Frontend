import React from 'react';
import PerformanceBars from './PerformanceBars.jsx';

const PerformanceUserPoke = () => {
    return (
        <div className='mx-4'>
            <PerformanceBars done="50" />
            <PerformanceBars done="70" />
            <PerformanceBars done="82" />
            <PerformanceBars done="44" />
            <PerformanceBars done="67" />
        </div>
    )
}

export default PerformanceUserPoke
