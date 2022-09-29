import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div>
            <p> <strong className=' fs-5'>Add A Break</strong> </p>
            <div className='p-3 break-items d-flex justify-content-between bg-info rounded '>
                <button><strong>10<span>s</span></strong></button>
                <button><strong>20<span>s</span></strong></button>
                <button><strong>30<span>s</span></strong></button>
                <button><strong>40<span>s</span></strong></button>
                <button><strong>50<span>s</span></strong></button>
            </div>
        </div>
    );
};

export default Break;