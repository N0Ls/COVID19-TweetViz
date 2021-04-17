export const AxisLeft = ({yScale}) => (
    yScale.domain().map(tickValue =>(
    <g className='tick'>
      <text style={{textAnchor:'end'}}
        key={tickValue}
        dy={"0.32em"}
        x={-12}
        y={yScale(tickValue)+ yScale.bandwidth()/2}
      >
        {tickValue}
      </text>
      </g>
    ))
  )