import React from 'react'
import ReactDOM from 'reactdom'
import { range } from 'd3'
import { Face } from './Face'
import { Face2 } from './Face2'

const width=150
const height=150

const array = range(9);


const App = () => array.map(() => (
  <>
  	<Face
      width={width}
      height={height}
      centerX={width/2}
			centerY={height/2}
			strokeWidth={5}
			eyeOffsetX={40}
			eyeOffsetY={30}
			eyeRadius={6}
			mouthWidth={7}
			mouthRadius={40}      
      />
  
   	<Face2
      width={width}
      height={height}
      centerX={width/2}
			centerY={height/2}
			strokeWidth={5}
			eyeOffsetX={40}
			eyeOffsetY={30}
			eyeRadius={6}
			mouthWidth={7}
			mouthRadius={40}      
      />
  </>
)
)


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)