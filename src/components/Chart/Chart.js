import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const datapointValues = props.dataPoints.map(datapoint => datapoint.value)
    const maximum = Math.max(...datapointValues)
    console.log(maximum)
  return (
    <div className='chart'>
      {props.dataPoints.map(datapoint => {
         return <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maximum}
          label={datapoint.label}
        />;
      })}
    </div>
  );
};

export default Chart
