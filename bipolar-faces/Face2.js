import { JustFace } from './JustFace'
import { Eyes } from './Eyes'
import { Mouth2 } from './Mouth2'
import { FaceContainer } from './FaceContainer'

export const Face2 = ({width,
               height,
               centerY,
               centerX,
               strokeWidth,
               eyeOffsetX,
               eyeOffsetY,
               eyeRadius,
               mouthRadius,
               mouthWidth
              }) => (
     <FaceContainer width={width}
       							height={height} 
       							centerY={centerY} 
       							centerX={centerX}>
      	<JustFace radius={centerY - strokeWidth /2} 
          				strokeWidth={strokeWidth}/>
    
        <Eyes eyeOffsetX={eyeOffsetX} 
          		eyeOffsetY={eyeOffsetY} 
          		eyeRadius={eyeRadius}/>
    
    		<Mouth2 mouthRadius={mouthRadius} 
          		 mouthWidth={mouthWidth} />

    </FaceContainer>
  )