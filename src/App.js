import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './HOC';

const StocksData = [
  {
      id: 1,
      name: 'Lightings'
        
  },
  {
      id: 2,
      name: 'Furnitures'
  },
  {
      id: 3,
      name: 'Clothes'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'XYZ'
        
  },
  {
      id: 2,
      name: 'ABC'
  },
  {
      id: 3,
      name: 'JKL'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);


class App extends Component {
  
  render() {
    return (
      <div>
        <Users></Users>
      </div>
    )
  }
}

export default App;