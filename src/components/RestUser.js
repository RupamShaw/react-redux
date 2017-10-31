import React from 'react';

export default class RestUser extends React.Component {

  render() {
    const { value } = this.props
    let mapObj

    if (!(value === 'undefined' || value == null)) {
      let j = JSON.parse(value);
      mapObj = (<div><li key={j.id} >name : {j.name}    </li> <span>age: {j.age}</span></div>)
    }

    return (
      <div>
        <h1>Async data fetch  </h1>
        <ul> {mapObj}</ul>
        <div>{value}</div>
        <button onClick={this.props.onClickUser} >users</button>
      </div>
    )
  }
}
