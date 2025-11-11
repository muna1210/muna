import { useState } from "react";

export default function Calculate() {
   const [data, SetData] = useState([]);
   const [sum, SetSum] = useState(0);
   const [max, SetMax] = useState(0);
   const [average, SetAverage] = useState(0);
   const calculateSum = (a, b) => { SetSum(a + b);};
   const calculateMax = (a, b, c) => { 
    let max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    SetMax(max);
   };
   const calculateAverage = (a, b, c) => { SetAverage((a + b + c)/3);
      SetAverage(avg);
   };
   const addtoData = (value) => {
   const num = Number(Inputvalue);
    SetData([...data, value]);
    SetInputValue("");
   };
   return(
      <div>
         <button onClick ={() => addNumbers(6, 4)}>6 + 4</button>
         <p>Sum: {sum} </p>

         <button onClick ={() => findMax(6, 4, 2)}>Max</button>
         <p>Max: {max} </p>

         <button onClick ={() => calcAverage(6, 4, 2)}>Calculate Average</button>
         <p>Average: {average} </p>

         <div>
         <input
         value = {inputValue}
         onChange = {(e) => setInputValue(e.target.value)}
         />
         <button onClick ={() => addtoData(Number(inputValue))}>Add to Data</button>
         <p>Data: {data.join(", ")} </p>
         </div>
      </div>
   );

}
