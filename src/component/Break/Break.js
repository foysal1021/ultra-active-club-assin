import React, {} from 'react';
import './Break.css';

const Break = (props) => {
const brakeTime = props.brakeTime;
//     const [getBreak,setBreak] = useState([]);


// const breakBtn = (e)=>{
//     // console.log(e);
//     const newAdd = [getBreak,e];
//     setBreak(newAdd);
// }
// let f = 0;
// for(const x of getBreak){
//     f=x;
// }
// console.log(f);


    return (
        <div>
            <p> <strong className=' fs-5'>Add A Break </strong> </p>
            <div className='p-3 break-items d-flex justify-content-between bg-info rounded '>
                <button  id='btn1' onClick={()=>brakeTime(document.getElementById('btn1').value)} value={10}> <strong>10<span>s</span></strong> </button>
                <button  id='btn2' onClick={()=>brakeTime(document.getElementById('btn2').value)} value={20}> <strong>20<span>s</span></strong> </button>
                <button  id='btn3' onClick={()=>brakeTime(document.getElementById('btn3').value)} value={30}> <strong>30<span>s</span></strong> </button>
                <button  id='btn4' onClick={()=>brakeTime(document.getElementById('btn4').value)} value={40}> <strong>40<span>s</span></strong> </button>
                <button  id='btn5' onClick={()=>brakeTime(document.getElementById('btn5').value)} value={50}> <strong>50<span>s</span></strong>  </button>

            </div>
        </div>
    );
};

export default Break;