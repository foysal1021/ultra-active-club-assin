// this is PhysicallyActivity compoent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPieChart } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import AboutMe from '../About-Me/AboutMe';
import Exercise from '../Exercise/Exercise';
import './PhysicallyActivity.css';
import { localBreak } from '../Utilits/Utilits';

const PhysicallyActivity = () => {
    const [exercises,setExercises ]=useState([]);
    const [add,setAdd] = useState([]); //for Add to List
    const [getBreak,setBreak] = useState([]); // for break 

    const [getData,setData] = useState(0);

// data load form exercise.json
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then( data => setExercises(data))
    },[]);


// for add to list btn start
    const addList = (exercisesInfo)=>{
        const newAdd = [...add,exercisesInfo];
        setAdd(newAdd);
    }
// for add to list btn end


// for Break btn start
    const BreakBtnTime = (BreakValue)=>{
        const newBreak = [getBreak,BreakValue];
        setBreak(newBreak);
        localBreak(BreakValue);
        const getData = localStorage.getItem('break');
        // console.log(getData)
        console.log(BreakValue);
        const newDta = getData.BreakValue;
        setData(newDta);
    }

    let BreakValue = 0;
    for(const Brak of getBreak){
        BreakValue = Brak;
    }
// for Break btn end

console.log(getData)
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