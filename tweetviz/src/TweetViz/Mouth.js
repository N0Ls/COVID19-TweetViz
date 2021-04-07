import {arc} from 'd3';

export const Mouth = ({mouthRadius, mouthWidth}) => {
    const mouthArc = arc()
        .innerRadius(mouthRadius - mouthWidth)
        .outerRadius(mouthRadius)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI*3 / 2);
    
    return <path d={mouthArc()}></path>
}