
import { useState } from 'react';
import CalculatorCalculation from './CalculatorCalculations';
import CalculatorForm from './CalculatorForm';
function CalculatorApp(){
    const initialCourseState={
        course:''
    }
    const [course,setCourse] = useState(initialCourseState);
    const handleChange=(e)=>{
        const {name:key,value} = e.target
            setCourse({...course , [key] : value})
    }
    // console.log('course:', course)
    return(
        <div>
            <CalculatorForm handleChange={handleChange}/>
            <CalculatorCalculation course={course}  />

        </div>
    )
}
export default CalculatorApp;