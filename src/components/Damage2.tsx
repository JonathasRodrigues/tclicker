import React, {useState } from 'react';
import useImage from 'use-image';
import { Spring, animated } from 'react-spring/renderprops-konva';


export default function Damage2(props: any){
  const [status] = useState('standing');
  const [charImage] = useImage('/damage/ice.png');
  const [isActive, setActive] = useState(true);
  const sta = [
    // x, y, width, height (6 frames)
    2, 0, 64, 64,
    66, 0, 64, 64,
    132, 0, 64, 64,
    196, 0, 64, 64,
    254, 0, 64, 64,

    2, 64, 64, 64,
    66, 64, 64, 64,
    132, 64, 64, 64,
    196, 64, 64, 64,
    254, 64, 64, 64,

    2, 128, 64, 64,
    66, 128, 64, 64,
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
      <Spring native from={{ x: 128, y: 224 }}>
      {(springProps: any) => (
          <animated.Sprite {...springProps}  ref={getRef} onClick={onClick}
          image={charImage} animations={{ standing: sta, stopped }} animation={status} frameRate={12} frameIndex={0} />
      )}
      </Spring>
    </React.Fragment>
  );
}