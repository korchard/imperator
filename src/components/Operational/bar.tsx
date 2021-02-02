import React, {useState} from 'react';
import Chart from "react-apexcharts";

const Operational: React.FC = () => {
    const [options, setOptions] = useState({
        options: {
            chart: {
                id: 'basic-bar'
            },
            xaxis: {
                categories: [100, 200, 300]
            }
        }
    })
  return (
    <div >
        
        
    </div>
  );
}


export default Operational;