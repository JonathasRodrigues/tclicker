import React, { Component } from "react";
import { IItem } from "../classes/Item";
import { connect } from "react-redux";
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

class ListAvaiableItems extends Component<any, any> {
  render() {
    const { list, count, addItem, classes } = this.props;
    return (
      <React.Fragment>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Itens disponíveis
            </ListSubheader>
          }
          className={classes.root}
        >
          {Array.isArray(list)
            ? list.map((item: IItem) => (
                <React.Fragment>
                  <Divider />
                  <ListItem
                    alignItems="flex-start"
                    disabled={count < item.price}
                    key={`Item-${item.id}`}
                    onClick={() => addItem(item)}
                    button
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={`Item ${item.name} image`}
                        src={item.image}
                        className={classes.avatar}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="p"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {item.price} G
                            {/* <span><img alt='coin' height='32' width='32' src={'/items/coin.png'}/>{item.price} G </span> */}
                          </Typography>
                          <span>{item.description}</span>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </React.Fragment>
              ))
            : "Não há Items disponíveis"}
        </List>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    addItem: (item: IItem) => {
      dispatch({ type: "REMOVE_COUNT", quantity: item.price });
      dispatch({ type: "ADD_NEW_MY_ITEM", item });
    }
  };
}

function mapStateToProps(state: any) {
  const { AvaiableItems, MainCount } = state;
  return {
    list: AvaiableItems,
    count: MainCount
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ListAvaiableItems));
