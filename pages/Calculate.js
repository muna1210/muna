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
   const calculateAverage = (a, b, c) => { SetAverage((a + b + c)/3);};
   const count = data.push("name");
   return(
      <button></button>
   );
}
