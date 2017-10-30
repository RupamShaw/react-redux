
import BankApp from '../../components/bank/BankApp';
import { connect } from 'react-redux'
import bankActionCreators from '../../actions/bank/bankActionCreators';
const mapStateToProps = (state) => {
    //console.log('bankappcontainer state',state,'balance',state.bankReducer.balance)
    return {
        balance: state.bankReducer.balance
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
        onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount))
    }
}
const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp)
export default BankAppContainer
