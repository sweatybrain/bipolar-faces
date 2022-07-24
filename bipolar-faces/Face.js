import { JustFace } from './JustFace'
import { Eyes } from './Eyes'
import { Mouth } from './Mouth'
import { FaceContainer } from './FaceContainer'

export const Face = ({width,
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
    
    		<Mouth mouthRadius={mouthRadius} 
          		 mouthWidth={mouthWidth} />

    </FaceContainer>
  )