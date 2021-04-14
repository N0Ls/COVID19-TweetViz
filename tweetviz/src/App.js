import { csvParse } from 'd3-dsv';
import './App.css';
import { useState, useEffect } from 'react'
import { arc, csv } from 'd3';

const csvUrl = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv"

const width = 960;
const height = 500;
const centerX = width/2;
const centerY = height/2;

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width)

const App = ()  => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if(!data){
    return(<div>Loading....</div>)
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {data.map((d,i) => (
          <path
            fill={d['RGB hex value']} d={pieArc({
              startAngle : i / data.length * 2 * Math.PI,
              endAngle : (i+1) / data.length * 2 * Math.PI
            })}/>
        ))
        }

      </g>
    </svg>
  );
};

export default App;
