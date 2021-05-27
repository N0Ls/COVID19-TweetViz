export const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
  xScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight} stroke="black" />
      <text y={innerHeight + 12} dy={"0.71em"} style={{ textAnchor: "middle" }}>
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
