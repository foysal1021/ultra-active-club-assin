import React from 'react';
import './Exercise.css';

// received props form physicallyActivity.js
const Exercise = (props) => {
    const {img,about,age,time,title} = props.exercise;
    const aboutSlice = about.slice(0,100);
    return (
        <div className='col-12 col-lg-4 exercise-info mt-5'>
            <div className='sub-exercise-info text-start p-3'>

            <img src={img} alt="" />

            <div className='mt-2'>
            <h3> {title} </h3>
            <p className='m-0'>{aboutSlice}.... </p>
            <p className='m-0'> <strong>for age :</strong>  {age} </p>
            <p className='m-0'> <strong> Time required : </strong> {time}s </p>
            <button> Add to List</button>
            </div>
            
            </div>
        </div>
    );
};

export default Exercise;