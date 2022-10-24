import "./ChartBar.css";

const ChartBar = (props) => {
  let heightOfBar = "0%";
  if (props.maxValue > 0) {
    heightOfBar = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log(props.maxValue)
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: heightOfBar }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
    
  );
};

export default ChartBar;
