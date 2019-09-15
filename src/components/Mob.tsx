import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import useImage from 'use-image';
import { Spring, animated } from 'react-spring/renderprops-konva';
import Damage2 from './Damage2';
import { Text } from 'react-konva';
import { ISprite } from 'classes/Sprite';

function MobBody(props: any) {
  const currentSprite: ISprite = props.config.config.sprite;
  const [status] = useState(currentSprite.defaultAnimation);
  const [charImage] = useImage(currentSprite.file);
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
      <Text x={140} y={212} text={props.config.name} fontFamily={'Arial Black'} fontSize={12} fill={'red'}/> 
      <Spring native from={{ x: 128, y: 224 }}>
      {(springProps: any) => (
        <animated.Sprite {...springProps}  ref={(node => {if(node && !node.isRunning()) node.start()})} onClick={props.onClick}
        image={charImage} animations={currentSprite.animations} animation={status} frameRate={3} frameIndex={0} />
      )}
      </Spring>
      <CurrentDamages damages onClick={props.onClick} />
    </React.Fragment>
  );
}

class Mob extends Component<any, any> {
  render(){
    return (
      <MobBody config={this.props} onClick={this.props.addCount} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Mob);