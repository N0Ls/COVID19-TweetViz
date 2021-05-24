import { rgb } from "d3-color"

export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat, veracity}) => {
  
  const colors = {
    blue : rgb(118, 203, 236),
    rose : rgb(236, 99, 147),
    default : rgb(155,155,155)
  }

  var color;


  const getColor = (str) => {
    switch (str){
      case "fake":
        return colors.rose;
      case "real":
        return colors.blue;
      default :
        return colors.default;
    }
  }

  return data.map(d =>
    <circle 
      className ="mark"
      key={yValue(d)+d.influenceNumber+Math.random()}
      cx={xScale(d.x)}
      cy={yScale(yValue(d))}
      r={d.influenceNumber * 0.4}
      style={{fill : getColor(veracity(d))}}
    >
    <title>{d.created_at}</title>
    </circle >
  )
};