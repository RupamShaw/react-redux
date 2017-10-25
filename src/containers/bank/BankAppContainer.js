import React, { Component } from 'react';
import store from '../../store.js'
import constants from '../../actions/bank/constants';
import BankApp from '../../components/bank/BankApp';
class BankAppContainer extends Component {
    constructor(...args) {
        super(...args);
        store.dispatch({ type: constants.CREATE_ACCOUNT })
        this.state = {
            balance: store.getState().balance
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() =>
            this.setState({ balance: store.getState().balance })
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <BankApp
                balance={store.getState().bankReducer.balance}
                onDeposit={(amount) => store.dispatch(
                    { type: constants.DEPOSIT_INTO_ACCOUNT, amount: amount })}
                onWithdraw={(amount) => store.dispatch(
                    { type: constants.WITHDRAW_FROM_ACCOUNT, amount: amount })}
            />
        )
    }
}
export default BankAppContainer
