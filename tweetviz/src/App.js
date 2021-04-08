import { csvParse } from 'd3-dsv';
import './App.css';

const App = ()  => {
 
  // const promise = fetch(url);
  // promise.then(response =>{
  //   response.text().then(text =>{
  //     console.log(text)
  //   })
  // })
  const fetchText = async (url) => {
    const response = await fetch(url);
    return await response.text();
  }
  const csvUrl = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv"

  let message = ''

  fetchText(csvUrl).then(text => {
    const data = csvParse(text);
    message += data.length + ' rows\n';
    message += data.columns.length + ' columns\n';
    message += Math.round(text.length / 1024) + ' kB\n';
  })

  return(
  <div>
    <pre id='messageContainer'>
      {message}
    </pre>
  </div>)
}

export default App;
