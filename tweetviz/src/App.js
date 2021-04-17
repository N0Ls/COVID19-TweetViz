import './App.css';
import './index.css'

import { csv, scaleBand, scaleLinear, max, format, extent} from 'd3';
import { useData } from './TweetViz/useData';
import { AxisBottom } from './TweetViz/AxisBottom'
import { AxisLeft } from './TweetViz/AxisLeft'
import { Marks } from './TweetViz/Marks'



const width = 1000;
const height = 600;
const margin = {left : 100, right : 20, bottom:100, top:50};
const centerY = height/2;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xAxisLabelOffset = 60;
const yAxisLabelOffset = 60;

const xValue = d => d.sepal_length;
const yValue = d => d.sepal_width;

const colorValue = d => d.Color;

const xAxisLabel = 'Sepal Length'
const yAxisLabel = 'Sepal Width'


const siFormat = format('.2s')

const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B')

const App = ()  => {

  const data = useData();
  if(!data){
    return(<div>Loading....</div>)
  }


  const xScale = scaleLinear()
  .domain(extent(data, xValue))
  .range([0, innerWidth])
  .nice();
  
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])



  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom 
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} innerWidth={innerWidth}/>
        <text
          className='axis-label'
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor='middle'>
            {xAxisLabel}
        </text>
        <text
          className='axis-label'
          textAnchor='middle'
          transform={`translate(${-yAxisLabelOffset},${innerHeight/2}) rotate(-90)`}
          >
            {yAxisLabel}
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          colorValue={colorValue}
        />
      </g>
    </svg>
  );
};

export default App;
