import React, { useEffect, useState } from 'react';
import './PhysicallyActivity.css';

const PhysicallyActivity = () => {
    const [exercises,setExercises ]=useState([]);

    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then( data => setExercises(data))
    },[]);

    return (
        <div className=' row '>

            <div className='col-12 col-lg-8 bg-info'>
                <div className='bg-warning m-5'>
                    <h3 className='text-start'> FA-exercises-Club </h3>
                    <h4 className='text-start'>Select your today’s exercise </h4>

                    {
                        exercises.map( exercise => console.log(exercise))
                    }

                </div> 
            </div>

            <div className='col-12 col-lg-4 bg-dark'>
                 hello wrold
            </div>
        </div>
    );
};

export default PhysicallyActivity;