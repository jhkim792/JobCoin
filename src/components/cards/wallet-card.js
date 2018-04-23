import React, {Component} from 'react';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';

export default class WalletCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader title="JobCoin Balance"/>
        <CardTitle title={this.props.balance}/>
      </Card>)
  }

}
