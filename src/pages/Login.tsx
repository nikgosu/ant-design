import {Card, Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";
import React, {FC} from "react";

const Login:FC = () => {
  return (
    <Layout>
      <Row justify={'center'} align={'middle'} className={'h100'}>
        <Card>
          <LoginForm/>
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;