 import React, {useState, useContext } from "react";


import { Button, Checkbox, Form, Input,Radio,Select, Space,DatePicker } from 'antd';



function AntDesignForm () {
    const options = [];
    options.push({
        label: "Python",
        value: "Python",
      });
      options.push({
        label: "C",
        value: "C",
      });
      options.push({
        label: "Java",
        value: "Java",
      });
    
    
    
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
      };
      const formItemLayout =
      formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 19,
          },
      }
      : null;
      const buttonItemLayout =
          formLayout === 'horizontal'
          ? {
              wrapperCol: {
                span: 14,
                offset: 4,
              },
            }
          : null;
          const handleChange = (value) => {
            console.log(`selected ${value}`);
          };
          const onChange = (date, dateString) => {
            console.log(date, dateString);
          };
          const onFinish = (values) => {
            console.log('Success:', values);
          };
          
          const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
    return (
        <Form
        {...formItemLayout}
        layout="horizontal"
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        style={{
        //   maxWidth: formLayout === 600,
        width: "600px"
        }}
      >
        <Form.Item>
        </Form.Item>
        <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        <Form.Item
        label="Subject"
        name="Subject"
        rules={[
            {
              required: true,
              message: 'Please select your subject!',
            },
          ]}
        >
        <Space
    style={{
      width: '300px',
    }}
    direction="vertical"
  >
    <Select
      mode="multiple"
      allowClear
      style={{
        width: '300px',
        
      }}
      placeholder="Please select"
      onChange={handleChange}
      options={options}
    />
    
     
  </Space>
        </Form.Item>
        <Form.Item label="Birthday"
      name="Birthday"
      rules={[
          {
            required: true,
            message: 'Please select your date!',
          },
        ]}
      
      >
        <Space direction="vertical">

         <DatePicker style={{ width:"300px" }} onChange={onChange} picker="day" />
       </Space>
        </Form.Item>
        <Form.Item label="Age"
        name="Age"
        rules={[
          {
            required: true,
            message: 'Please enter your age!',
          }, 
        ]}
      >

          <Input placeholder="Age" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit"> Submit</Button>
        </Form.Item>
        <Form.Item>
        </Form.Item>
      </Form>
      
      
    )
}
export default AntDesignForm;