import { csvParse } from 'd3-dsv';
import './App.css';
import { useState, useCallback, useEffect } from 'react'
import { csvFormat } from 'd3-dsv';
import { csv } from 'd3';
import { message } from './TweetViz/Message';

 
const height = 960;
const width = 500;
const csvUrl = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv"

const App = ()  => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return <div>{data ? 'Data is ' + message(data): 'Loading....'} </div>;
};

  return(
  <div>
    <pre id='messageContainer'>
      {message}
    </pre>
  </div>)
}

export default App;
