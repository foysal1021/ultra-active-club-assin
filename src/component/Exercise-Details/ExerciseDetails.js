import React from 'react';
import './ExerciseDetails.css';

const ExerciseDetails = () => {
    return (
        <div className='my-3'>
            <p> <strong className='fs-5'>Exercise Details</strong> </p>

            <div className='Exercise-info d-flex justify-content-between p-3 rounded'>
                <p> <strong>Exercise time</strong> </p>
                <p> <span>200</span> seconds </p>
            </div>

            <div className='Exercise-info d-flex justify-content-between p-3 rounded mt-3'>
                <p> <strong>Break time</strong> </p>
                <p> <span>200</span> seconds </p>
            </div>

            <button> Activity Completed </button>


        </div>
    );
};

export default ExerciseDetails;