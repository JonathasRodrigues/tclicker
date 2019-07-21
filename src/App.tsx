import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ListMyItems from './components/ListMyItems';
import ListAvaiableItems from './components/AvaiableItems';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    padding: '2rem',
    backgroundColor: '#f4f4ff'
  },
};

class App extends Component<any, any> {
  render() {
    const { count, addCount, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ListMyItems />
          </Grid>
          <Grid item xs={4}>
            <div>
              <Button color='secondary' onClick={() => addCount()}>Click here</Button>
              <p>
                {count}
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <ListAvaiableItems />
          </Grid>
        </Grid>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
