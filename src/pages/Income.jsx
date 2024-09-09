import { Form, Input, Button, Select, DatePicker } from 'antd';
import React from 'react';

const { Option } = Select;

const IncomeForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="">
      <h1>income</h1>
    </div>
  );
};

export default IncomeForm;
