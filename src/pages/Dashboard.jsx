// Dashboard.jsx
import React from 'react';
import { Card, Col, Row, Statistic, List, Typography, Button } from 'antd';
import { DollarOutlined, FileTextOutlined, PieChartOutlined } from '@ant-design/icons';
import { PieChart, Pie, Tooltip, Cell } from 'recharts'; // Import from Recharts


const { Title } = Typography;

const spendingData = [
  { category: 'Groceries', amount: 500 },
  { category: 'Rent', amount: 1200 },
  { category: 'Utilities', amount: 150 },
  { category: 'Entertainment', amount: 200 },
  { category: 'Transport', amount: 100 },
];
const recentTransactions = [
  { title: 'Salary', amount: 1500, category: 'Income' },
  { title: 'Grocery', amount: -200, category: 'Expense' },
  { title: 'Utilities', amount: -100, category: 'Expense' },
];
const COLORS = ['#FF8042', '#00C49F', '#FFBB28', '#8E24AA', '#3E5F7E'];

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Title level={5} className="mb-4 text-center md:text-left">Personal Finance Dashboard</Title>

      <Row gutter={[16, 24]}>
        {/* Existing Cards */}
        <Col xs={24} sm={12} lg={8}>
          <Card className='text-sm'>
            <Statistic
              title="Total Balance"
              value={112893}
              precision={2}
              prefix={<DollarOutlined />}
              suffix="USD"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Monthly Income"
              value={5500}
              precision={2}
              prefix={<DollarOutlined />}
              suffix="USD"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Monthly Expenses"
              value={3200}
              precision={2}
              prefix={<DollarOutlined />}
              suffix="USD"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 24]} className="mt-6">
        {/* Existing Sections */}
        <Col xs={24} md={12} lg={8}>
          <Card title="Recent Transactions">
            <List
              dataSource={recentTransactions}
              renderItem={item => (
                <List.Item>
                  <div className="flex justify-between w-full">
                    <span>{item.title}</span>
                    <span className="text-gray-500 text-sm">({item.category})</span>
                    <span className={item.amount < 0 ? 'text-red-500' : 'text-green-500'}>
                      {item.amount} USD
                    </span>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        {/* <Col xs={24} md={12} lg={16}>
          <Card title="Financial Overview">
            <PieChartOutlined className="text-2xl mb-4" />
            <p>Graphical representation of financial data goes here.</p>
          </Card>
        </Col> */}
        
        {/* Spending Categories */}
        {/* <Col xs={24} lg={12}>
          <Card title="Spending Categories">
            <PieChart width={300} height={350}>
              <Pie
                data={spendingData}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {spendingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Card>
        </Col> */}
      </Row>

      <div className="mt-6 flex justify-end">
        <Button type="primary" icon={<FileTextOutlined />}>View Report</Button>
      </div>
    </div>
  );
};

export default Dashboard;
