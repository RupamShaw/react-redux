
import BankApp from '../../components/bank/BankApp';
import { connect } from 'react-redux'
import bankActionCreators from '../../actions/bank/bankActionCreators';
const mapStateToProps = (state) => {
    return {
        balance: state.balance
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
