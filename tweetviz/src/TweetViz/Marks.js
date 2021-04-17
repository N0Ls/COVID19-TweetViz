export const Marks = ({data, xScale, yScale, xValue, yValue, tooltipFormat, colorValue}) => (
    data.map(d =>
    <circle
      className ="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={10}
      fill={colorValue(d)}
    >
    <title>{tooltipFormat(xValue(d))}</title>
    </circle>
));