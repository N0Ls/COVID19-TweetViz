import './App.css';
import './index.css'


import { csv, scaleBand, scaleLinear, scaleTime, min, max, format, forceSimulation, forceCollide, forceX, forceY, forceManyBody, timeout} from 'd3';
import { useData } from './TweetViz/useData';
import { AxisBottom } from './TweetViz/AxisBottom'
import { AxisLeft } from './TweetViz/AxisLeft'
import { Marks } from './TweetViz/Marks'



const width = 3000;
const height = 5000;
const margin = {left : 250, right : 20, bottom:100, top:50};
const centerY = height/2;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xAxisLabelOffset = 60;

const yValue = d => d.formatedDate;
const xValue = d => d.x;
const veracity = d => d.veracity;

const siFormat = format('.2s')
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B')

const App = ()  => {

  const data = useData();
  if(!data){
    return(<div>Loading....</div>)
  }


  //console.log(data[0]);
  //.domain([0, max(data, xValue)])
  let simulation;



const yScale = scaleTime()
  .domain([min(data, yValue), max(data, yValue)])
  .range([0, innerHeight])
  .nice();

const xScale = scaleLinear()
  .domain([min(data, xValue), max(data, xValue)])
  .range([0, innerWidth]);


  data.map(d => d.fy = yScale(yValue(d)))


  // console.log(simulation)
    

  if(data){
    simulation = forceSimulation(data)
    .force("collide", forceCollide(d=> d.influenceNumber+10))
    // .force('charge', forceManyBody().strength(-150))
    .stop()
    .tick(240)
  

  } 

  const restartSim = () => {
    simulation.tick()
    console.log("pute")
  }




  return (
    <svg width={width} height={height} onClick={restartSim}>
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
          veracity={veracity}
        />
      </g>
    </svg>
  );
};

export default App;
