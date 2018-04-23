import React, { Component } from 'react';
import {AppBar, FlatButton} from 'material-ui';
import GeminiCard from '../components/gemini-card';
import styled from 'styled-components';
import {GetInfo} from '../components/requests/get-info';

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const LeftSide = styled.div`
  height: stretch;
  align-items; center;
  min-width: 350px;
  width: 30%;
  padding-right: 20px;
`;

const GraphWrapper = styled.div`
  width: 70%;
  position: relative;
  top: ${p => (p.top ? 0 : null)};
  right: ${p => (p.right ? 0 : null)}
  left: ${p => (p.left ? 0 : null)}
  bottom: ${p => (p.bottom ? 0 : null)}
  width: ${p => (p.width ? 0 : null)}
`;

export default class Profile extends Component {
  state = {
    balance: "",
    transactions: []
  }

  updateComponents = () => {
    const user = this.props.match.params.user;
    GetInfo(user, this)
  }

  componentDidMount(){
    const user = this.props.match.params.user;
    GetInfo(user, this)
  }

  render(){
    const {balance, transactions} = this.state;
    const user = this.props.match.params.user;

    return(
      <div>
        <AppBar style={{marginBottom: '20px'}} iconElementLeft={<span></span>} iconElementRight={<FlatButton href="/" label="Sign Out" />} title="JobCoin" />
        <ProfileWrapper>
          <LeftSide>
            <GeminiCard balance={balance} type="wallet" />
            <GeminiCard user={user} updateComponents={this.updateComponents} type="transfer" />
          </LeftSide>
          <GraphWrapper>
            <GeminiCard transactions={transactions} user={user} type="graph" />
          </GraphWrapper>
        </ProfileWrapper>
      </div>
    )
  }
}
