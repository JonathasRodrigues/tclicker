import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sprite, Rect } from 'react-konva';
import useImage from 'use-image';
import { IWorld } from 'classes/World';
import { IScene } from 'classes/Scene';
import { ITile } from 'classes/Tile';
import ScenesTypes from 'definitions/scenes/types';
import { ISprite } from 'classes/Sprite';
import Mob from './Mob';


interface IProps {
  scene: IScene
}

interface IPropsFromConnect {
  world: IWorld;
}

function Field (props: any) {
  const tile: ITile = props.tile;
  const [charImage] = useImage(tile.sprite.file);
  if (props.type === ScenesTypes.FLOOR) {
    return (
      <Sprite x={props.x} y={props.y} ref={(node => {if(node && !node.isRunning()) node.start()})}
      image={charImage} animations={tile.sprite.animations} animation={tile.sprite.defaultAnimation} frameRate={1} frameIndex={0} />
    );
  } else if (props.type === ScenesTypes.MOBS) {
    const mob: ISprite = props.tile;
    return ( <Mob config={mob} /> );
  } else {
    return <Rect fill={'green'} height={props.y * props.size} width={props.x * props.size} />;
  }
}

class Scenario extends Component<IProps & IPropsFromConnect , any> {
  render(){
    const { world, scene } = this.props;

    const GenerateFields = () => {
      const { fieldSize } = world;
      const fields = world.getPositions();
      const size = fields.length + 1;
      const numberFields = Math.round(Math.sqrt(size));
      let scenario: any = [];
      for (let y = 0; y < numberFields; y++) {
        for (let x = 0; x < numberFields; x++) {
          const scn = scene.fields[x] || scene.defaultField;
          if (scn) {
            scenario.push(
              <Field key={`position-${x}-${y}`} type={scene.type} tile={scn} x={x * fieldSize} y={y * fieldSize} size={fieldSize} />
            );
          }
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

export default connect(mapStateToProp)(Scenario);
