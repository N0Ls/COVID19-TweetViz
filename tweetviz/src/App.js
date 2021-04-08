import './App.css';
import { Face } from './TweetViz/Face';


const height = 960;
const width = 500;
const circleX = width / 2;
const circleY = height / 2;
const circleRadius = 30

const handleMouseMove = (event) => {
  const { clientX, clientY } = event;
  console.log({clientX : clientX, clientY : clientY})
}

const App = ()  => (
//  <Face
//   width = {160} 
//   height = {160}
//   centerX = {160/2}
//   centerY = {160/2}
//   strokeWidth = {5}
//   eyeOffsetX = {20}
//   eyeOffsetY = {35}
//   eyeRadius = {10}
//   mouthWidth = {5}
//   mouthRadius = {30}
//  />

<svg width={width} height={height} onMouseMove={handleMouseMove}>
  <circle 
    cx = {circleX}
    cy = {circleY}
    r  = {circleRadius}
  />
</svg>
)

export default App;
