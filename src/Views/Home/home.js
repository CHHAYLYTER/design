import { Button, Form, Input } from 'antd'
import React from 'react'
import './home.css'



function Home () {
  return (
    <div className='homebar'>
      <Form 
      labelCol={{ span: 10}}
      autoComplete='off'

      onFinish={(values) => {
        console.log('Finish',values)
      }}    // log

      onFinishFailed={(error) => {
        console.log({error})
      }}    // log error
      >
        <Form.Item 
        label="Full Name" 
        name="fullname" 
        rules={[
          {
          required: true,
          message: "Please......."  // input
          },
          {
            whitespace: true  // Space
          },
          {

          }
        ]}
        hasFeedback   // ready input
        >
          <Input 
          placeholder="Enter Your Full Name"
          />
        </Form.Item>

        <Form.Item 
        label="Email" 
        name="email"
        rules={[
          {
            required: true,
            message: "Please......"
          },
          {
            type: "email"
          }
          
        ]}
        hasFeedback
        >
          <Input 
          placeholder="Enter Your Email"
          />
        </Form.Item>

        <Form.Item 
        label="Password" 
        name="password"
        rules={[
          {
            required: true,
            message: "Please Enter Your Password!"
          }
        ]}
        hasFeedback
        >
          <Input.Password
          placeholder="Enter Your Password"
          type='password'
          />
        </Form.Item>

        <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password
        placeholder="Comfirm Password" />
      </Form.Item>

        <Form.Item
        label= "Age"
        name= "age"
        rules={[
          {
            required: true,
            message: "Enter Your Age"
          }
        ]} hasFeedback
        >
          <Input
          placeholder='Your Age'
          type= 'number'
          />
        </Form.Item>
        <Form.Item
        >
          <Button block
          type="primary"
          htmlType='submit'
          > Register </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Home