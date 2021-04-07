import './App.css';
import { range } from 'd3';
import { Face } from './TweetViz/Face';

const width = 166
const height = 166

const array = range (6 * 3)

const App = ()  => (
      <Face
        width = {width}
        height = {height}
        centerX = {width / 2}
        centerY = {height / 2}
        strokeWidth = {10}
        eyeOffsetX = {30}
        eyeOffsetY = {30}
        eyeRadius = {10}
        mouthWidth = {10}
        mouthRadius = {40}
      />
)

export default App;
