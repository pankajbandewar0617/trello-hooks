import React, { Component } from 'react';
import Checklist from './checklist';
import { Card, Modal } from 'antd';

class Cards extends Component {
  state = { visible: false };

  showModal = (id) => {
    this.setState({
      visible: true,
      cardId: id,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        {this.props.cards.map((card) => (
          <div key={card.id} onClick={() => this.showModal(card.id)}>
            {card.name}
            <Card style={{ width: 300 }}>
              <h3>{card.name}</h3>
            </Card>
          </div>
        ))}
        <div>{console.log(this.props.cards)}</div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Checklist cardId={this.state.cardId} />
        </Modal>
      </div>
    );
  }
}

export default Cards;
