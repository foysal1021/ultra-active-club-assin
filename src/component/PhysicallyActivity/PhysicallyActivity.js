// this is PhysicallyActivity compoent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPieChart } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import AboutMe from '../About-Me/AboutMe';
import Exercise from '../Exercise/Exercise';
import './PhysicallyActivity.css';

const PhysicallyActivity = () => {
    const [exercises,setExercises ]=useState([]);
    const [add,setAdd] = useState([]);
// data load form exercise.json
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then( data => setExercises(data))
    },[]);

    const addList = (id)=>{
        const newAdd = [...add,id];
        setAdd(newAdd);
    }






    return (
        <div className=' row '>

            <div  className='col-12  col-lg-9'>
                <div className='m-5'>
                    <h3 className='text-start'> <FontAwesomeIcon icon={faPieChart}></FontAwesomeIcon>  FA-exercises-Club </h3>
                    <h4 className='text-start'>Select your today’s exercise </h4>

                    <div className='row'>
                    {
                        exercises.map( exercise => <Exercise click={addList} exercise={exercise}></Exercise> )
                    }
                    </div>

                </div> 
            </div>

            <div className='col-12 col-lg-3'>
                 <AboutMe add={add}></AboutMe>
            </div>
        </div>
    );
};

export default PhysicallyActivity;