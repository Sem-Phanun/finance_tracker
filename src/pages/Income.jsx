import React, { useState } from 'react';
import { Table, Button, Card, Typography } from 'antd';
const { Title } = Typography;
const Income = () => {
  // Sample data for the income table
  const [incomeData, setIncomeData] = useState([
    { key: '1', date: '2024-09-01', amount: '$500', description: 'Freelance Work' },
    { key: '2', date: '2024-09-05', amount: '$1200', description: 'Salary' },
  ]);

  // Table columns setup
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
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
    const newData = incomeData.filter((item) => item.key !== key);
    setIncomeData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission and add new income record
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="mb-8">
        <Title level={5} className="mb-4 text-center md:text-left">Income Overview</Title>
      </div>

      {/* Form for Adding Income */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Income</h2>
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
          <div>
            <label className="block font-medium text-gray-700">Description</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Income
          </button>
        </form>
      </div>

      {/* Income Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Income History</h2>
        <Table columns={columns} dataSource={incomeData} pagination={{ pageSize: 5 }} />
      </div>

      {/* Monthly Summary */}
      <div className="mt-8">
        <Card title="Monthly Summary" className="shadow-md">
          <p className="text-xl">Total Income for September 2024: $1700</p>
        </Card>
      </div>
    </div>
  );
};

export default Income;
