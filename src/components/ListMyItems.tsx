import React, { Component } from "react";
import { connect } from "react-redux";
import { IItem } from "../classes/Item";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = {
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: createMuiTheme().palette.background.paper
  },
  nested: {
    paddingLeft: createMuiTheme().spacing(4)
  },
  inline: {
    display: "inline"
  },
  avatar: {
    margin: 10
  }
};

class ListMyItems extends Component<any, any> {
  render() {
    const { list, classes } = this.props;
    return (
      <React.Fragment>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Itens Comprados
            </ListSubheader>
          }
          className={classes.root}
        >
          {Array.isArray(list) && list.length > 0 ? (
            list.map((obj: IItem) => (
              <React.Fragment>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Item ${obj.name} image`}
                      src={obj.image}
                      className={classes.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={obj.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="p"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Você possui
                          {` ${obj.quantity} ${obj.name}(s)`}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  {/* <p key={`My-item-${obj.id}`}>
                    {obj.quantity} || Nome: {obj.name} - Valor: {obj.price}
                  </p> */}
                </ListItem>
              </React.Fragment>
            ))
          ) : (
            <React.Fragment>
              <Divider />
              <ListItem>Não há items</ListItem>
            </React.Fragment>
          )}
        </List>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {};
}

function mapStateToProps(state: any) {
  const { MyItems, MainCount } = state;
  return {
    list: MyItems,
    count: MainCount
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ListMyItems));
