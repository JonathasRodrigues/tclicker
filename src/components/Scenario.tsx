import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sprite } from 'react-konva';
import useImage from 'use-image';
import { IWorld } from 'classes/World';

interface IPropsFromConnect {
  world: IWorld;
}

function Field (props: any) {
  const [charImage] = useImage('./sprites/scenario.png');
  const { size } = props;
  const standing = [
    0, 480, size, size,
  ];
  return (
    <Sprite x={props.x} y={props.y} ref={(node => {if(node && !node.isRunning()) node.start()})}
    image={charImage} animations={{ standing }} animation={'standing'} frameRate={1} frameIndex={0} />
  );
}

class Scenario1 extends Component<IPropsFromConnect , any> {
  render(){
    const { world } = this.props;

    const GenerateFields = () => {
      const { fieldSize } = world;
      const fields = world.getPositions();
      const size = fields.length + 1;
      const numberFields = Math.round(Math.sqrt(size));
      let scenario: any = [];
      for (let y = 0; y < numberFields; y++) {
        for (let x = 0; x < numberFields; x++) {
          scenario.push(
            <Field key={`position-${x}-${y}`} x={x * fieldSize} y={y * fieldSize} size={fieldSize} />
          );
        }
      }
      return scenario;
    }
    return (
      <React.Fragment>
        <GenerateFields />
      </React.Fragment>
    );
  }
}

function mapStateToProp(state: any) {
  return {
    world: state.World
  }
}

export default connect(mapStateToProp)(Scenario1);
