import React from 'react';
import Break from '../Break/Break';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='p-3 bg-warning'>
            {/* this is about section start */}
            <div className='about'>
                <div>
                    <img src="https://i.ibb.co/F4gMm2w/Screenshot-2.png" alt="" />
                </div>
                <div className=' ms-3'>
                    <p className='m-0'> <strong className='fs-3'>Foysal Ahamed</strong> </p>
                    <p className='m-0'> Dhaka,Bangladesh</p>
                </div>
            </div>

            <div className='about-more d-flex justify-content-between px-5 bg-info my-3 rounded p-2'>
                <div> 
                    <p className='m-0'> <strong className='fs-3'>70</strong><span className='fs-6'>kg</span> </p>
                    <p className='m-0'> Weight</p>
                </div>
                <div className=''>
                <p className='m-0'> <strong className='fs-3'>5.8</strong> </p>
                    <p className='m-0'> Height</p>
                </div>
                <div>
                <p className='m-0'> <strong className='fs-3'>21</strong><span className='fs-6'>yrs</span> </p>
                    <p className='m-0'>Age</p>
                </div>
            </div>
            {/* this is about section end */}

            {/* this is Break component start*/}
            <Break></Break>
            {/* this is Break component end */}




        </div>
    );
};

export default AboutMe;