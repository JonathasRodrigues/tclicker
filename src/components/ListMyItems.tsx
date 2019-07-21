import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IItem } from '../classes/Item';

class ListMyItems extends Component<any, any> {
  render() {
    const { list } = this.props;
    return (
      <React.Fragment>
        {Array.isArray(list) ? list.map((obj: IItem) => (
          <p key={`My-item-${obj.id}`}>{obj.quantity} || Nome: {obj.name} - Valor: {obj.price}</p>
        )) : 'Você não tem Items'}
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {

  }
}

function mapStateToProps(state: any) {
  const { MyItems, MainCount } = state;
  return {
    list: MyItems,
    count: MainCount
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMyItems);
