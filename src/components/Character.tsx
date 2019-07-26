import React, { useState } from 'react';

import { Sprite, Text } from 'react-konva';
import CharacterCLass from 'classes/Character';
import useImage from 'use-image';

export default function Character () {
  const character = new CharacterCLass({ name: 'Joohny', level: 1, outfit: '/sprites/mage.png' });
  const [charImage] = useImage(character.outfit);
  const sta = [
    // x, y, width, height (6 frames)
    470, 600, 48, 48,
    // 340, 470, 48, 48,
    // //340, 90, 48, 48,
    // 340, 280, 48, 48,
    
  ];
  const [coords] = useState({ x: 146, y: 84 });
  // const handler  = useCallback(
  //   (event: any) => {
  //     let clientX = coords.x;
  //     let clientY = coords.y;
  //     console.log(event.keyCode);
  //     // DIRETA  - 39
  //     // ESQUERDA - 37
  //     // BAIXO - 40
  //     // CIMA - 38
  //     if (event.keyCode === 39) {
  //       clientX = clientX + 32;
  //     }

  //     if (event.keyCode === 37) {
  //       clientX = clientX - 32;
  //     }

  //     if (event.keyCode === 38) {
  //       clientY = clientY - 32;
  //     }

  //     if (event.keyCode === 40) {
  //       clientY = clientY + 32;
  //     }

  //     setCoords({ x: clientX, y: clientY });
  //   },
  //   // eslint-disable-next-line
  //   [setCoords]
  // );
  
  // // Add event listener using our hook
  // useEventListener('keyup', handler);
  // console.log(coords);

  return (
    <React.Fragment>
      <Text x={coords.x -3} y={coords.y - 12} text={`${character.name}`} fontFamily={'Arial Black'} fontSize={12} fill={'#0bad42'}/>
      <Sprite x={coords.x} y={coords.y} ref={(node => {if(node && !node.isRunning()) node.start()})}
       image={charImage} animations={{ standing: sta }} animation={'standing'} frameRate={4} frameIndex={0} />
    </React.Fragment>
  );
}

// function useEventListener(eventName: string, handler: any, element = window){
//   // Create a ref that stores handler
//   const savedHandler: any = useRef();
  
//   // Update ref.current value if handler changes.
//   // This allows our effect below to always get latest handler ...
//   // ... without us needing to pass it in effect deps array ...
//   // ... and potentially cause effect to re-run every render.
//   useEffect(() => {
//     savedHandler.current = handler;
//   }, [handler]);

//   useEffect(
//     () => {
//       // Make sure element supports addEventListener
//       // On 
//       const isSupported = element && element.addEventListener;
//       if (!isSupported) return;
      
//       // Create event listener that calls handler function stored in ref
//       const eventListener = (event: any) => savedHandler.current(event);
      
//       // Add event listener
//       element.addEventListener(eventName, eventListener);
      
//       // Remove event listener on cleanup
//       return () => {
//         element.removeEventListener(eventName, eventListener);
//       };
//     },
//     [eventName, element] // Re-run if eventName or element changes
//   );
// };