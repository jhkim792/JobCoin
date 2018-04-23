import React, {Component} from 'react';
import LoginCard from './cards/login-card';
import WalletCard from './cards/wallet-card';
import TransferCard from './cards/transfer-card';
import GraphCard from './cards/graph-card';

import styled from 'styled-components'

const WalletWrapper = styled.div `
  padding-bottom: 20px;
`;
const LoginWrapper = styled.div `
`;
const TransferWrapper = styled.div `
`;

const GraphWrapper = styled.div ``;

export default class GeminiCard extends Component {
  updateComponents = (_this) => {
    this.props.updateComponents();
  }

  render() {
    const {balance, transactions, user, type} = this.props;
    switch (type) {
      case("login"):
        return (
          <LoginWrapper>
            <LoginCard/>
          </LoginWrapper>)
      case("wallet"):
        return (
          <WalletWrapper>
            <WalletCard balance={balance}/>
          </WalletWrapper>)
      case("transfer"):
        return (
          <TransferWrapper>
            <TransferCard user={user} updateComponents={this.updateComponents}/>
          </TransferWrapper>)
      case("graph"):
        return (
          <GraphWrapper>
            <GraphCard transactions={transactions} user={user}/>
          </GraphWrapper>)
      default:
        return ("")
    }
  }
}
