import React, {Component} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

export default class GraphCard extends Component {

  formatData = (data, type) => {
    // ugly change this later.
    // separating sent vs received coins to differentiate the data since transactions shows all types
    // It would be great computing this against the current balance or the context of total jobcoins maybe.
    var _this = this;
    var array;
    if (type === "received") {
      array = data.map((dataPoint, i) => {
        if ("toAddress" in dataPoint && dataPoint.toAddress === _this.props.user) {
          return {
            date: new Date(dataPoint.timestamp).toString(),
            received: parseInt(dataPoint.amount, 10)
          }
        } else {
          return null
        }
      })
    } else {
      array = data.map((dataPoint, i) => {
        if ("fromAddress" in dataPoint && dataPoint.fromAddress === _this.props.user) {
          return {
            date: new Date(dataPoint.timestamp).toString(),
            sent: parseInt(dataPoint.amount, 10)
          }
        } else {
          return null
        }
      })
    }
    return array.filter(function(n) {
      return n != null
    })
  }

  render() {
    var received = this.formatData(this.props.transactions, "received");
    var sent = this.formatData(this.props.transactions, "sent")
    return (
      <Card style={{
        height: "-webkit-fill-available"
      }}>
        <CardHeader title="JobCoin Transactions"/>
        <LineChart width={700} height={200} data={received} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <XAxis/>
          <YAxis/>
          <Tooltip/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Line type="monotone" dataKey="received" stroke="#ff7300"/>
        </LineChart>
        <LineChart width={700} height={200} data={sent} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <XAxis/>
          <YAxis/>
          <Tooltip/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Line type="monotone" dataKey="sent" stroke="#ff7300"/>
        </LineChart>
      </Card>)
  }

}
