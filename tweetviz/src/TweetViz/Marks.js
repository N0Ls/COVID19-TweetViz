export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat}) => (
    data.map(d =>
    <circle 
      className ="mark"
      key={yValue(d)}
      cx={0}
      cy={yScale(yValue(d))}
      r={d.influenceFactor}
      style={{fill : 'hsl(158, 95%, 33%)'}}
    >
    <title>{tooltipFormat(xValue(d))}</title>
    </circle >
));