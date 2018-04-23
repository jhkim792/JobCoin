import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {PostCoins} from '../requests/post-coins';

export default class TransferCard extends Component {
  state = {
    destination: "",
    amount: "",
    user: this.props.user
  }

  changeHandler = (e) => {
    const value = e.target.value
    this.setState({
      [e.target.dataset.type]: value
    })
  }

  updateComponents = () => {
    this.props.updateComponents(this);
  }

  buttonAction = () => {
    const {destination, amount, user} = this.state;
    PostCoins(user, destination, amount, this)
  }

  render() {
    return (
      <Card>
        <CardTitle title="Transfer JobCoins"/>
        <CardText>
          <TextField
            style={{
              paddingLeft: '10px'
            }}
            ref={el => (this.destination = el)}
            data-type="destination"
            hintText="Destination Address"
            errorText={this.state.error ? this.state.error.toAddress[0]: ""}
            value={this.state.destination}
            onChange={this.changeHandler}
            />
        </CardText>
        <CardText>
          <TextField style={{
              paddingLeft: '10px'
            }}
            ref={el => (this.amount = el)}
            data-type="amount"
            hintText="Amount to Send"
            errorText={this.state.error ? this.state.error.amount[0] : ""}
            value={this.state.amount}
            onChange={this.changeHandler}
            />
        </CardText>
        <CardText>
          {this.state.message}
        </CardText>
        <CardActions>
          <RaisedButton onClick={this.buttonAction.bind(this)} label="Transfer"/>
        </CardActions>
      </Card>)
  }

}
