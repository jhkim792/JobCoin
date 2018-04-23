import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import image from '../../images/gobcoin.png'
import TextField from 'material-ui/TextField';
import {LoginInfo} from '../requests/login-info';

export default class LoginCard extends Component {

  state = {
    login: false,
    input: ""
  }

  changeHandler = (e) => {
    this.setState({input: e.target.value})
  }

  buttonAction = () => {
    var address = this.state.input;
    LoginInfo(address, this)

  }

  render() {
    const {error, login, user} = this.state;
    if (login) {
      return (<Redirect to={"/profile/" + user}/>)
    }
    return (
      <Card>
        <CardHeader
          title="JobCoin"
          subtitle="I've made a huge mistake"
          avatar={image}
          />
        <CardTitle title="Welcome! Sign in with you JobCoin address"/>
        <TextField
          style={{
            paddingLeft: '10px'
          }}
          value={this.state.input}
          onChange={this.changeHandler}
          hintText="address"
          errorText={error ? "Address not found, try another?" : ""}
          ref={el => (this.address = el)}
          />
        <CardActions>
          <RaisedButton onClick={this.buttonAction.bind(this)} label="Sign In"/>
        </CardActions>
      </Card>)
  }

}
