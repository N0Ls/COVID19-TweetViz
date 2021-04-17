export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat}) => (
    data.map(d =>
    <rect
      className ="mark"
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
      style={{fill : 'hsl(158, 95%, 33%)'}}
    >
    <title>{tooltipFormat(xValue(d))}</title>
    </rect>
));