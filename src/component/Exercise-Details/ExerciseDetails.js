import React from 'react';
import './ExerciseDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = (props) => {
    let getTime = 0;
    for(const time of props.add){
        const creantTime =  +time.time;
        getTime = getTime + creantTime;
    }
    const activity = ()=>{
        alert('');
    }

    const notify =()=> toast("write your message here!!!")
    return (
        <div className='my-3'>
            <p> <strong className='fs-5'>Exercise Details</strong> </p>

            <div className='Exercise-info d-flex justify-content-between p-3 rounded'>
                <p> <strong>Exercise time</strong> </p>
                <p> <span>{getTime}</span> seconds </p>
            </div>

            <div className='Exercise-info d-flex justify-content-between p-3 rounded mt-3'>
                <p> <strong>Break time</strong> </p>
                <p> <span> {props.breakValue} </span> seconds </p>
            </div>

            <button onClick={notify} className='w-100 mt-3 Activity-Btn rounded bg-info'>
                 <strong> Activity Completed</strong> 
            </button>
            <ToastContainer/>


        </div>
    );
};

export default ExerciseDetails;