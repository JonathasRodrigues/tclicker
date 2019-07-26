import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ListMyItems from './components/UI/ListMyItems';
import ListAvaiableItems from './components/UI/AvaiableItems';
import { withStyles } from '@material-ui/core/styles';
import Scene from './components/Scene';

const styles = {
  root: {
    flexGrow: 1,
    padding: '2rem',
    backgroundColor: '#f4f4ff'
  },
};

class App extends Component<any, any> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify='center'>
          <Grid item xs={3}>
            <ListMyItems />
          </Grid>
          <Grid item xs={6}>
            <Scene />
          </Grid>
          <Grid item xs={3}>
            <ListAvaiableItems />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
