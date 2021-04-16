import './App.css';

import { csv, scaleBand, scaleLinear, max} from 'd3';
import { useData } from './TweetViz/useData';
import { AxisBottom } from './TweetViz/AxisBottom'
import { AxisLeft } from './TweetViz/AxisLeft'
import { Marks } from './TweetViz/Marks'



const width = 960;
const height = 500;
const margin = {left : 200, right : 20, bottom:20, top:50};
const centerY = height/2;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const yValue = d => d.Country;
const xValue = d => d.Population;

const App = ()  => {

  const data = useData();
  if(!data){
    return(<div>Loading....</div>)
  }

  //console.log(data[0]);

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.08);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);
    

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight}/>
        <AxisLeft yScale={yScale}/>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  );
};

export default App;
