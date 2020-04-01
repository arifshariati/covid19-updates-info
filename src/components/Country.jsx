import React, { Component } from 'react';
import Axios from 'axios'
import 'antd/dist/antd.css'
import { Table} from 'antd'

class Country extends Component{

  dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    ,
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    ,
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    ,
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    ,
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    ,
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    ,
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  render(){
    return(
    <div>
      <Table dataSource={this.dataSource} columns={this.columns} />;
    </div>
    )
  }
}
export default Country;
