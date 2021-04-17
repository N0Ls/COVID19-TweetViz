export const AxisLeft = ({yScale, innerWidth}) => (
    yScale.ticks().map(tickValue =>(
    <g className='tick' transform={`translate(0,${yScale(tickValue)})`}>
      <line 
        x2={innerWidth}
        stroke="black"
      />
      <text style={{textAnchor:'end'}}
        key={tickValue}
        dy={"0.32em"}
        x={-12}
      >
        {tickValue}
      </text>
      </g>
    ))
  )