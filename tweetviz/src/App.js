import './App.css';
import './index.css'

import { csv, scaleBand, scaleLinear, scaleTime, min, max, format} from 'd3';
import { useData } from './TweetViz/useData';
import { AxisBottom } from './TweetViz/AxisBottom'
import { AxisLeft } from './TweetViz/AxisLeft'
import { Marks } from './TweetViz/Marks'



const width = 1000;
const height = 1500;
const margin = {left : 250, right : 20, bottom:100, top:50};
const centerY = height/2;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xAxisLabelOffset = 60;

const yValue = d => d.formatedDate;
const xValue = d => d.Population;

const siFormat = format('.2s')
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B')

const App = ()  => {

  const data = useData();
  if(!data){
    return(<div>Loading....</div>)
  }

  //console.log(data[0]);
  //.domain([0, max(data, xValue)])

  const yScale = scaleTime()
    .domain([min(data, yValue), max(data, yValue)])
    .range([0, innerHeight])
    .nice();

  const xScale = scaleLinear()
    .domain([0, width])
    .range([0, innerWidth]);
    

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom 
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale}/>
        <text
          className='axis-label'
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor='middle'>
            Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};

export default App;
