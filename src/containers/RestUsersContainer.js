
import store from '../store'
import React, { Component } from 'react';
import axios from "axios";
import RestUser from '../components/RestUser'


class RestUsersContainer extends Component {

    render() {
        return (
            <RestUser
            value={JSON.stringify(store.getState().restUser.users[6])}
            onClickUser={() =>
             store.dispatch(
                 {  type: 'FETCH_USERS',
                    payload: axios.get("http://rest.learncode.academy/api/wstern/users") })}
           
            />
        )
    }
}
export default RestUsersContainer