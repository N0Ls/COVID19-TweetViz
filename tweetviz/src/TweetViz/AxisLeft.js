export const AxisLeft = ({yScale}) => (
    yScale.domain().map(tickValue =>(
      <text style={{textAnchor:'end'}}
        key={tickValue}
        dy={"0.32em"}
        x={-3}
        y={yScale(tickValue)+ yScale.bandwidth()/2}
      >
        {tickValue}
      </text>
    ))
  )