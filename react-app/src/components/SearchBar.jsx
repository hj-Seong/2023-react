import React, { Component } from 'react'

// 글자를 입력 받아서 필터링하는 컴포넌트
export class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {isOnlyStock, toggleStock} = this.props;
    return (
      <div>
        <input type="text" placeholder='Search...' />
        <br />
        <input type="checkbox" checked={isOnlyStock} />
        <label htmlFor="" 
        onClick={toggleStock}
        >
          Only show products on stock
        </label>
      </div>
    )
  }
}

export default SearchBar