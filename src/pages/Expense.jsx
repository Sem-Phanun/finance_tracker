import React, { useState } from 'react';
import { Table, Button, Card, Typography } from 'antd';
const { Title } = Typography;
const ExpensePage = () => {
  // Sample data for the expense table
  const [expenseData, setExpenseData] = useState([
    { key: '1', date: '2024-09-02', amount: '$100', category: 'Food', description: 'Groceries' },
    { key: '2', date: '2024-09-05', amount: '$50', category: 'Transport', description: 'Taxi' },
  ]);

  // Table columns setup
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div>
          <Button className="mr-2" type="primary" onClick={() => handleEdit(record.key)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (key) => {
    console.log(`Edit record with key: ${key}`);
  };

  const handleDelete = (key) => {
    const newData = expenseData.filter((item) => item.key !== key);
    setExpenseData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission and add new expense record
  };

  return (
    <div className="min-h-screenp-8">
      {/* Header */}
      <div className="mb-8">
      <Title level={5} className="mb-4 text-center md:text-left">Expenses Overview</Title>
      </div>

      {/* Form for Adding Expense */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Amount</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Date</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Category</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter category"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Description</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Expense
          </button>
        </form>
      </div>

      {/* Expense Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Expense History</h2>
        <Table columns={columns} dataSource={expenseData} pagination={{ pageSize: 5 }} />
      </div>

      {/* Monthly Summary */}
      <div className="mt-8">
        <Card title="Monthly Summary" className="shadow-md">
          <p className="text-xl">Total Expenses for September 2024: $150</p>
        </Card>
      </div>
    </div>
  );
};

export default ExpensePage;
