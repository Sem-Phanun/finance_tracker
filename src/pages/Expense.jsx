import { Form, Input, Button, Table } from 'antd';
import React from 'react';

const CategoryPage = () => {
  const columns = [
    { title: 'Category', dataIndex: 'name', key: 'name' },
    { title: 'Action', dataIndex: 'action', key: 'action', render: () => <Button type="link">Delete</Button> },
  ];

  const data = [
    { key: '1', name: 'Salary' },
    { key: '2', name: 'Groceries' },
  ];

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="">
      <h1>Expense</h1>
    </div>
  );
};

export default CategoryPage;
