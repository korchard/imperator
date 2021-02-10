import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';

const AllCompanyGraph = () => {
  
  const totalActionData = useSelector((store) => store.totalAction);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'FETCH_TOTAL_ACTIONS' });
  }, []); 
  
  const [opt, setOpt] = useState({
    series: [{
      name: 'Average company',
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Projects', 'Insights', 'Documents', 'Hashtags', 'Notes', 'Total']
      },
      yaxis: {
        title: {
          text: 'Actions'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function () {
            return "Actions"
          }
        }
      }
    }})

    const actions = [
      totalActionData.projects.count,
      totalActionData.insights.count,
      totalActionData.documents.count,
      totalActionData.hashtags.count,
      totalActionData.notes.count,
      (totalActionData.hashtags.count + totalActionData.documents.count + totalActionData.insights.count + totalActionData.notes.count + totalActionData.projects.count)
    ]
  return (
    <>
      <h4 className="titles">Average Company Actions</h4>
      <Chart options={opt.options} series={[
        { 
          ...opt.series,
          data: actions
        }
        ]} type="bar" height={350} />
    </>
  );
}

export default AllCompanyGraph;





