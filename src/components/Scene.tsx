import React, { Component } from 'react';
import { connect, ReactReduxContext, Provider } from 'react-redux';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { Stage, Layer } from 'react-konva';
import Character from './Character';
import Scenario from './Scenario';
import Enemy from './Enemy';

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
    const { classes, count, world } = this.props;
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <React.Fragment>
            <Stage width={world.width} height={world.height} className={classes.root}>
              <Provider store={store}>
                <Layer>
                    <Scenario />
                </Layer>
                <Layer>
                  <Character />
                  <Enemy/>
                </Layer>
              </Provider>
            </Stage>
            <h1>{count} Gold Coins</h1>
          </React.Fragment>
        )}
      </ReactReduxContext.Consumer>
    );
  }
}

function mapStateToProps(state: any) {
  const { MainCount, World } = state;
  return {
    count: MainCount,
    world: World
  }
}

function mapDispatchToProps(dispatch: any){
  return {
    addCount: () => dispatch({ type: 'ADD_COUNT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Scene));
