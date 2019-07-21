import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Typography } from '@material-ui/core';
import Character from '../classes/Character';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

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
    const { count, addCount, classes } = this.props;
    const character = new Character({ name: 'Joohny', level: 1, outfit: '/outfits/basic.gif' });
    return (
      <div className={classes.root}>
        <p>Name: {character.name}</p>
        <p>Level: {character.level}</p>
        <img src={character.outfit} alt='outfit' />
        <Divider />
        <p> Clique no báu </p>
        <img alt='bau' src='/items/bau.gif' className={classes.button} onClick={() => addCount()}></img>
        <Typography variant='h2' gutterBottom>
          {count}
        </Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Scene));
