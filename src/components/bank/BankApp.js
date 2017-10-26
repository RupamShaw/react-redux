import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './BankApp.css'
class BankApp extends Component {
    handleDeposit() {
        this.props.onDeposit(this.refs.amount.value);
        this.refs.amount.value = '';
    }
    handleWithdraw() {
        this.props.onWithdraw(this.refs.amount.value);
        this.refs.amount.value = '';
    }
    render() {

        return (
            <div>
                <header>
                    <img src="//www.pro-react.com/logos/redux-bank.svg" width="110" alt='bank' />Redux Bank
    </header>
                <h1>Your balance is ${(this.props.balance)}</h1>
                <div className="atm">
                    <input type="text" placeholder="Enter Ammount" ref="amount" />
                    <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
                    <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
                </div>
            </div>
        );
    }
}
BankApp.propTypes = {
    balance: PropTypes.number,
    onDeposit: PropTypes.func,
    onWithdraw: PropTypes.func
};
export default BankApp