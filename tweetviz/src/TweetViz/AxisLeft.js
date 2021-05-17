export const AxisLeft = ({yScale}) => (
  yScale.ticks().map(tickValue =>(
    <g className="tick" key={tickValue} transform={`translate(0,${yScale(tickValue)})`}>
    <text
      x={-50} 
      dy = {"0.71em"}
      style={{textAnchor : 'middle'}}
    >
      {tickValue.toLocaleString([],{month: "short", day: "2-digit"})}
    </text>
    </g>
  ))
  )

