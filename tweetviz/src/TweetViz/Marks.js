export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat}) => (
    data.map(d =>
    <circle 
      className ="mark"
      key={yValue(d)+d.influenceFactor}
      cx={xScale(d.x)}
      cy={yScale(yValue(d))}
      r={d.influenceFactor}
      style={{fill : 'hsl(158, 95%, 33%)'}}
    >
    <title>{d.created_at}</title>
    </circle >
));