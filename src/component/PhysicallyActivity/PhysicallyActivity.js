// this is PhysicallyActivity compoent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPieChart } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import AboutMe from '../About-Me/AboutMe';
import Exercise from '../Exercise/Exercise';
import './PhysicallyActivity.css';

const PhysicallyActivity = () => {
    const [exercises,setExercises ]=useState([]);
    const [add,setAdd] = useState([]); //for Add to List
    const [getBreak,setBreak] = useState([]); // for break 
    //     const [getBreak,setBreak] = useState([]);



    

// data load form exercise.json
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then( data => setExercises(data))
    },[]);
// for add to list btn 
    const addList = (id)=>{
        const newAdd = [...add,id];
        setAdd(newAdd);
    }
// for Break btn
    const BreakBtnTime = (BreakValue)=>{
        console.log(BreakValue);
        const newBreak = [getBreak,BreakValue];
        setBreak(newBreak);
    }

    let BreakValue = 0;
    for(const Brak of getBreak){
        BreakValue = Brak;
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
                 <AboutMe  BreakValue={BreakValue} brakeTime ={BreakBtnTime} add={add}></AboutMe>
            </div>
        </div>
    );
};

export default PhysicallyActivity;