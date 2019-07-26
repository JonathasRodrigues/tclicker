import React, {useState } from 'react';
import useImage from 'use-image';
import { Spring, animated } from 'react-spring/renderprops-konva';


export default function Damage(props: any){
  const [status, changeStatus] = useState('standing');
  const [charImage] = useImage('/damage/death.png');
  const [isActive, setActive] = useState(true);
  const sta = [
    // x, y, width, height (6 frames)
    2, 0, 32, 32,
    34, 0, 32, 32,
    66, 0, 32, 32,
    98, 0, 32, 32,
    130, 0, 32, 32,

    2, 33, 32, 32,
    34, 33, 32, 32,
    66, 33, 32, 32,
    98, 33, 32, 32,
    130, 33, 32, 32,
  ];

  const stopped: any = [
    // x, y, width, height (6 frames)
  ];

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }

  const getRef = (node: any) => {
    if (node && !node.isRunning()) {
      node.start();
    }
  }

  if (!isActive) {
    return null;
  }
  setTimeout(() => setActive(false), 1000);
  return (
    <React.Fragment>
      {/* from={{ x: 128, y: 224 }} to={{ x: 128, y: 96 }} */}
      <Spring native from={{ x: 160, y: 256 }}>
      {(springProps: any) => (
          <animated.Sprite {...springProps}  ref={getRef} onClick={onClick}
          image={charImage} animations={{ standing: sta, stopped }} animation={status} frameRate={10} frameIndex={0} />
      )}
      </Spring>
    </React.Fragment>
  );
}