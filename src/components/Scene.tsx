import React, { Component } from 'react';
import { connect, ReactReduxContext, Provider } from 'react-redux';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { Stage, Layer } from 'react-konva';
import Scenes from 'definitions/scenes';
import { IScene } from 'classes/Scene';
import Scenario from './Scenario';
import { Button } from '@material-ui/core';

const styles = {
  root: {
    padding: createMuiTheme().spacing(2),
    textAlign: 'center' as 'center',
  },
  button: {
    margin: createMuiTheme().spacing(2),
  }
};

class Scene extends Component<any, any> {
  render() {
    const { classes, count, world, currentLevel, nextLevel, previousLevel } = this.props;
    const currentScene = Scenes[currentLevel];
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <React.Fragment>
            <Stage width={world.width} height={world.height} className={classes.root}>
              <Provider store={store}>
                {currentScene.map((scene: IScene) => (
                  <Layer key={scene.name}>
                    <Scenario scene={scene} />
                  </Layer>
                ))}
              </Provider>
            </Stage>
            <h1>{count} Gold Coins</h1>
            <Button onClick={previousLevel}> Previous Level </Button>
            <Button onClick={nextLevel}> Next Level </Button>
          </React.Fragment>
        )}
      </ReactReduxContext.Consumer>
    );
  }
}

function mapStateToProps(state: any) {
  const { MainCount, World, Level } = state;
  return {
    count: MainCount,
    world: World,
    currentLevel: Level
  }
}

function mapDispatchToProps(dispatch: any){
  return {
    addCount: () => dispatch({ type: 'ADD_COUNT'}),
    previousLevel: () => dispatch({ type: 'PREVIOUS_LEVEL' }),
    nextLevel: () => dispatch({ type: 'NEXT_LEVEL' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Scene));
