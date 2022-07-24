import { arc } from 'd3'

    export const Mouth2 = ({mouthRadius, mouthWidth}) => {
    const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / -2)
    .endAngle(Math.PI * 0.5)
    
  	return <g transform="translate(0, 35 )"> <path d={mouthArc()} /> </g>
}