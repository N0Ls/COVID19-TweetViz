export const AxisLeft = ({ yScale, innerWidth }) =>
  yScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(0,${yScale(tickValue)})`}
    >
      <line x2={innerWidth} stroke="black" />
      <text x={-50} dy={"0.3em"} style={{ textAnchor: "middle", color : "white" }}>
        {tickValue.toLocaleString([], { month: "short", day: "2-digit" })}
      </text>
    </g>
  ));
