import React, {ChangeEvent, FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {UseActions} from "../hooks/useActions";

const LoginForm:FC = () => {

  const {error, isLoading} = useTypesSelector(state => state.auth)
  const [formData, setFormData] = useState({username: '', password: ''})
  const {login} = UseActions()

  const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const submit = () => {
    login(formData.username, formData.password)
  }

  return (
    <Form
      onFinish={submit}
    >
      {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input
          name="username"
          value={formData.username}
          onChange={handleFormData}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input
          name="password"
          value={formData.password}
          type={'password'}
          autoComplete={'on'}
          onChange={handleFormData}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;