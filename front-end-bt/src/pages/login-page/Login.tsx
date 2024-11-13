import React from "react";

import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;


const Login = () => {
    const { token } = useToken();
    const screens = useBreakpoint();
  
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
  
    const styles = {
      container: {
        margin: "0 auto",
        padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
        width: "380px"
      },
      footer: {
        marginTop: token.marginLG,
        textAlign: "center",
        width: "100%"
      },
      forgotPassword: {
        float: "right"
      },
      header: {
        marginBottom: token.marginXL,
        display: "grid",
        placeItems: "center" // Centraliza horizontal e verticalmente
      },
      section: {
        alignItems: "center",
        backgroundColor: token.colorBgContainer,
        display: "flex",
        height: screens.sm ? "100vh" : "auto",
        padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
      },
      text: {
        color: token.colorTextSecondary
      },
      title: {
        fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading4
      }
    };

    return ( 
        <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
          <img src="/logo-marca.svg" alt="Descrição do SVG" width="200" height="200" />

  
            <Title style={styles.title}>Entrar</Title>
            <Text style={styles.text}>
            Pronto para jogar? Reserve com um toque!
            </Text>
          </div>
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Me Lembre</Checkbox>
              </Form.Item>
              <a style={styles.forgotPassword} href="">
                Esqueceu a senha?
              </a>
            </Form.Item>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Button block="true" type="primary" htmlType="submit">
                Entrar
              </Button>
              <div style={styles.footer}>
                <Text style={styles.text}>Não tem uma conta?</Text>{" "}
                <Link href="">Cadastre-se!</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </section>
    
    );
}
 
export default Login;