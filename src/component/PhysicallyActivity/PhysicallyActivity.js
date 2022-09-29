import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
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

            <div  className='col-12  col-lg-9'>
                <div className='m-5'>
                    <h3 className='text-start'> FA-exercises-Club </h3>
                    <h4 className='text-start'>Select your today’s exercise </h4>

                    <div className='row'>
                    {
                        exercises.map( exercise => <Exercise exercise={exercise}></Exercise> )
                    }
                    </div>

                </div> 
            </div>

            <div className='col-12 col-lg-3 bg-dark'>
                 hello wrold
            </div>
        </div>
    );
};

export default PhysicallyActivity;