import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import useImage from 'use-image';
import { Spring, animated } from 'react-spring/renderprops-konva';
import Damage2 from './Damage2';
import { Text } from 'react-konva';

function EnemyBody(props: any) {
  const [status] = useState('standing');
  const [charImage] = useImage('/monsters/demon.png');
  //const [damages, setDamage] = useState(0);
  const sta = [
    // x, y, width, height (6 frames)
    130, 255, 62, 62,
    130, 320, 62, 62,
    //340, 90, 60, 60,
    130, 384, 62, 62,
  ];

  const stopped = [
    // x, y, width, height (6 frames)
    130, 255, 62, 62,

  ];

  // const onClick = () => {
  //   if (props.onClick) {
  //     props.onClick();
  //   }
  //   setDamage(damages + 1);
  // }

  const CurrentDamages = (props: any) => {
    const dms: any[] = [];
    for(let d = 0; d < props.damages; d++) {
      dms.push(<Damage2 onClick={props.onClick}/>);
    }
    return (
    <React.Fragment>
      {dms}
    </React.Fragment>          
    );
  }

  return (
    <React.Fragment>
      {/* from={{ x: 128, y: 224 }} to={{ x: 128, y: 96 }} */}
      <Text x={140} y={212} text={`Demon`} fontFamily={'Arial Black'} fontSize={12} fill={'red'}/> 
      <Spring native from={{ x: 128, y: 224 }}>
      {(springProps: any) => (
        <animated.Sprite {...springProps}  ref={(node => {if(node && !node.isRunning()) node.start()})} onClick={props.onClick}
        image={charImage} animations={{ standing: sta, stopped }} animation={status} frameRate={3} frameIndex={0} />
      )}
      </Spring>
      <CurrentDamages damages onClick={props.onClick} />
    </React.Fragment>
  );
}

class Enemy extends Component<any, any> {
  render(){
    return (
      <EnemyBody onClick={this.props.addCount} />
    );
  }
}

function mapStateToProps(state: any) {
  const { MainCount } = state;
  return {
    count: MainCount
  }
}

function mapDispatchToProps(dispatch: any){
  return {
    addCount: () => dispatch({ type: 'ADD_COUNT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy);