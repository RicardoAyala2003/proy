import React from 'react';
import { Table } from 'antd';
import './CommonTable.css';

const CommonTable = ({ columns, dataSource }) => {
  console.log(columns);
  console.log(dataSource);

  return (
    <div className="table-container">
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};

export default CommonTable;
