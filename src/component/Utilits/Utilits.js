const localBreak = (id)=>{

    let BreakTime = {};
    const storBreakTime = localStorage.getItem('break');
    if(storBreakTime){
        BreakTime = JSON.parse(storBreakTime);
    }

const Quentiti = BreakTime[id];
if(Quentiti){
    const newQuentiti = Quentiti;
    BreakTime[id] = newQuentiti;
}else{
    BreakTime[id]=id;
}
localStorage.setItem('break',JSON.stringify(BreakTime));
}

export{localBreak}

